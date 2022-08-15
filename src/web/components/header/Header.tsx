import React from 'react';
import * as _ from 'lodash';
import { Link } from 'react-router-dom';
import { Drawer } from 'antd';
import { observer } from 'mobx-react-lite';

import Menu from 'assets/header/menu.svg';
import Close from 'assets/header/close.svg';
import { AppMode } from '../../utils/Constants';
import { useAppStore } from '../../providers/StoresProvider';
import { handleOnEnter } from '../../utils/WebHelper';

import styles from './Header.module.scss';

const logo = require('assets/header/logo.png');

const Header = observer(() => {
  const appStore = useAppStore();

  const scrollToSection = (e: any) => {
    const { hash } = e.target;
    if (_.isNil(hash) || hash === '') window.scrollTo(0, 0);
    else {
      setTimeout(() => {
        const id = e.target.hash.split('#')[1];
        const element = document.getElementById(id);
        if (element) window.scrollTo({ left: 0, top: element.offsetTop - 60, behavior: 'smooth' });
      }, 0);
    }

    handleCloseDrawerPanel();
  };

  const handleOpenDrawerPanel = () => {
    appStore.setDrawerPanelVisible(true);
  };

  const handleCloseDrawerPanel = () => {
    appStore.setDrawerPanelVisible(false);
  };

  const drawerPanel = () => {
    const isMobile = appStore.state.mode === AppMode.Mobile;
    const closeIcon = (
      <div className={styles.drawerCloseContainer}>
        <div
          className={styles.drawerClose}
          role="button"
          tabIndex={appStore.state.drawerPanelVisible ? 0 : 1}
          onClick={handleCloseDrawerPanel}
          onKeyPress={e => handleOnEnter(e, handleCloseDrawerPanel)}>
          <img src={Close} className={styles.closeIcon} alt="close icon" />
        </div>
      </div>
    );

    return (
      <Drawer
        width={300}
        placement="right"
        visible={appStore.state.drawerPanelVisible}
        onClose={handleCloseDrawerPanel}>
        {closeIcon}
        <div className={styles.drawerMenuList}>
          <p className={styles.drawerTitle}>Account Logins</p>
          <a
            href="https://www.netxinvestor.com/nxi/login"
            target="_blank"
            tabIndex={appStore.state.drawerPanelVisible ? 0 : 1}
            className={styles.drawerNestedItem}
            onClick={handleCloseDrawerPanel}
            onKeyPress={e => handleOnEnter(e, handleCloseDrawerPanel)}>
            Investment Accounts
          </a>
          <a
            href="https://client.schwab.com/Login/SignOn/CustomerCenterLogin.aspx?&kc=y&sim=y"
            target="_blank"
            tabIndex={appStore.state.drawerPanelVisible ? 0 : 1}
            className={styles.drawerNestedItem}
            onClick={handleCloseDrawerPanel}
            onKeyPress={e => handleOnEnter(e, handleCloseDrawerPanel)}>
            Referral Accounts
          </a>
          <a
            href="https://www.moneyguidepro.com/ifa/Guests.aspx?gst=C2C5380652F6300DFDA37D6E406283589046A2A92276ED495C164AC0BD50F372"
            target="_blank"
            tabIndex={appStore.state.drawerPanelVisible ? 0 : 1}
            className={styles.drawerNestedItem}
            onClick={handleCloseDrawerPanel}
            onKeyPress={e => handleOnEnter(e, handleCloseDrawerPanel)}>
            Financial Plans Accounts
          </a>
          {isMobile && (
            <>
              <Link
                to="/#what-we-do"
                role="button"
                className={styles.drawerItem}
                onClick={scrollToSection}
                onKeyPress={e => handleOnEnter(e, scrollToSection)}>
                What We Do
              </Link>
              <Link
                to="/#who-we-are"
                role="button"
                className={styles.drawerItem}
                onClick={scrollToSection}
                onKeyPress={e => handleOnEnter(e, scrollToSection)}>
                Who We Are
              </Link>
              <Link
                to="/#why-choose-us"
                role="button"
                className={styles.drawerItem}
                onClick={scrollToSection}
                onKeyPress={e => handleOnEnter(e, scrollToSection)}>
                Why Choose Us?
              </Link>
              <Link
                to="/#contact-us"
                role="button"
                className={styles.drawerItem}
                onClick={scrollToSection}
                onKeyPress={e => handleOnEnter(e, scrollToSection)}>
                Contact Us
              </Link>
            </>
          )}
          <Link
            to="/platform"
            tabIndex={appStore.state.drawerPanelVisible ? 0 : 1}
            className={styles.drawerItem}
            onClick={scrollToSection}
            onKeyPress={e => handleOnEnter(e, scrollToSection)}>
            Advisory Platform
          </Link>
          <Link
            to="/video-library"
            tabIndex={appStore.state.drawerPanelVisible ? 0 : 1}
            className={styles.drawerItem}
            onClick={scrollToSection}
            onKeyPress={e => handleOnEnter(e, scrollToSection)}>
            Video Library
          </Link>
          {/* <a href={"http://blog.jbafinancialadvisors.com/"} target={"_blank"} className={styles.drawerItem} onClick={scrollToSection} onKeyPress={e => handleOnEnter(e, scrollToSection)}> */}
          {/*  Blog */}
          {/* </a> */}
        </div>
      </Drawer>
    );
  };
  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        <div className={styles.leftContent}>
          <div role="button" tabIndex={0} className={styles.logoContainer}>
            <Link
              to="/"
              tabIndex={-1}
              className={styles.logoLink}
              onClick={scrollToSection}
              onKeyPress={e => handleOnEnter(e, scrollToSection)}>
              <img src={logo} className={styles.logo} alt="jba logo" />
            </Link>
          </div>
          {appStore.state.mode === AppMode.Desktop && (
            <div className={styles.headerMenuLeftContainer}>
              <Link
                to="/#what-we-do"
                role="button"
                className={styles.menuItem}
                onClick={scrollToSection}
                onKeyPress={e => handleOnEnter(e, scrollToSection)}>
                What We Do
              </Link>
              <Link
                to="/#who-we-are"
                role="button"
                className={styles.menuItem}
                onClick={scrollToSection}
                onKeyPress={e => handleOnEnter(e, scrollToSection)}>
                Who We Are
              </Link>
              <Link
                to="/#why-choose-us"
                role="button"
                className={styles.menuItem}
                onClick={scrollToSection}
                onKeyPress={e => handleOnEnter(e, scrollToSection)}>
                Why Choose Us?
              </Link>
              <Link
                to="/#contact-us"
                role="button"
                className={styles.menuItem}
                onClick={scrollToSection}
                onKeyPress={e => handleOnEnter(e, scrollToSection)}>
                Contact Us
              </Link>
            </div>
          )}
        </div>
        <div className={styles.rightContent}>
          <div className={styles.headerMenuRightContainer}>
            <div
              className={styles.menuButton}
              tabIndex={appStore.state.drawerPanelVisible ? -1 : 0}
              role="button"
              onClick={handleOpenDrawerPanel}
              onKeyPress={e => handleOnEnter(e, handleOpenDrawerPanel)}>
              <img src={Menu} className={styles.menuIcon} alt="open menu" />
            </div>
          </div>
        </div>
        {drawerPanel()}
      </div>
    </header>
  );
});

export default Header;
