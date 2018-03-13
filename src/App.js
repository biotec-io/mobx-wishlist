import React, { Component } from 'react';
import 'material-components-web/dist/material-components-web.css';

class App extends Component {
  render() {
    return (
      <div>
        <header class="mdc-toolbar">
          <div class="mdc-toolbar__row">
            <section class="mdc-toolbar__section mdc-toolbar__section--align-start">
              <span class="mdc-toolbar__title">Welcome to WishList</span>
            </section>
          </div>
        </header>

        <div className="mdc-layout-grid">
          <div className="mdc-layout-grid__inner">
            <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
              <h2 className="mdc-tipography--title">
                React and Mobx wishlist application with material-design styling
              </h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
