"""Selenium integration tests for the Tree component, driving the usage.py
demo app via dash[testing]'s `dash_duo` fixture.

Run with: `pytest tests`. Install deps from tests/requirements.txt first.
"""
from dash.testing.application_runners import import_app
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait


# --- helpers ----------------------------------------------------------------

def _input_value(driver, selector):
    return driver.find_element(By.CSS_SELECTOR, selector).get_attribute('value')


def _wait_for_input_value(dash_duo, selector, expected, timeout=5):
    WebDriverWait(dash_duo.driver, timeout).until(
        lambda d: _input_value(d, selector) == expected,
        message=f'value of {selector} did not become {expected!r}',
    )


def _wait_for_row(dash_duo, name, timeout=5):
    """Wait until a .tree-row with the given visible text exists and return it."""
    def find(d):
        for row in d.find_elements(By.CSS_SELECTOR, '#tree .tree-row'):
            if row.text.strip() == name:
                return row
        return False
    return WebDriverWait(dash_duo.driver, timeout).until(
        find, message=f'tree row {name!r} never appeared',
    )


def _treeitem_for_row(row):
    return row.find_element(By.XPATH, './ancestor::li[@role="treeitem"][1]')


def _visible_row_texts(dash_duo):
    return [r.text.strip() for r in dash_duo.find_elements('#tree .tree-row')]


def _wait_focus_on_treeitem(dash_duo, timeout=5):
    """Wait until DOM focus is on a tree row's <li>. Useful after a click
    that triggers anchor navigation — focus only lands on the row after the
    component's requestAnimationFrame re-focus dance."""
    WebDriverWait(dash_duo.driver, timeout).until(
        lambda d: d.switch_to.active_element.get_attribute('role') == 'treeitem'
    )


# --- tests ------------------------------------------------------------------

def test_top_level_folders_render(dash_duo):
    """All six top-level folder names appear after page load."""
    app = import_app('usage')
    dash_duo.start_server(app)
    _wait_for_row(dash_duo, 'Asset quality')
    texts = _visible_row_texts(dash_duo)
    for name in ['Asset quality', 'Profitability', 'Capital',
                 'Liquidity & funding', 'Market risk', 'Operational risk']:
        assert name in texts, f'{name!r} not visible. Got: {texts}'


def test_open_by_default_shows_descendants(dash_duo):
    """With open_by_default=True (the default), nested rows are visible
    on first paint."""
    app = import_app('usage')
    dash_duo.start_server(app)
    _wait_for_row(dash_duo, 'Return on equity')


def test_aria_roles_are_set(dash_duo):
    """Outer ul has role=tree, rows have role=treeitem, child uls have
    role=group. Folders carry aria-expanded; leaves do not."""
    app = import_app('usage')
    dash_duo.start_server(app)
    _wait_for_row(dash_duo, 'Profitability')

    assert dash_duo.find_element('#tree ul[role="tree"]') is not None
    assert dash_duo.find_elements('#tree li[role="treeitem"]'), 'no treeitems'
    assert dash_duo.find_elements('#tree ul[role="group"]'), 'no role=group'

    folder_li = _treeitem_for_row(_wait_for_row(dash_duo, 'Profitability'))
    assert folder_li.get_attribute('aria-expanded') in ('true', 'false')

    leaf_li = _treeitem_for_row(_wait_for_row(dash_duo, 'Return on equity'))
    # Leaves must not carry aria-expanded — invalid except on folders.
    assert leaf_li.get_attribute('aria-expanded') is None


def test_clicking_leaf_updates_selected_id(dash_duo):
    """Clicking a leaf fires setProps({selected_id}); the demo callback
    wires that into #clicked-node."""
    app = import_app('usage')
    dash_duo.start_server(app)
    _wait_for_row(dash_duo, 'Return on equity').click()
    _wait_for_input_value(dash_duo, '#clicked-node', 'roe')


def test_clicking_folder_toggles_expanded(dash_duo):
    """Clicking a folder row flips its aria-expanded attribute."""
    app = import_app('usage')
    dash_duo.start_server(app)
    folder = _wait_for_row(dash_duo, 'Profitability')
    li = _treeitem_for_row(folder)
    assert li.get_attribute('aria-expanded') == 'true'  # open_by_default

    folder.click()
    WebDriverWait(dash_duo.driver, 5).until(
        lambda d: li.get_attribute('aria-expanded') == 'false'
    )

    # Re-locate the row — `folder` might still be valid, but the row text
    # element could have been re-painted by the animation.
    folder = _wait_for_row(dash_duo, 'Profitability')
    folder.click()
    WebDriverWait(dash_duo.driver, 5).until(
        lambda d: li.get_attribute('aria-expanded') == 'true'
    )


def test_search_filters_to_matches(dash_duo):
    """Typing in the search box hides non-matching nodes; clearing it
    restores them."""
    app = import_app('usage')
    dash_duo.start_server(app)
    _wait_for_row(dash_duo, 'Forbearance')

    search = dash_duo.find_element('#tree .tree-search-input')
    search.send_keys('return on equity')

    WebDriverWait(dash_duo.driver, 5).until(
        lambda d: 'Return on equity' in _visible_row_texts(dash_duo)
        and 'Forbearance' not in _visible_row_texts(dash_duo)
    )

    # Clear the search via dash_duo helper (handles React controlled inputs).
    dash_duo.clear_input(search)
    WebDriverWait(dash_duo.driver, 5).until(
        lambda d: 'Forbearance' in _visible_row_texts(dash_duo)
    )


def test_keyboard_arrow_down_then_enter(dash_duo):
    """ArrowDown moves focus to the next visible row; Enter on that row
    reports its id via selected_id.

    Uses a leaf as the starting point so the initial click doesn't toggle
    a folder and reshuffle the visible list.
    """
    app = import_app('usage')
    dash_duo.start_server(app)
    _wait_for_row(dash_duo, 'Return on equity').click()
    _wait_for_input_value(dash_duo, '#clicked-node', 'roe')

    # Wait for focus to land on the row's <li> — clicking a leaf with
    # href triggers fragment navigation which transiently moves focus.
    _wait_focus_on_treeitem(dash_duo)

    dash_duo.driver.switch_to.active_element.send_keys(Keys.ARROW_DOWN)
    dash_duo.driver.switch_to.active_element.send_keys(Keys.ENTER)
    _wait_for_input_value(dash_duo, '#clicked-node', 'roa')


def test_keyboard_arrow_left_collapses_focused_folder(dash_duo):
    """With focus on an open folder, ArrowLeft closes it."""
    app = import_app('usage')
    dash_duo.start_server(app)
    folder = _wait_for_row(dash_duo, 'Profitability')
    li = _treeitem_for_row(folder)
    assert li.get_attribute('aria-expanded') == 'true'

    # Click toggles to closed; click again to reopen — leaves focus on the
    # row so the next ArrowLeft acts on the focused folder.
    folder.click()
    WebDriverWait(dash_duo.driver, 5).until(
        lambda d: li.get_attribute('aria-expanded') == 'false'
    )
    folder = _wait_for_row(dash_duo, 'Profitability')
    folder.click()
    WebDriverWait(dash_duo.driver, 5).until(
        lambda d: li.get_attribute('aria-expanded') == 'true'
    )
    _wait_focus_on_treeitem(dash_duo)

    dash_duo.driver.switch_to.active_element.send_keys(Keys.ARROW_LEFT)
    WebDriverWait(dash_duo.driver, 5).until(
        lambda d: li.get_attribute('aria-expanded') == 'false'
    )


def test_no_console_errors_on_load(dash_duo):
    """Page renders without producing SEVERE browser-console messages —
    catches React PropType failures, hydration warnings, runtime crashes."""
    app = import_app('usage')
    dash_duo.start_server(app)
    _wait_for_row(dash_duo, 'Asset quality')
    severe = [
        entry for entry in (dash_duo.get_logs() or [])
        if entry.get('level') == 'SEVERE'
    ]
    assert not severe, f'Unexpected browser console errors: {severe}'
