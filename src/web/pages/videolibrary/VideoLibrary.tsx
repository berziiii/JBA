import React from "react";
import {Observer} from "mobx-react";
import {BaseComponent} from "../../components/BaseComponent";
import {VideoLibraryProps, VideoLibraryState, Video} from "./VideoLibraryInterface";

import styles from "./VideoLibrary.module.scss";

export class VideoLibrary<P extends VideoLibraryProps = VideoLibraryProps, S extends VideoLibraryState = VideoLibraryState> extends BaseComponent {
  state: VideoLibraryState = {};

  constructor(props: VideoLibraryProps) {
    super(props);
  }

  links = [
    {title: "10 Minute Lesson", url: "uim44zntlu"},
    {title: "Circle of Wealth", url: "i2x2ips551"},
    {title: "Club vs. Swing", url: "wq48jv72s5"},
    {title: "College Funding", url: "bj920wsa5t"},
    {title: "Mortgages", url: "fjhrzpjurr"},
    {title: "Personal Economic Model", url: "22syy9k6gt"},
    {title: "Private Reserve Strategy", url: "5xq1lrkpld"},
    {title: "Qualified Plans", url: "jhlkjcr8ps"},
    {title: "Ready for Retirement?", url: "74qkronge4"},
    {title: "Your Bank", url: "cp1fxpwqr4"},
  ];

  render() {
    return (
      <Observer>
        {() => (
          <div className={styles.videoContainer}>
            <h1 className={styles.videoTitle}>Video Library</h1>
            <div className={styles.videoWrapper}>
              {this.links.map((link: Video) => (
                <div className={styles.videoCard}>
                  <h3 className={styles.title}>{link.title}</h3>
                  <div className={`wistia_embed wistia_async_${link.url} ${styles.video}`}>&nbsp;</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </Observer>
    );
  }
}
