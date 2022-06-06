import { useEffect, useState } from 'react';
import Button from './Button';

function Login() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const [formValid, setFormValid] = useState(false);

  const [postsArr, setPostsArr] = useState([]);
  //

  function firstnameEnterHandler(event) {
    setFirstName(event.target.value);
  }
  function surnameEnterHandler(event) {
    setLastName(event.target.value);
  }
  function emailEnterHandler(event) {
    setEmail(event.target.value);
  }
  function messageEnterHandler(event) {
    setMessage(event.target.value);
  }
  function subjectEnterHandler(event) {
    setSubject(event.target.value);
  }
  //

  function sendValues(event) {
    event.preventDefault();
    const newPostOb = {
      email: email,
      first_name: firstName,
      last_name: lastName,
      avatar: message,
      subject: subject,
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
              value={firstName}
              id="name"
              type="text"
            />
          </label>
          <br />
          <label htmlFor="surname">
            Last Name <br />
            <input
              onChange={surnameEnterHandler}
              value={lastName}
              id="surname"
              type="text"
            />
          </label>
        </div>
        <label htmlFor="email">Email</label>
        <br />
        <input onChange={emailEnterHandler} value={email} type="email" />
        <br />

        <label htmlFor="subject">Subject</label>
        <br />
        <input onChange={subjectEnterHandler} value={subject} type="subject" />
        <br />
        <label htmlFor="message">Message</label>
        <br />
        <textarea
          onChange={messageEnterHandler}
          value={message}
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
