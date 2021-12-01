const Register = () => {

    return (
        <section className="Register">
          <h1>Register</h1>
          <article className="container">
          <form action="" method="POST">
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