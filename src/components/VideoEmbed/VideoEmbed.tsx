import styles from './VideoEmbed.module.css';

interface VideoEmbedProps {
  videoId: string;
  title?: string;
  className?: string;
}

export function VideoEmbed({ videoId, title, className }: VideoEmbedProps) {
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className={`${styles.container} ${className || ''}`}>
      {title && <h3 className={styles.title}>{title}</h3>}
      <div className={styles.videoWrapper}>
        <iframe
          className={styles.iframe}
          src={embedUrl}
          title={title || 'Video de YouTube'}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </div>
  );
}

