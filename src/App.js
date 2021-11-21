import React from 'react'
import {Provider} from 'react-redux'
import store from './Store/index'
import "./App.css"
import MainLayout from './Layout/MainLayout'
// import {StateManager} from './Store/TodoContext'
function App() {

  return (

    <Provider store={store}>

      <div className="App">
        <MainLayout />
      </div>
    </Provider>

    
  );
}

export default App;
