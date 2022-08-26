import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <header className="header">
        <h1 className="header__logo">LISTR</h1>
        <button className="button">+ Add Listing</button>
      </header>
      <div className="main-container">
        <Switch>
          {/* <Route path="/" exact component={ListingsPage} /> */}
        </Switch>
      </div>
      <footer className="footer">
        <h2>Coded by Juan J Vanegas Maya - 2022</h2>
      </footer>
    </BrowserRouter>
  );
}

export default App;
