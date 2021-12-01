
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

        <Home />

        <AllCollections />

        <Profile />

        <Create />

        <Login />

        <Register />

        <Edit />

      </main>
      <footer className="App-footer"><p>Pavel Petkov 2021</p></footer>
    </div>
  );
}

export default App;
