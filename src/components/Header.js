
const Header = () => {

    return (
        <header className="App-header">
        <nav>
          <h2><a href="/">Collect</a></h2>
          <ul>
            <li><a href="/data">All collections</a></li>
            <li><a href="/profile">My profile</a></li>
            <li><a href="/data/create">Create collection</a></li>
            <li><a href="/auth/logout">Logout</a></li>
            <li><a href="/auth/login">Login</a></li>
            <li><a href="/auth/register">Register</a></li>
          </ul>
        </nav>
      </header>
    )
}

export default Header;