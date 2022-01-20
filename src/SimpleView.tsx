import React from 'react';
import './App.css';
import logo from './logo.svg';

type SimpleViewProps = {
    title: string
    refresh: () => void
}

function SimpleView({ title, refresh }: SimpleViewProps) {
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