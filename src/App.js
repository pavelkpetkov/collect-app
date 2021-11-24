
import Header from "./components/Header";
import Home from "./components/Home";
import AllCollections from "./components/AllCollections";

function App() {
  return (
    <div className="App">

      <Header />

      <main className="App-main">

      <Home />

      <AllCollections />

        <section className="Profile"></section>
        <section className="Create"></section>
        <section className="Login"></section>
        <section className="Register"></section>
      </main>
      <footer className="App-footer"><p>Pavel Petkov 2021</p></footer>
    </div>
  );
}

export default App;
