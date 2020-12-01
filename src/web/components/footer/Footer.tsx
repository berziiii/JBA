import React from "react";
import {Link} from "react-router-dom";
import {Observer} from "mobx-react";
import {FooterProps, FooterState} from "./FooterInterface";
import {BaseComponent} from "../BaseComponent";

import styles from "./Footer.module.scss";

export class Footer<P extends FooterProps = FooterProps, S extends FooterState = FooterState> extends BaseComponent {
  state: FooterState = {};

  constructor(props: FooterProps) {
    super(props);
  }

  scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  render() {
    const year = new Date().getFullYear();
    return (
      <Observer>
        {() => (
          <div className={styles.footer}>
            <p>JBA Financial Advisors</p>
            <p>Copyright © {year} - All rights reserved</p>
            <Link to={"/terms-and-conditions"} className={styles.termsConditions} onClick={this.scrollToTop} onKeyPress={e => this.handleOnEnter(e, this.scrollToTop)}>
              Terms & Conditions
            </Link>
          </div>
        )}
      </Observer>
    );
  }
}
