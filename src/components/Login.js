import * as authService from '../services/authService';
import { useHistory } from "react-router-dom";
import { useContext } from 'react';
import AuthContext from '../context/authContext';

const Login = () => {
  const history = useHistory();
  const { login } = useContext(AuthContext);

  const onLoginHandler = (e) => {
    e.preventDefault();
    let formData = new FormData(e.currentTarget);
    let username = formData.get('username');
    let password = formData.get('password');

    authService.login(username, password)
      .then((authData) => {
        // console.log(authData);
        login(authData);
        history.push('/data');
      })
  }


  return (
    <section className="Login">
      <h1>Login</h1>
      <article className="container">
        <form method="POST" onSubmit={onLoginHandler}>
          <label>Username</label>
          <input type="text" id="username" placeholder="Enter username" name="username" />
          <label>Password</label>
          <input type="password" id="password" placeholder="Password" name="password" />
          <p>Not registered yet? <a href="/auth/register">Register Now!</a></p>
          <button type="submit">Submit</button>
        </form>
      </article>
    </section>
  )
}

export default Login;