import React from "react";
import {AppStore} from "../../stores/AppStore";

interface BaseComponentProps {}
interface BaseComponentState {}

export class BaseComponent extends React.Component<BaseComponentProps, BaseComponentState> {
  appStore = new AppStore();
  constructor(props: BaseComponentProps) {
    super(props);
  }
}
