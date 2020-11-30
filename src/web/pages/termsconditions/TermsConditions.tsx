import React from "react";
import {Observer} from "mobx-react";
import {BaseComponent} from "../../components/BaseComponent";
import {TermsConditionsProps, TermsConditionsState} from "./TermsConditionsInterface";

import styles from "./TermsConditions.module.scss";

export class TermsConditions<P extends TermsConditionsProps = TermsConditionsProps, S extends TermsConditionsState = TermsConditionsState> extends BaseComponent {
  state: TermsConditionsState = {};

  constructor(props: TermsConditionsProps) {
    super(props);
  }

  render() {
    return (
      <Observer>
        {() => (
          <div className={styles.mainContainer}>
            <h1 className={styles.containerTitle}>Terms and Conditions</h1>
            <div className={styles.contentContainer}>
              <p className={styles.content}>
                This site has been designed for informational purposes only and does not constitute an offer to sell or a solicitation of an offer to buy any security which may be referenced on the site. Such offers can only be made where
                permitted under the applicable law.
              </p>
              <p className={styles.content}>
                Links on this site are provided as a convenience and for informational purposes. JBA believes the information on these external sites to be accurate, however, JBA Financial Advisors bears no responsibility as to the
                accuracy, legality or content of the external site or for that of subsequent links.
              </p>
              <p className={styles.content}>
                JBA Financial Advisors does not intend to provide investment advice through this site and does not represent that securities or services discussed are suitable for any investor. Investors are advised not to rely on any
                information contained on this site in the process of making a fully informed investment decision.
              </p>
              <p className={styles.content}>JBA Financial Advisors does not, and this site is not intended to render tax or legal advice.</p>
              <p className={styles.content}>
                Hyper Links are provided as a courtesy. When you access one of these websites, you are leaving our website and assume responsibility for any risk associated with the use of the websites you are linking to.
              </p>
            </div>
          </div>
        )}
      </Observer>
    );
  }
}
