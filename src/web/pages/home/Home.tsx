import React from "react";
// import Slider from "react-slick";
import {Observer} from "mobx-react";
import {Modal} from "antd";
import {PlayCircleFilled} from "@ant-design/icons";
import {BaseComponent} from "../../components/BaseComponent";
import {HomeProps, HomeState} from "./HomeInterface";
import {AppMode} from "../../../web/utils/Constants";

import styles from "./Home.module.scss";
import close from "assets/home/close.svg";

export class Home<P extends HomeProps = HomeProps, S extends HomeState = HomeState> extends BaseComponent {
  state: HomeState = {
    videoModalVisible: false,
  };

  constructor(props: HomeProps) {
    super(props);
  }

  componentDidMount() {
    this.navigateToHash();
  }

  navigateToHash = () => {
    setTimeout(() => {
      const id = window.location.hash.split("#")[1];
      if (id) {
        const element = document.getElementById(id);
        if (element) window.scrollTo(0, element.offsetTop - 60);
      }
    }, 250);
  };

  // slider = () => {
  //   const settings = {
  //     dots: true,
  //     infinite: true,
  //     speed: 1500,
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //     autoplay: true,
  //     autoplaySpeed: 5000,
  //   };
  //
  //   return (
  //     <div className={styles.sliderContainer}>
  //       <Slider {...settings}>
  //         <div className={styles.sliderCard}>
  //           <p>Do you have a retirement income plan or a retirement savings plan?</p>
  //         </div>
  //         <div className={styles.sliderCard}>
  //           <p>Do you know how retirement income streams work?</p>
  //         </div>
  //         <div className={styles.sliderCard}>
  //           <p>Would it be ok for you to run out of money in retirement?</p>
  //         </div>
  //         <div className={styles.sliderCard}>
  //           <p>Do you want the peace of mind of a secure retirement income?</p>
  //         </div>
  //       </Slider>
  //     </div>
  //   );
  // };

  handleOpenVideoModal = () => {
    this.setState({
      videoModalVisible: true,
    });
  };
  handleCloseVideoModal = () => {
    const videoPlayer: any = document.getElementById("videoPlayer");
    videoPlayer?.setAttribute("src", videoPlayer.src);
    this.setState({
      videoModalVisible: false,
    });
  };

  videoModal = () => {
    const {state, appStore} = this;
    const closeIcon = (
      <div className={styles.modalClose} role={"button"} tabIndex={0} onClick={this.handleCloseVideoModal} onKeyPress={e => this.handleOnEnter(e, this.handleCloseVideoModal)}>
        <img src={close} className={styles.closeIcon} />
      </div>
    );
    return (
      <Modal className={styles.videoModal} maskClosable={false} closeIcon={closeIcon} visible={state.videoModalVisible} footer={null} onCancel={this.handleCloseVideoModal}>
        <div className={styles.videoContainer}>
          <iframe
            src="https://player.vimeo.com/video/369838909"
            id={"videoPlayer"}
            title={"Retirement Savings Dilemma"}
            allow="fullscreen"
            allowFullScreen
            frameBorder="0"
            width={appStore.state.mode === AppMode.Desktop ? 700 : 450}
            height={appStore.state.mode === AppMode.Desktop ? 400 : 225}
            scrolling="no"
          />
        </div>
      </Modal>
    );
  };

  render() {
    return (
      <Observer>
        {() => (
          <div className={styles.wrapper}>
            <div className={styles.heroWrapper}>
              <div className={styles.heroMask}>
                <h1 className={styles.heroTitle}>Start Building Your Guaranteed Pension Today!</h1>
                <button className={styles.videoCtaContainer} onClick={this.handleOpenVideoModal}>
                  <PlayCircleFilled className={styles.playIcon} />
                </button>
              </div>
            </div>
            <div id={"what-we-do"} className={styles.containerWrapper}>
              <h2>What We Do</h2>
            </div>
            <div id={"who-we-are"} className={styles.containerWrapper}>
              <h2>Who We Are</h2>
            </div>
            <div id={"why-choose-us"} className={styles.containerWrapper}>
              <h2>Why Choose Us?</h2>
            </div>
            <div id={"contact-us"} className={styles.containerWrapper}>
              <h2>Contact Us</h2>
            </div>
            {this.videoModal()}
          </div>
        )}
      </Observer>
    );
  }
}
