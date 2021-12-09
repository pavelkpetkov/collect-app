
import { Route, Switch } from 'react-router-dom';
import AuthContext from './context/authContext';
import { useState } from 'react';

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



function App() {

  const [user, setUser] = useState( {
    _id: '',
    username: '',
    email: '',
  })

  const login = (authData) => {
    setUser(authData);
  }


  return (
    <AuthContext.Provider value={{ user, login }}>
      <div className="App">

        <Header />

        <main className="App-main">

          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/collections" exact component={AllCollections} />
            <Route path="/profile" exact component={Profile} />
            <Route path="/create" exact component={Create} />
            <Route path="/auth/login" exact component={Login} />
            <Route path="/auth/logout" exact component={Logout} />
            <Route path="/auth/register" exact component={Register} />
            <Route path="/edit" exact component={Edit} />
            <Route path="/details/:collectionId" component={Details} />
          </Switch>

        </main>
        <footer className="App-footer"><p>Pavel Petkov 2021</p></footer>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
