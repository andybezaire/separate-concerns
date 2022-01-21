import React from 'react';
import './App.css';
import logo from './logo.svg';
import { useModel, setModel, createModel } from './Model'

const refresh = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => {
            setModel(json.title)
        })

}

const model = createModel("Happy functional")

function SimpleView() {
    const { title } = useModel()

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