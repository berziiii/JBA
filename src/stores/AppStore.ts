import * as _ from "lodash";
import {observable, action} from "mobx";

enum AppMode {
  Desktop = "desktop",
  Mobile = "mobile",
}

interface AppStoreState {
  mode?: AppMode;
}

export class AppStore {
  private static instance: any = null;

  mobileBreakpoint = 769; // sm breakpoint

  // STATE
  @observable
  state: AppStoreState = {
    mode: this.evaluateMode(),
  };

  constructor() {
    if (!_.isNil(AppStore.instance)) return AppStore.instance;

    AppStore.instance = this;

    this.handlerWindowResize();
  }

  private handlerWindowResize() {
    const mode = this.evaluateMode();

    this.setMode(mode);
  }

  @action
  setMode(mode: AppMode) {
    console.assert(!_.isNil(mode));

    this.state.mode = mode;
  }

  private evaluateMode(): AppMode {
    const {mobileBreakpoint} = this;

    return !_.isNil(mobileBreakpoint) ? (window.innerWidth < mobileBreakpoint ? AppMode.Mobile : AppMode.Desktop) : AppMode.Desktop;
  }
}
