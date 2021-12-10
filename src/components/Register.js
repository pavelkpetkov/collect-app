
import * as authService from '../services/authService';
import { useHistory, Link } from "react-router-dom";
import { useContext } from 'react';
import AuthContext from '../context/authContext';

const Register = () => {
  const history = useHistory();
  const { login } = useContext(AuthContext);

  const registerSubmitHandler = (e) => {
    e.preventDefault();

    let formData = new FormData(e.currentTarget);
    let username = formData.get('username');
    let email = formData.get('email');
    let password = formData.get('password');

    console.log('post register!')

    authService.register(username, email, password)
      .then((authData) => {
        // console.log('Hello there!');
        // console.log(authData);
        login(authData);
        history.push('/');
      })

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

          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Password" name="password" />

          <label htmlFor="rePass">Re-Password</label>
          <input type="password" id="rePassword" placeholder="Re-Password" name="rePass" />

          <p>Already have account? <Link to="/auth/login">Login Now!</Link></p>
          <button type="submit">Submit</button>
        </form>
      </article>
    </section>
  )
}

export default Register;