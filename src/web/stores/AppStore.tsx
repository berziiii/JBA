import * as _ from 'lodash';
import { action, observable, makeObservable } from 'mobx';
import { AppMode } from '../utils/Constants';

interface AppStoreState {
  mode?: AppMode;
  drawerPanelVisible: boolean;
}

export class AppStore {
  private static instance: any = null;

  mobileBreakpoint = 769; // sm breakpoint

  // STATE
  @observable
  state: AppStoreState = {
    mode: this.evaluateMode(),
    drawerPanelVisible: false,
  };

  constructor() {
    // eslint-disable-next-line no-constructor-return
    if (!_.isNil(AppStore.instance)) return AppStore.instance;

    AppStore.instance = this;

    this.handlerWindowResize = this.handlerWindowResize.bind(this);

    window.addEventListener('resize', this.handlerWindowResize);

    makeObservable(this);

    // AppStore is a singleton class
    // eslint-disable-next-line no-constructor-return
    return AppStore.instance;
  }

  private evaluateMode(): AppMode {
    const { mobileBreakpoint } = this;

    return !_.isNil(mobileBreakpoint)
      ? window.innerWidth < mobileBreakpoint
        ? AppMode.Mobile
        : AppMode.Desktop
      : AppMode.Desktop;
  }

  private handlerWindowResize() {
    const mode = this.evaluateMode();

    this.setMode(mode);
  }

  @action
  setMode = (mode: AppMode) => {
    console.assert(!_.isNil(mode));

    this.state.mode = mode;
  };

  @action
  setDrawerPanelVisible = (value: boolean) => {
    this.state.drawerPanelVisible = value;
  };
}
