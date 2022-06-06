import { useState } from 'react';
import './App.css';
// import ContactList from './components/Form/Contact/Contact';
import Main from './components/Form/Contact/Main';
import Header from './components/Form/Header';
// import Login from './components/Form/Login';
// import More from './components/Form/More';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
