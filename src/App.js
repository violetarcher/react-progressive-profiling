import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { Container } from "reactstrap";

import Loading from "./components/Loading";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./views/Home";
import Profile from "./views/Profile";
import ExternalApi from "./views/ExternalApi";
import Dashboard from "./views/Dashboard";
import { useAuth0 } from "@auth0/auth0-react";
import history from "./utils/history";
import Content from "./components/Content";
import Protected from "./views/Protected"
import PrivateRoute from "./components/Private-route";
// import ArenguForm from "./components/ArenguForm";


// styles
import "./App.css";

// fontawesome
import initFontAwesome from "./utils/initFontAwesome";
import ProtectedApi from "./views/ProtectedApi";
initFontAwesome();

const App = () => {
  const { isLoading, error } = useAuth0();

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Router history={history}>
      <div id="app" className="d-flex flex-column h-100">
        <NavBar />
          {/* <Container className="flex-grow-1 mt-5"> */}
          <Container className="">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/profile" component={Profile} />
              <Route path="/external-api" component={ExternalApi} />
              <Route path="/scoped-api" component={ProtectedApi} />
              <PrivateRoute path="/protected" component={Protected} />
              <Route path="/Dashboard" component={Dashboard} />
            </Switch>
          </Container>
        <Content />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
