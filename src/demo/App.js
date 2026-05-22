import React, { useState } from 'react';
import { Tree } from '../lib';
import data from './data';

const LABEL = { fontFamily: 'monospace', fontSize: 12, color: '#555', marginBottom: 2 };
const VALUE = { fontFamily: 'monospace', fontSize: 13, color: '#222', marginBottom: 12 };

const App = () => {
    const [props, setPropsState] = useState({
        selected_id: null,
        expanded_ids: null,
    });

    const setProps = (newProps) => setPropsState(prev => ({ ...prev, ...newProps }));

    return (
        <div style={{ display: 'flex', height: '100vh', fontFamily: 'sans-serif' }}>
            {/* Tree panel */}
            <div style={{
                width: 280,
                display: 'flex',
                flexDirection: 'column',
                borderRight: '1px solid #ddd',
                padding: 12,
                boxSizing: 'border-box',
            }}>
                <h3 style={{ margin: '0 0 10px' }}>Tree</h3>
                <div style={{ flex: 1, minHeight: 0 }}>
                    <Tree
                        data={data}
                        selected_id={props.selected_id}
                        expanded_ids={props.expanded_ids}
                        setProps={setProps}
                        searchable={true}
                        height="100%"
                        aria_label="Demo tree"
                    />
                </div>
            </div>

            {/* State inspector */}
            <div style={{ flex: 1, padding: 24, overflowY: 'auto' }}>
                <h3 style={{ margin: '0 0 16px' }}>Component state</h3>

                <div style={LABEL}>selected_id</div>
                <div style={VALUE}>{props.selected_id ?? 'null'}</div>

                <div style={LABEL}>expanded_ids</div>
                <div style={VALUE}>
                    {props.expanded_ids == null
                        ? 'null'
                        : `[${props.expanded_ids.map(id => `"${id}"`).join(', ')}]`}
                </div>

                <h3 style={{ margin: '24px 0 16px' }}>Controls</h3>

                <div style={{ marginBottom: 8 }}>
                    <button onClick={() => setProps({ selected_id: 'c1-1-1' })}>
                        Select "ratio" (c1-1-1)
                    </button>
                </div>
                <div style={{ marginBottom: 8 }}>
                    <button onClick={() => setProps({ selected_id: null, expanded_ids: [] })}>
                        Clear selection &amp; collapse all
                    </button>
                </div>
            </div>
        </div>
    );
};

export default App;
