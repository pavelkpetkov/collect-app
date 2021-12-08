
import * as authService from '../services/authService';
import { useHistory } from "react-router-dom";
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
    let gender = formData.get('gender');
    let password = formData.get('password');
    authService.register(username, email, gender, password)
      .then((authData) => {
        login(authData);
        history.push('/collections');
      })

  }

  return (
    <section className="Register">
      <h1>Register</h1>
      <article className="container">
        <form action="" method="POST" onSubmit={registerSubmitHandler}>
          <label>userame</label>
          <input type="text" id="username" placeholder="Enter name" name="username" />
          <label>Email address</label>
          <input type="text" id="email" placeholder="Enter email" name="email" />
          <label>Password</label>
          <input type="password" id="password" placeholder="Password" name="password" />
          <label>Re-Password</label>
          <input type="password" id="rePassword" placeholder="Re-Password" name="rePass" />
          <label>Gender</label>
          <input type="radio" id="female" name="gender" />
          <label>Female</label>
          <input type="radio" id="male" name="gender" defaultChecked />
          <label>Male</label>
          <p>Already have account? <a href="/auth/login">Login Now!</a></p>
          <button type="submit">Submit</button>
        </form>
      </article>
    </section>
  )
}

export default Register;