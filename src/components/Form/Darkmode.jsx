import { useState } from 'react';

function Darkmode() {
  ///////////////////checked
  const [isChecked, setIsChecked] = useState(false);
  function handleIfChecked(event) {
    // event.target.checked ? ' dark' : '';
    event.target.checked ? console.log('is checked') : console.log('is NOT checked');
    setIsChecked((current) => !current);
  }
  ///////////////////
  return (
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
  );
}
export default Darkmode;
