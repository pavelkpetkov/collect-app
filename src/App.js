
import { Route, Switch } from 'react-router-dom';

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
  return (
    <div className="App">

      <Header />

      <main className="App-main">

        <Switch>
          <Route path="/" exact component={ Home }/>
          <Route path="/collections" exact component={ AllCollections }/>
          <Route path="/profile" exact component={ Profile }/>
          <Route path="/create" exact component={ Create }/>
          <Route path="/login" exact component={ Login }/>
          <Route path="/logout" exact component={ Logout }/>
          <Route path="/register" exact component={ Register }/>
          <Route path="/edit" exact component={ Edit }/>
          <Route path="/details/:collectionId" component={ Details }/>
        </Switch>

      </main>
      <footer className="App-footer"><p>Pavel Petkov 2021</p></footer>
    </div>
  );
}

export default App;
