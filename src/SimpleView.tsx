import React from 'react';
import './App.css';
import logo from './logo.svg';
import { createModel } from './Model'

const Model = createModel({ title: "Happy functional" })

const refresh = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => {
            Model.setModel({ title: json.title })
        })

}

function SimpleView() {
    const { model } = Model.useModel()

    return (
        <div className="App" >
            <header className="App-header" >
                <p>Learn React!</p>
                <img src={logo} className="App-logo" alt="logo" />

                <p>
                    {model.title}
                </p>
                <button onClick={refresh}>Click me</button>

            </header>
        </div>
    )
}

export default SimpleView;