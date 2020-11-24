import React from "react";
// import Slider from "react-slick";
import {Modal} from "antd";
import {PlayCircleFilled} from "@ant-design/icons";
import {BaseComponent} from "../../components/BaseComponent";
import {HomeProps, HomeState} from "./HomeInterface";

import styles from "./Home.module.scss";

export class Home<P extends HomeProps = HomeProps, S extends HomeState = HomeState> extends BaseComponent {
  state: HomeState = {
    videoModalVisible: false,
  };

  constructor(props: HomeProps) {
    super(props);
  }

  // videoResize = () => {
  //   window.addEventListener("resize", () => {
  //     const windowWidth = window.innerWidth;
  //     const width = windowWidth - 400;
  //     const smallWidth = windowWidth - 100;
  //     this.setState({videoWidth: windowWidth < 768 ? smallWidth : width, videoHeight: windowWidth < 768 ? smallWidth / 1.75 : width / 1.75});
  //   });
  // };

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
    const {state} = this;

    return (
      <Modal className={styles.videoModal} maskClosable={false} visible={state.videoModalVisible} footer={null} onCancel={this.handleCloseVideoModal}>
        <div className={styles.videoContainer}>
          <iframe src="https://player.vimeo.com/video/369838909" id={"videoPlayer"} title={"Retirement Savings Dilemma"} allow="fullscreen" allowFullScreen frameBorder="0" width={600} height={350} scrolling="no" />
        </div>
      </Modal>
    );
  };

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.heroWrapper}>
          <div className={styles.heroMask}>
            <h1 className={styles.heroTitle}>Start Building Your Guaranteed Pension Today!</h1>
            <button className={styles.videoCtaContainer} onClick={this.handleOpenVideoModal}>
              <PlayCircleFilled className={styles.playIcon} />
            </button>
          </div>
        </div>
        {this.videoModal()}

        {/*<div className={styles.videoContainer}>*/}
        {/*  <iframe src="https://player.vimeo.com/video/369838909" title={"Retirement Savings Dilemma"} allow="fullscreen" allowFullScreen frameBorder="0" width={this.state.videoWidth} height={this.state.videoHeight} scrolling="no" />*/}
        {/*</div>*/}

        {/*{this.slider()}*/}
      </div>
    );
  }
}
