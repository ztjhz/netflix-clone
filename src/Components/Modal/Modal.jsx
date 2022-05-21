/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import YouTube from 'react-youtube';
import styles from './Modal.module.css';

// eslint-disable-next-line arrow-body-style
const Modal = ({ movieTitle, trailer, setTrailer }) => {
  return (
    <div className={styles.container} onClick={() => setTrailer('')}>
      {trailer === '' || trailer === 'null' ? null : (
        <YouTube
          videoId={trailer}
          opts={{
            height: `${Math.min(400, window.innerHeight * 0.7)}`,
            width: `${Math.min(640, window.innerWidth * 0.8)}`,
            playerVars: {
              autoplay: 1,
            },
          }}
          className="trailer_player"
        />
      )}
      {trailer === 'null' && (
        <div className="alert">
          No trailer found for <u>{movieTitle}</u>
        </div>
      )}
    </div>
  );
};

export default Modal;
