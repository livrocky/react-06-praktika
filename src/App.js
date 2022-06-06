import './App.css';
import ContactList from './components/Form/Contact/Contact';
import Header from './components/Form/Header';
import Login from './components/Form/Login';
import More from './components/Form/More';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-container">
        <Login />
        <div className="address-info-container">
          <ContactList />
          <More />
        </div>
      </div>
    </div>
  );
}

export default App;
