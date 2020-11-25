import React from "react";
import {Observer} from "mobx-react";
import {BaseComponent} from "../../components/BaseComponent";
import {PlatformProps, PlatformState} from "./PlatformInterface";

// import styles from "./Platform.module.scss";

export class Platform<P extends PlatformProps = PlatformProps, S extends PlatformState = PlatformState> extends BaseComponent {
  state: PlatformState = {};

  constructor(props: PlatformProps) {
    super(props);
  }

  render() {
    return <Observer>{() => <h1>Plaftorm</h1>}</Observer>;
  }
}
