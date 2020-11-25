import React from "react";
import * as ReactDOM from "react-dom";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Observer, Provider} from "mobx-react";
import {AppStore} from "./stores/AppStore";
import * as ComponentFactory from "./web/ComponentFactory";
import {BaseComponent} from "./web/components/BaseComponent";

export interface AppProps {}

export interface AppState {}

export class App<P extends AppProps = AppProps, S extends AppState = AppState> extends BaseComponent {
  state: AppState = {};
  protected appStore: AppStore;

  constructor(props: AppProps) {
    super(props);

    this.appStore = new AppStore();
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
      <Provider>
        <Observer>
          {() => (
            <div className="main-container">
              <Router>
                <ComponentFactory.Header />
                <div className={"main-wrapper"}>
                  <Switch>
                    <Route exact path={"/"} component={ComponentFactory.Home} />
                    <Route exact path={"/video-library"} component={ComponentFactory.VideoLibrary} />
                    <Route exact path={"/platform"} component={ComponentFactory.Platform} />
                    <Route exact path={"/terms-conditions"} component={ComponentFactory.TermsConditions} />
                  </Switch>
                </div>
              </Router>
            </div>
          )}
        </Observer>
      </Provider>
    );
  }
}
