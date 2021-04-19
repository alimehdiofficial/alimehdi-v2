import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Guestbook from "./screens/Guestbook";
import HomeScreen from "./screens/HomeScreen";
import ProjectScreen from "./screens/ProjectScreen";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <Header />
      <ScrollToTop>
        <Switch>
          <Route path="/guestbook">
            <Guestbook />
            <Footer />
          </Route>

          <Route path="/projects/:id">
            <ProjectScreen />
          </Route>

          <Route path="/">
            <HomeScreen />
            <Footer />
          </Route>
        </Switch>
      </ScrollToTop>
    </Router>
  );
}

export default App;
