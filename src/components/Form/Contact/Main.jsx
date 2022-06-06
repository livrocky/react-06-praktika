/* eslint-disable no-restricted-globals */
import { useState } from 'react';
import Login from '../Login';
import More from '../More';
import ContactList from './Contact';

function Main() {
  //////////////////////
  const [isChecked, setIsChecked] = useState(false);
  function handleIfChecked(event) {
    // event.target.checked ? ' dark' : '';
    event.target.checked ? console.log('is checked') : console.log('is NOT checked');
    setIsChecked((current) => !current);
  }
  ////////////////////
  return (
    <div className="main-container ">
      <Login />
      <div
        className={
          event.target.checked ? 'address-info-container dark' : 'address-info-container'
        }
      >
        <div className="dark-mode">
          <label htmlFor="dark">Dark mode????</label>
          <input
            value={isChecked}
            onChange={handleIfChecked}
            type="checkbox"
            id="dark"
            className="dark"
          />
        </div>
        <ContactList />
        <More />
      </div>
    </div>
  );
}
export default Main;
