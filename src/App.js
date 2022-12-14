import { BrowserRouter, Switch, Route } from "react-router-dom";
import PageHeader from "./components/PageHeader";
import ListingsPage from "./pages/ListingsPage";
import ListingEdit from "./pages/ListingEdit";
import ListingAdd from "./pages/ListingAdd";
import Listing from "./pages/Listing";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <PageHeader />
      <div className="main-container">
        <Switch>
          <Route path="/" exact component={ListingsPage} />
          <Route path="/listings" exact component={ListingsPage} />
          <Route path="/listings/add" exact component={ListingAdd} />
          <Route path="/listings/:id" exact component={Listing} />
          <Route path="/listings/:id/edit" component={ListingEdit} />
        </Switch>
      </div>
      <footer className="footer">
        <h3>Coded by Juan J Vanegas Maya - 2022</h3>
      </footer>
    </BrowserRouter>
  );
}

export default App;
