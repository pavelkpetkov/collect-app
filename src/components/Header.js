
const Header = () => {

    return (
        <header className="App-header">
        <nav>
          <h2>Collect</h2>
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/collections">All collections</a></li>
            <li><a href="/profile">My profile</a></li>
            <li><a href="/create">Create collection</a></li>
            <li><a href="/logout">Logout</a></li>
            <li><a href="/login">Login</a></li>
            <li><a href="/register">Register</a></li>
          </ul>
        </nav>
      </header>
    )
}

export default Header;