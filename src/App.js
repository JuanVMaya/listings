import { BrowserRouter, Switch, Route } from "react-router-dom";
import PageHeader from "./components/PageHeader";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <PageHeader/>
      <div className="main-container">
        <Switch>
          {/* <Route path="/" exact component={ListingsPage} /> */}
        </Switch>
      </div>
      <footer className="footer">
        <h3>Coded by Juan J Vanegas Maya - 2022</h3>
      </footer>
    </BrowserRouter>
  );
}

export default App;
