/* eslint no-magic-numbers: 0 */
import React, { useState } from 'react';
import { Tree } from '../lib';
import data from './data'

const App = () => {

    const [state, setState] = useState({value:'', label:'Type Here'});
    const setProps = (newProps) => {
            setState(newProps);
        };

    return (
        <div>
            <Tree
                data={data}
                setProps={setProps}
                {...state}
            />
        </div>
    )
};


export default App;
