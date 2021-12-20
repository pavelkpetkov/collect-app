
import { Route, Switch } from 'react-router-dom';
import AuthContext from './context/authContext';
import useLocalStorage from './hooks/useLocalStorage';

import Header from "./components/Header";
import Home from "./components/Home";
import AllCollections from "./components/AllCollections";
import Profile from "./components/Profile";
import Create from "./components/Create";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Register from "./components/Register";
import Edit from "./components/Edit";
import Details from "./components/Details";

const initialAuthState = {
  accessToken: '',
  email: '',
  username: '',
  _id: ''
}

function App() {

  const [user, setUser] = useLocalStorage('user', initialAuthState);

  const login = (authData) => {
    setUser(authData);
  }

  const logout = () => {
    setUser(initialAuthState);
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      <div className="App">

        <Header username={user.username} />

        <main className="App-main">

          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/data" exact component={AllCollections} />
            <Route path="/profile" exact component={Profile} />
            <Route path="/auth/login" exact component={Login} />
            <Route path="/auth/logout" exact component={Logout} />
            <Route path="/auth/register" exact component={Register} />
            <Route path="/data/create" exact component={Create} />
            <Route path="/data/edit/:id" exact component={Edit} />
            <Route path="/data/details/:id" component={Details} />
          </Switch>

        </main>
        <footer className="App-footer"><p>Pavel Petkov 2021</p></footer>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
