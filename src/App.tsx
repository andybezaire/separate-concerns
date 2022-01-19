import React from 'react';
import './App.css';
import SimpleView from './SimpleView';

function App() {
  const [title, setTitle] = React.useState('Hello World')

  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => {
        setTitle(json.title)
      })
  })

  return (
    <SimpleView title={title} />
  );
}

export default App;