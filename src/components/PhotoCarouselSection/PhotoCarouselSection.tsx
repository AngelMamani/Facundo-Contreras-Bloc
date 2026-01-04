import { PhotoCarousel } from '../PhotoCarousel/PhotoCarousel';
import styles from './PhotoCarouselSection.module.css';

interface PhotoCarouselSectionProps {
  photos: string[];
  direction: 'left' | 'right';
  title?: string;
}

export function PhotoCarouselSection({
  photos,
  direction,
  title,
}: PhotoCarouselSectionProps) {
  return (
    <div className={styles.section}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <PhotoCarousel photos={photos} direction={direction} />
    </div>
  );
}

