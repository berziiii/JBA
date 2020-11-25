import React from "react";
import {Observer} from "mobx-react";
import {BaseComponent} from "../../components/BaseComponent";
import {TermsConditionsProps, TermsConditionsState} from "./TermsConditionsInterface";

// import styles from "./TermsConditions.module.scss";

export class TermsConditions<P extends TermsConditionsProps = TermsConditionsProps, S extends TermsConditionsState = TermsConditionsState> extends BaseComponent {
  state: TermsConditionsState = {};

  constructor(props: TermsConditionsProps) {
    super(props);
  }

  render() {
    return <Observer>{() => <h1>Terms & Conditions</h1>}</Observer>;
  }
}
