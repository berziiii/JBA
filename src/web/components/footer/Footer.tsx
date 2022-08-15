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
    </div>
  );
});

export default Footer;
