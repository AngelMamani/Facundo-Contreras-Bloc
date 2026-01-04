import { useState } from 'react';
import styles from './VideoCarousel.module.css';

interface Video {
  id: string;
  title: string;
  thumbnail: string;
}

interface VideoCarouselProps {
  videos: Video[];
  title: string;
}

export function VideoCarousel({ videos, title }: VideoCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextVideo = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.carousel}>
          <button
            className={styles.arrowButton}
            onClick={prevVideo}
            aria-label="Video anterior"
          >
            ←
          </button>
          <div className={styles.videoContainer}>
            <div
              className={styles.videoWrapper}
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {videos.map((video) => (
                <div key={video.id} className={styles.videoItem}>
                  <div className={styles.videoFrame}>
                    <iframe
                      className={styles.iframe}
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                  <h3 className={styles.videoTitle}>{video.title}</h3>
                </div>
              ))}
            </div>
          </div>
          <button
            className={styles.arrowButton}
            onClick={nextVideo}
            aria-label="Video siguiente"
          >
            →
          </button>
        </div>
        <div className={styles.indicators}>
          {videos.map((_, index) => (
            <button
              key={index}
              className={`${styles.indicator} ${
                index === currentIndex ? styles.active : ''
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Ir al video ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

