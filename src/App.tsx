import React, {useReducer, useState} from 'react';
import './App.css';
import s from './App.module.css';
import DisplayGallows from "./displayGallows";

export type FilterText = 'All' | 'Completed' | 'Active'

function App() {

    return (
        <div className="App">
            <div className={s.wrapperCounter}>
                <div>
                    {<DisplayGallows />}
                </div>
            </div>
        </div>
    );
}

export default App;
