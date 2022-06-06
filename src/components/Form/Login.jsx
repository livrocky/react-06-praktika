import { useState } from 'react';
import Button from './Button';

function Login() {
  const [firstNameValue, setFirstNameValue] = useState('');
  const [lastNameValue, setLastNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [subjectValue, setSubjectValue] = useState('');
  const [messageValue, setMessageValue] = useState('');

  const [formValid, setFormValid] = useState(false);

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
    }
  }

  // //////////////////////////////////////////
  return (
    <div className="login-container">
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
      </form>
    </div>
  );
}
export default Login;
