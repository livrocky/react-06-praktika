/* eslint-disable no-restricted-globals */
import { useState } from 'react';
import Button from './Button';
import Darkmode from './Darkmode';

function Login() {
  //////////////////////

  const [isChecked, setIsChecked] = useState(false);
  function handleIfChecked(event) {
    // event.target.checked ? ' dark' : '';
    event.target.checked ? console.log('is checked') : console.log('is NOT checked');
    setIsChecked((current) => !current);
  }
  ////////////////////
  const [firstNameValue, setFirstNameValue] = useState('');
  const [lastNameValue, setLastNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [subjectValue, setSubjectValue] = useState('');
  const [messageValue, setMessageValue] = useState('');

  const [successPostMsg, setSuccessPostMsg] = useState(false);

  const [postsArr, setPostsArr] = useState([]);
  //

  function firstnameEnterHandler(event) {
    setFirstNameValue(event.target.value);
  }
  function surnameEnterHandler(event) {
    setLastNameValue(event.target.value);
  }
  function emailEnterHandler(event) {
    setEmailValue(event.target.value);
  }
  function messageEnterHandler(event) {
    setMessageValue(event.target.value);
  }
  function subjectEnterHandler(event) {
    setSubjectValue(event.target.value);
  }
  //

  function sendValues(event) {
    event.preventDefault();
    const newPostOb = {
      email: emailValue,
      first_name: firstNameValue,
      last_name: lastNameValue,
      avatar: messageValue,
      subject: subjectValue,
    };
    getPosts(newPostOb);
    async function getPosts() {
      const response = await fetch('https://reqres.in/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newPostOb),
      });
      const dataInJS = await response.json();
      console.log('dataInJS', dataInJS);
      setPostsArr(dataInJS);

      if (dataInJS.createdAt) setSuccessPostMsg(!successPostMsg);
    }
  }

  // //////////////////////////////////////////
  return (
    <div className={event.target.checked ? 'login-container dark' : 'login-container'}>
      {successPostMsg === true ? (
        <h2 className="success-msg">Thank you, your request was sent</h2>
      ) : (
        <>
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
          <form onSubmit={sendValues}>
            <div className="name-container">
              <label htmlFor="name">
                First Name <br />
                <input
                  onChange={firstnameEnterHandler}
                  value={firstNameValue}
                  id="name"
                  type="text"
                />
              </label>
              <br />
              <label htmlFor="surname">
                Last Name <br />
                <input
                  onChange={surnameEnterHandler}
                  value={lastNameValue}
                  id="surname"
                  type="text"
                />
              </label>
            </div>
            <label htmlFor="email">Email</label>
            <br />
            <input onChange={emailEnterHandler} value={emailValue} type="email" />
            <br />

            <label htmlFor="subject">Subject</label>
            <br />
            <input onChange={subjectEnterHandler} value={subjectValue} type="subject" />
            <br />
            <label htmlFor="message">Message</label>
            <br />
            <textarea
              onChange={messageEnterHandler}
              value={messageValue}
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Type here"
            ></textarea>
            <br />
            <Button />
            {/* <Darkmode /> */}
            {/* <div className="dark-mode">
      <label htmlFor="dark">Dark mode?</label>
      <input
        value={isChecked}
        onChange={handleIfChecked}
        type="checkbox"
        id="dark"
        className="go-dark"
      />
    </div> */}
          </form>
        </>
      )}
    </div>
  );
}
export default Login;
