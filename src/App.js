import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./redux/store";
import Routes from "./utils/Routes";
import Header from "./components/Header";
import Search from "./redux/containers/Search.container";
import Favorites from "./redux/containers/Favorites.container";

const App = () => {
  return (
    <Provider store={store}>
      <Container>
        <Router>
          <Header />
          <Switch>
            <Route exact path={Routes.Home} component={Search} />
            <Route exact path={Routes.Search} component={Search} />
            <Route exact path={Routes.Favorites} component={Favorites} />
          </Switch>
        </Router>
      </Container>
    </Provider>
  );
};

const Container = styled.div`
  margin: 0 auto;
  padding: 0 15px;
`;

export default App;
