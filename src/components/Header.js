import { Link } from 'react-router-dom';

const Header = ({
  username,
}) => {

  let guestNavigation = (
    <nav>
      <h2><Link to="/">Collect</Link></h2>
      <ul>
        <li><Link to="/data">All collections</Link></li>
        <li><Link to="/auth/login">Login</Link></li>
        <li><Link to="/auth/register">Register</Link></li>
      </ul>
    </nav>
  );

  let userNavigation = (
    <nav>
      <h2><Link to="/">Collect</Link></h2>
      <ul>
        <span>Welcome {username}!</span>
        <li><Link to="/data">All collections</Link></li>
        <li><Link to="/profile">My profile</Link></li>
        <li><Link to="/data/create">Create collection</Link></li>
        <li><Link to="/auth/logout">Logout</Link></li>
      </ul>
    </nav>
  );

  return (
    <header className="App-header">
      {username
        ? userNavigation
        : guestNavigation
      }
    </header>
  )
}

export default Header;