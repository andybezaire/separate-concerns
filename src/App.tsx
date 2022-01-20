import React from 'react';
import './App.css';
import SimpleView from './SimpleView';

function App() {
  const [title, setTitle] = React.useState('Hello World')

  const refresh = () => {
    console.log("hii")
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => {
        setTitle(json.title)
      })
  }

  return (
    <SimpleView title={title} refresh={refresh} />
  );
}

export default App;