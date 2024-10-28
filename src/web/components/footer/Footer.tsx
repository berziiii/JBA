import React from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { handleOnEnter } from '../../utils/WebHelper';

import styles from './Footer.module.scss';

const Footer = observer(() => {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className={styles.footer}>
      <p>JBA Financial Advisors</p>
      <p>Copyright © {year} - All rights reserved</p>
      <Link
        to="/terms-and-conditions"
        className={styles.termsConditions}
        onClick={scrollToTop}
        onKeyPress={e => handleOnEnter(e, scrollToTop)}>
        Terms & Conditions
      </Link>
      <a href="https://www.bbb.org/us/md/timonium/profile/financial-consultants/jba-financial-advisors-0011-90206830/#sealclick"
        target="_blank"
        rel="nofollow"
        className={styles.bbbLink}>
        <img src="https://seal-greatermd.bbb.org/seals/blue-seal-293-61-whitetxt-bbb-90206830.png"
          style={{ border: 0 }}
          alt="JBA Financial Advisors BBB Business Review" />
      </a>
    </div>
  );
});

export default Footer;
