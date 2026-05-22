"""Ensure chromedriver is available on PATH before any test fixture runs.

`dash_duo` instantiates `selenium.webdriver.Chrome()` which, depending on the
selenium version, may or may not auto-fetch a matching chromedriver. Calling
`chromedriver_autoinstaller.install()` here detects the installed Chrome
version, downloads the matching chromedriver to a local cache, and prepends
that cache directory to PATH for the running pytest process.

If the user already has chromedriver on PATH, this is a no-op.
"""
import chromedriver_autoinstaller

chromedriver_autoinstaller.install()
