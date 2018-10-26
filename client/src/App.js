import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import LogoHeader from "./components/layout/LogoHeader";
import logo from "../src/images/SignatureVectorV2.png";
import { SvgRepository } from "./components/svgs/svgRepository";
class App extends Component {
  constructor(props) {
    let svgRepo = new SvgRepository();
    let svgLogo = svgRepo.getLogoSvg();

    super(props);
    this.state = {
      svgLogo: svgLogo
    };
  }

  render() {
    return (
      <div className="App">
        <Navbar />

        <div className="container">
          <div className="col s6">
            <LogoHeader imgPath={logo} svgLogo={this.state.svgLogo} />
          </div>

          <div className="row">
            <div className="col s12 m7">
              <div className="card small">
                <div className="card-image waves-effect waves-block waves-light">
                  <img
                    className="activator"
                    src="https://designcode.io/images/react-landing-page/react-code-3.png"
                  />
                </div>
                <div className="card-content">
                  <span className="card-title activator grey-text text-darken-4">
                    Card Title
                    <i className="material-icons right">more_vert</i>
                  </span>
                  <p>
                    <a href="#">This is a link</a>
                  </p>
                </div>
                <div className="card-reveal">
                  <span className="card-title grey-text text-darken-4">
                    Card Title
                    <i className="material-icons right">close</i>
                  </span>
                  <p>
                    Here is some more information about this product that is
                    only revealed once clicked on.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
