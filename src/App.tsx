import React from "react";
import * as ReactDOM from "react-dom";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import * as ComponentFactory from "./web/ComponentFactory";

export interface AppProps {}

export interface AppState {}

export class App extends React.Component<any, any> {
  state: AppState = {};

  constructor(props: AppProps) {
    super(props);
  }

  static start = () => {
    ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      document.getElementById("root")
    );
  };

  render() {
    return (
      <div className="main-container">
        <Router>
          <ComponentFactory.Header />
          <div className={"main-wrapper"}>
            <Switch>
              <Route exact path={"/"} component={ComponentFactory.Home} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
