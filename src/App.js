
import Header from "./components/Header";
import Home from "./components/Home";
import AllCollections from "./components/AllCollections";
import Profile from "./components/Profile";
import Create from "./components/Create";


function App() {
  return (
    <div className="App">

      <Header />

      <main className="App-main">

        <Home />

        <AllCollections />

        <Profile />

        <Create />

        <section className="Login"></section>
        <section className="Register"></section>
      </main>
      <footer className="App-footer"><p>Pavel Petkov 2021</p></footer>
    </div>
  );
}

export default App;
