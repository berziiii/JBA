import React from 'react';
import { observer } from 'mobx-react-lite';

import styles from './VideoLibrary.module.scss';

interface Video {
  url: string;
  title: string;
}

const VideoLibrary = observer(() => {
  const links: Video[] = [
    { title: '10 Minute Lesson', url: 'zflece' },
    { title: 'Circle of Wealth', url: 'u7zoel' },
    { title: 'Club vs. Swing', url: 'zs8kom' },
    { title: 'College Funding', url: 'x93lh0' },
    { title: 'Mortgages', url: 'vggjr0' },
    { title: 'Personal Economic Model', url: 'npwiqn' },
    { title: 'Private Reserve Strategy', url: 'h0lzyl' },
    { title: 'Qualified Plans', url: '8jvwhh' },
    { title: 'Ready for Retirement?', url: '4uefr1' },
    { title: 'Your Bank', url: 'giarir' },
  ];

  return (
    <div className={styles.mainContainer}>
      <div className={styles.mainWrapper}>
        <h1 className={styles.videoTitle}>Video Library</h1>
        <div className={styles.videoWrapper}>
          {links.map((link: Video, index) => (
            <div key={index} className={styles.videoCard}>
              <h2 className={styles.title}>{link.title}</h2>
              <div className={styles.video}>
                <iframe allow="fullscreen"
                        title={`${index}`}
                        allowFullScreen
                        height="100%"
                        src={`https://streamable.com/e/${link.url}?loop=0`}
                        width="100%">
                </iframe>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

export default VideoLibrary;
