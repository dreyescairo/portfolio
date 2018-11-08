import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";

import AdminLogin from "./components/author/adminLogin";
import Landing from "./components/layout/Landing";
class App extends Component {
  // constructor(props) {
  //   let svgRepo = new SvgRepository();
  //   let svgLogo = svgRepo.getLogoSvg();

  //   super(props);
  //   this.state = {
  //     svgLogo: svgLogo
  //   };
  // }

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />

          <div className="container">
            <Route exact path="/" component={Landing} />
            <Route exact path="/cms" component={AdminLogin} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
