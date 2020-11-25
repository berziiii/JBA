import * as _ from "lodash";
import React from "react";
import {Link} from "react-router-dom";
import {Observer} from "mobx-react";
import {Drawer} from "antd";
import {BaseComponent} from "../BaseComponent";
import {HeaderProps, HeaderState} from "./HeaderInterface";

import logo from "assets/header/logo.png";
import menu from "assets/header/menu.svg";
import close from "assets/header/close.svg";

import styles from "./Header.module.scss";
import {AppMode} from "../../utils/Constants";

export class Header<P extends HeaderProps = HeaderProps, S extends HeaderState = HeaderState> extends BaseComponent {
  state: HeaderState = {};

  constructor(props: HeaderProps) {
    super(props);
  }

  scrollToSection = (e: any) => {
    const {appStore} = this;
    const isMobile = appStore.state.mode === AppMode.Mobile;
    const {hash} = e.target;
    if (_.isNil(hash)) window.scrollTo({left: 0, top: 0, behavior: "smooth"});
    else
      setTimeout(() => {
        const id = e.target.hash.split("#")[1];
        const element = document.getElementById(id);
        if (element) window.scrollTo({left: 0, top: element.offsetTop - 60, behavior: "smooth"});
      }, 0);

    if (isMobile) this.handleCloseDrawerPanel();
  };

  handleOpenDrawerPanel = () => {
    const {appStore} = this;
    appStore.setDrawerPanelVisible(true);
  };

  handleCloseDrawerPanel = () => {
    const {appStore} = this;
    appStore.setDrawerPanelVisible(false);
  };

  drawerPanel = () => {
    const {appStore} = this;
    const isMobile = appStore.state.mode === AppMode.Mobile;
    const closeIcon = (
      <div className={styles.drawerCloseContainer}>
        <div className={styles.drawerClose} role={"button"} tabIndex={0} onClick={this.handleCloseDrawerPanel} onKeyPress={e => this.handleOnEnter(e, this.handleCloseDrawerPanel)}>
          <img src={close} className={styles.closeIcon} />
        </div>
      </div>
    );

    return (
      <Drawer width={300} placement="right" visible={this.appStore.state.drawerPanelVisible} onClose={this.handleCloseDrawerPanel}>
        {closeIcon}
        <div className={styles.drawerMenuList}>
          <p className={styles.drawerTitle}>Login</p>
          <a href={"https://www.netxinvestor.com/nxi/login"} target={"_blank"} tabIndex={0} className={styles.drawerNestedItem} onClick={this.handleCloseDrawerPanel} onKeyPress={e => this.handleOnEnter(e, this.handleCloseDrawerPanel)}>
            Investment Accounts
          </a>
          <a
            href={"https://client.schwab.com/Login/SignOn/CustomerCenterLogin.aspx?&kc=y&sim=y"}
            target={"_blank"}
            tabIndex={0}
            className={styles.drawerNestedItem}
            onClick={this.handleCloseDrawerPanel}
            onKeyPress={e => this.handleOnEnter(e, this.handleCloseDrawerPanel)}
          >
            Referral Accounts
          </a>
          <a
            href={"https://www.moneyguidepro.com/ifa/Guests.aspx?gst=C2C5380652F6300DFDA37D6E406283589046A2A92276ED495C164AC0BD50F372"}
            target={"_blank"}
            tabIndex={0}
            className={styles.drawerNestedItem}
            onClick={this.handleCloseDrawerPanel}
            onKeyPress={e => this.handleOnEnter(e, this.handleCloseDrawerPanel)}
          >
            Financial Plans
          </a>
          {isMobile && (
            <>
              <Link to={"/#what-we-do"} role={"button"} className={styles.drawerItem} onClick={this.scrollToSection} onKeyPress={e => this.handleOnEnter(e, this.scrollToSection)}>
                What We Do
              </Link>
              <Link to={"/#who-we-are"} role={"button"} className={styles.drawerItem} onClick={this.scrollToSection} onKeyPress={e => this.handleOnEnter(e, this.scrollToSection)}>
                Who We Are
              </Link>
              <Link to={"/#why-choose-us"} role={"button"} className={styles.drawerItem} onClick={this.scrollToSection} onKeyPress={e => this.handleOnEnter(e, this.scrollToSection)}>
                Why Choose Us?
              </Link>
              <Link to={"/#contact-us"} role={"button"} className={styles.drawerItem} onClick={this.scrollToSection} onKeyPress={e => this.handleOnEnter(e, this.scrollToSection)}>
                Contact Us
              </Link>
            </>
          )}
          <Link to={"/video-library"} tabIndex={0} className={styles.drawerItem} onClick={this.handleCloseDrawerPanel} onKeyPress={e => this.handleOnEnter(e, this.handleCloseDrawerPanel)}>
            Video Library
          </Link>
          <a href={"http://blog.jbafinancialadvisors.com/"} target={"_blank"} tabIndex={0} className={styles.drawerItem} onClick={this.handleCloseDrawerPanel} onKeyPress={e => this.handleOnEnter(e, this.handleCloseDrawerPanel)}>
            Blog
          </a>
          <Link to={"/platform"} tabIndex={0} className={styles.drawerItem} onClick={this.handleCloseDrawerPanel} onKeyPress={e => this.handleOnEnter(e, this.handleCloseDrawerPanel)}>
            Advisory Platform
          </Link>
          <Link to={"/terms-conditions"} tabIndex={0} className={styles.drawerItem} onClick={this.handleCloseDrawerPanel} onKeyPress={e => this.handleOnEnter(e, this.handleCloseDrawerPanel)}>
            Terms & Conditions
          </Link>
        </div>
      </Drawer>
    );
  };

  render() {
    const {appStore} = this;
    return (
      <Observer>
        {() => (
          <header className={styles.header}>
            <div className={styles.leftContent}>
              <div role="button" tabIndex={0} className={styles.logoContainer}>
                <Link to={"/"} tabIndex={-1} className={styles.logoLink} onClick={this.scrollToSection} onKeyPress={e => this.handleOnEnter(e, this.scrollToSection)}>
                  <img src={logo} className={styles.logo} />
                </Link>
              </div>
              {appStore.state.mode === AppMode.Desktop && (
                <div className={styles.headerMenuLeftContainer}>
                  <Link to={"/#what-we-do"} role={"button"} className={styles.menuItem} onClick={this.scrollToSection} onKeyPress={e => this.handleOnEnter(e, this.scrollToSection)}>
                    What We Do
                  </Link>
                  <Link to={"/#who-we-are"} role={"button"} className={styles.menuItem} onClick={this.scrollToSection} onKeyPress={e => this.handleOnEnter(e, this.scrollToSection)}>
                    Who We Are
                  </Link>
                  <Link to={"/#why-choose-us"} role={"button"} className={styles.menuItem} onClick={this.scrollToSection} onKeyPress={e => this.handleOnEnter(e, this.scrollToSection)}>
                    Why Choose Us?
                  </Link>
                  <Link to={"/#contact-us"} role={"button"} className={styles.menuItem} onClick={this.scrollToSection} onKeyPress={e => this.handleOnEnter(e, this.scrollToSection)}>
                    Contact Us
                  </Link>
                </div>
              )}
            </div>
            <div className={styles.rightContent}>
              <div className={styles.headerMenuRightContainer}>
                <div className={styles.menuButton} tabIndex={0} role={"button"} onClick={this.handleOpenDrawerPanel} onKeyPress={e => this.handleOnEnter(e, this.handleOpenDrawerPanel)}>
                  <img src={menu} className={styles.menuIcon} />
                </div>
              </div>
            </div>
            {this.drawerPanel()}
          </header>
        )}
      </Observer>
    );
  }
}
