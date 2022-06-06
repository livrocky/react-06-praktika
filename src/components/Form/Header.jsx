/* eslint-disable no-restricted-globals */
import { useState } from 'react';
// import Darkmode from './Darkmode';

function Header() {
  const [isChecked, setIsChecked] = useState(false);
  function handleIfChecked(event) {
    // event.target.checked ? ' dark' : '';
    event.target.checked ? console.log('is checked') : console.log('is NOT checked');
    setIsChecked((current) => !current);
  }
  return (
    // <div className="header-container">
    <div className={event.target.checked ? 'header-container dark' : 'header-container'}>
      <h1 className="header-title">CONTACT US</h1>
      <p className="header-text">See Our Daily News & Updates</p>

      <div className="dark-mode">
        <label htmlFor="dark">Dark mode?</label>
        <input
          value={isChecked}
          onChange={handleIfChecked}
          type="checkbox"
          id="dark"
          className="go-dark"
        />
      </div>
      <br />
      <br />
    </div>
  );
}

export default Header;
