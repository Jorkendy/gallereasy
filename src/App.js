import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Routes from "./utils/Routes";
import Header from "./components/Header";
import Search from "./pages/Search";
import Favorites from "./pages/Favorites";

const App = () => {
  return (
    <Container>
      <Header />
      <Router>
        <Container>
          <Switch>
            <Route exact path={Routes.Home} component={Search} />
            <Route exact path={Routes.Search} component={Search} />
            <Route exact path={Routes.Favorites} component={Favorites} />
          </Switch>
        </Container>
      </Router>
    </Container>
  );
};

const Container = styled.div`
  margin: 0 auto;
  padding: 0 15px;
`;

export default App;
