import React, { useContext } from 'react';
import './App.css';
import logo from './logo.svg';
import { useModelContext } from './Model'
import { ModelContext, RefreshContext } from './App'

function SimpleView() {
    const { title } = useModelContext(ModelContext)
    const refresh = useContext(RefreshContext)

    return (
        <div className="App" >
            <header className="App-header" >
                <p>Learn React!</p>
                <img src={logo} className="App-logo" alt="logo" />

                <p>
                    {title}
                </p>
                <button onClick={refresh}>Click me</button>

            </header>
        </div>
    )
}

export default SimpleView;