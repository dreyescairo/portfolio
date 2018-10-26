import React, { Component } from "react";
import MtSvgLines from "react-mt-svg-lines";
import logoSVG from "../svgs/svgRepository";

export class LogoHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hideClass: "",
      animate: true,
      showClass: "invisible"
    };
  }

  hideLogo() {
    this.setState({
      hideClass: "hidden",
      animate: false,
      showClass: "visible"
    });
  }

  render() {
    return (
      <>
        <div className="logoHeader">
          <MtSvgLines
            animate={this.state.animate}
            duration={2000}
            stagger={100}
            timing={"ease-in"}
            playback={"forwards"}
            jsOnly={false}
            fade={true}
            callback={() => this.hideLogo()}
          >
            <span className={`${this.state.hideClass}`}>
              {this.props.svgLogo}
            </span>
          </MtSvgLines>

          <img
            className={`logoImage ${this.state.showClass}`}
            src={this.props.imgPath}
          />
        </div>
      </>
    );
  }
}

export default LogoHeader;
