const Logout = () => {

    console.log('logout')

    return (
        <section className="Login">
          <h1>Login</h1>
          <article className="container">
          <form action="" method="POST">
            <label>Email address</label>
            <input type="text" id="email" placeholder="Enter email" name="email" />
            <label>Password</label>
            <input type="password" id="password" placeholder="Password" name="password" />
            <p>Not registered yet? <a href="/auth/register">Register Now!</a></p>
            <button type="submit">Submit</button>
          </form>
          </article>
        </section>
    )
}

export default Logout;