import React, { Component } from 'react'

export default class AdminLogin extends Component {
  render() {
    return (


      <form action='/login' method='post'>


        <div className="row">
          <div className="col s6 offset-s3">
            <div className="card-panel">
              <p>Login to manage content</p>

              <div className="row">
                <div className="input-field col s12">
                  <i class="fal fa-user-ninja prefix"></i>
                  <input id="email" type="email" className="validate" />
                  <label for="email">Email</label>
                </div>
              </div>

              <div className="row">
                <div className="input-field col s12">
                  <i class="fal fa-unlock-alt prefix"></i>
                  <input id="password" type="password" className="validate" />
                  <label for="password">Password</label>
                </div>
              </div>
              <div className="row">
                <div className="col s4 offset-s8">
                  <a class="waves-effect waves-light btn light-blue darken-1">Login</a>
                </div>

              </div>

            </div>
          </div>
        </div>
      </form>


    );
  }
}
