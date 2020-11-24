import React from "react";
import {Link} from "react-router-dom";
import {Menu} from "antd";
import {BaseComponent} from "../BaseComponent";
import {HeaderProps, HeaderState} from "./HeaderInterface";

import styles from "./Header.module.scss";
import logo from "assets/header/logo.png";

export class Header<P extends HeaderProps = HeaderProps, S extends HeaderState = HeaderState> extends BaseComponent {
  state: HeaderState = {
    drawerPanelOpen: false,
    loginOpen: false,
  };

  constructor(props: HeaderProps) {
    super(props);
  }

  toggleDrawer = () => {
    this.setState({drawerPanelOpen: !this.state.drawerPanelOpen});
  };

  toggleLoginCollapse = () => {
    this.setState({loginOpen: !this.state.loginOpen});
  };

  render() {
    // const {state} = this;
    // const {drawerPanelOpen} = state;
    return (
      <header className={styles.header}>
        <div className={styles.leftContent}>
          <button tabIndex={0} className={styles.logoContainer}>
            <Link to={"/"} tabIndex={-1} className={styles.logoLink}>
              <img src={logo} className={styles.logo} />
            </Link>
          </button>
          <Menu mode={"horizontal"} className={styles.headerMenuLeftContainer}>
            <Menu.Item key="whatWeDo" tabIndex={0} className={styles.menuItem}>
              <Link to={""} tabIndex={-1}>
                What We Do
              </Link>
            </Menu.Item>
            <Menu.Item key="whoWeAre" tabIndex={0} className={styles.menuItem}>
              <Link to={""} tabIndex={-1}>
                Who We Are
              </Link>
            </Menu.Item>
            <Menu.Item key="whyChooseUs" tabIndex={0} className={styles.menuItem}>
              <Link to={""} tabIndex={-1}>
                Why Choose Us?
              </Link>
            </Menu.Item>
            <Menu.Item key="contact" tabIndex={0} className={styles.menuItem}>
              <Link to={""} tabIndex={-1}>
                Contact Us
              </Link>
            </Menu.Item>
          </Menu>
        </div>
        <div className={styles.rightContent}>
          <Menu mode={"horizontal"} className={styles.headerMenuRightContainer}>
            <Menu.SubMenu key="SubMenu" title="Login" className={styles.menuItem}>
              <Menu.Item key="investment" tabIndex={0} className={styles.menuItem}>
                <Link to={""} tabIndex={-1}>
                  Investment Account
                </Link>
              </Menu.Item>
              <Menu.Item key="referral" tabIndex={0} className={styles.menuItem}>
                <Link to={""} tabIndex={-1}>
                  Referral Accounts
                </Link>
              </Menu.Item>
              <Menu.Item key="financial" tabIndex={0} className={styles.menuItem}>
                <Link to={""} tabIndex={-1}>
                  Financial Plans
                </Link>
              </Menu.Item>
            </Menu.SubMenu>
          </Menu>
        </div>
      </header>
    );
  }
}
