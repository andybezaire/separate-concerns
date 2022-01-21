import React from 'react';
import './App.css';
import SimpleView from './SimpleView';
import { createModelContext } from './Model'

const initialModel = { title: "Happy root" }
export const { ModelContext, model } = createModelContext(initialModel)

const refresh = () => {
  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => {
      model.setModel({ title: json.title })
    })

}
export const RefreshContext = React.createContext(refresh);

function App() {

  return (
    <>
      <ModelContext.Provider value={model}>
        <RefreshContext.Provider value={refresh}>
          <SimpleView />
          <SimpleView />
          <SimpleView />
        </RefreshContext.Provider>
      </ModelContext.Provider>
    </>
  );
}

export default App;