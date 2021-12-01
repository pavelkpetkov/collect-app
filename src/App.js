
import { Route, Switch } from 'react-router-dom';

import Header from "./components/Header";
import Home from "./components/Home";
import AllCollections from "./components/AllCollections";
import Profile from "./components/Profile";
import Create from "./components/Create";
import Login from "./components/Login";
import Register from "./components/Register";
import Edit from "./components/Edit";


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
          <Route path="/logout" exact component={ Create }/>
          <Route path="/register" exact component={ Register }/>
          <Route path="/edit" exact component={ Edit }/>
        </Switch>

      </main>
      <footer className="App-footer"><p>Pavel Petkov 2021</p></footer>
    </div>
  );
}

export default App;
