import React, {useState} from "react";
import axios from 'axios'

const Login = props => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [user, setUSer] = useState({username: '', password: ''})

  const handleSubmit = event => {
    event.preventDefault()
    axios.post(`http://localhost:5000/api/login`, user)
    .then(response => {
      localStorage.setItem('token', response.data.payload)
      //console.log(response)
      props.history.push('/bubbles')
    })
    .catch(error => console.log('error from login', error.resopnse))
  }

  const handleChange = event => {
    setUSer({
      ...user,
      [event.target.name]:event.target.value
    })

  }

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <p>login page</p>
      <form onSubmit={event => handleSubmit(event)}>
        <label>Username</label>
        <input
        name='username'
        type='text'
        value={user.username}
        onChange={event=> handleChange(event)}
        />
        <label>password</label>
        <input
        name='password'
        type='password'
        value={user.password}
        onChange={event => handleChange(event)}
        />
        <button>Login</button>
      </form>

    </>
  );
};

export default Login;
