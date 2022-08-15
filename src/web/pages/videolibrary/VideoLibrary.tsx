import React from 'react';
import { observer } from 'mobx-react-lite';

import styles from './VideoLibrary.module.scss';

interface Video {
  url: string;
  title: string;
}

const VideoLibrary = observer(() => {
  const links: Video[] = [
    { title: '10 Minute Lesson', url: 'uim44zntlu' },
    { title: 'Circle of Wealth', url: 'i2x2ips551' },
    { title: 'Club vs. Swing', url: 'wq48jv72s5' },
    { title: 'College Funding', url: 'bj920wsa5t' },
    { title: 'Mortgages', url: 'fjhrzpjurr' },
    { title: 'Personal Economic Model', url: '22syy9k6gt' },
    { title: 'Private Reserve Strategy', url: '5xq1lrkpld' },
    { title: 'Qualified Plans', url: 'jhlkjcr8ps' },
    { title: 'Ready for Retirement?', url: '74qkronge4' },
    { title: 'Your Bank', url: 'cp1fxpwqr4' },
  ];

  return (
    <div className={styles.mainContainer}>
      <div className={styles.mainWrapper}>
        <h1 className={styles.videoTitle}>Video Library</h1>
        <div className={styles.videoWrapper}>
          {links.map((link: Video, index) => (
            <div key={index} className={styles.videoCard}>
              <h2 className={styles.title}>{link.title}</h2>
              <div className={`wistia_embed wistia_async_${link.url} ${styles.video}`}>&nbsp;</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

export default VideoLibrary;
