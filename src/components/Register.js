
import * as authService from '../services/authService';
import { useHistory, Link } from "react-router-dom";
import { useContext, useState } from 'react';
import AuthContext from '../context/authContext';

const Register = () => {
  const history = useHistory();
  const { login } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const [rePassErr, setRePassErr] = useState(null);

  const registerSubmitHandler = (e) => {
    e.preventDefault();
    setError(null);
    setRePassErr(null);

    let formData = new FormData(e.currentTarget);
    let username = formData.get('username');
    let email = formData.get('email');
    let password = formData.get('password');
    let rePassword = formData.get('rePass');

    if (password !== rePassword) {
      const passwordErrMessage = 'Passwords don\'t match'
      setRePassErr(passwordErrMessage);
    } else {
      authService.register(username, email, password)
      .then((authData) => {

        console.log(authData);
        if (authData.message) {
          throw new Error(`${authData.message}`);
        }
        login(authData);
        history.push('/');
      })
      .catch(err => {
        setError(err.message);
      })
    }

  }

  return (
    <section className="Register">
      <h1>Register</h1>
      <article className="container">
        <form method="POST" onSubmit={registerSubmitHandler}>

          <label htmlFor="username">userame</label>
          <input type="text" id="username" placeholder="Enter name" name="username" />

          <label htmlFor="email">Email address</label>
          <input type="text" id="email" placeholder="Enter email" name="email" />
          {error && <p style={{ color: 'red', backgroundColor: 'lightgoldenrodyellow'}}>{error}</p>}

          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Password" name="password" />

          <label htmlFor="rePass">Re-Password</label>
          <input type="password" id="rePassword" placeholder="Re-Password" name="rePass" />
          {rePassErr && <p style={{ color: 'red', backgroundColor: 'lightgoldenrodyellow'}}>{rePassErr}</p>}

          <p>Already have account? <Link to="/auth/login">Login Now!</Link></p>
          <button type="submit">Submit</button>
        </form>
      </article>
    </section>
  )
}

export default Register;