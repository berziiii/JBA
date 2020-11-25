import * as _ from "lodash";
import React from "react";
import {AppStore} from "../../stores/AppStore";

interface BaseComponentProps {}
interface BaseComponentState {}

export class BaseComponent extends React.Component<BaseComponentProps, BaseComponentState> {
  protected appStore = new AppStore();

  constructor(props: any) {
    super(props);
  }

  handleOnEnter = (e: any, callback?: any, space = false) => {
    const code = e.keyCode ? e.keyCode : e.which;
    if (code === 13 || (space && code === 32)) !_.isNil(callback) ? callback() : undefined;
  };
}
