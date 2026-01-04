import styles from './PhotoCarousel.module.css';

interface PhotoCarouselProps {
  photos: string[];
  direction: 'left' | 'right';
}

export function PhotoCarousel({ photos, direction }: PhotoCarouselProps) {
  const duplicatedPhotos = [...photos, ...photos];

  return (
    <div className={styles.carouselContainer}>
      <div
        className={`${styles.carousel} ${
          direction === 'left' ? styles.scrollLeft : styles.scrollRight
        }`}
      >
        {duplicatedPhotos.map((photo, index) => (
          <div key={index} className={styles.photoWrapper}>
            <img
              src={photo}
              alt={`Foto ${index + 1}`}
              className={styles.photo}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
