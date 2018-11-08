import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper light-blue darken-1">
          <a href="#" className="brand-logo center">
            David RC
          </a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li>
              <a href="sass.html">Sass</a>
            </li>
            <li>
              <a href="badges.html">Components</a>
            </li>
            <li>
              <a href="collapsible.html">JavaScript</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
