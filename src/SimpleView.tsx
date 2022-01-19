import React from 'react';
import './App.css';
import logo from './logo.svg';

type SimpleViewProps = {
    title: string
}

function SimpleView({ title }: SimpleViewProps) {
    return (
        <div className="App" >
            <header className="App-header" >
                <img src={logo} className="App-logo" alt="logo" />

                <p>
                    {title}
                </p>

            </header>
        </div>
    )
}

export default SimpleView;