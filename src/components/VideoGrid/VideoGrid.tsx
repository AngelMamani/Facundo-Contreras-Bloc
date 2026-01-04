import styles from './VideoGrid.module.css';

interface Video {
  id: string;
  title: string;
  thumbnail: string;
}

interface VideoGridProps {
  videos: Video[];
  title: string;
}

export function VideoGrid({ videos, title }: VideoGridProps) {
  const getThumbnailUrl = (videoId: string) => {
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.grid}>
          {videos.map((video) => (
            <a
              key={video.id}
              href={`https://www.youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.videoCard}
            >
              <div className={styles.thumbnailContainer}>
                <img
                  src={getThumbnailUrl(video.id)}
                  alt={video.title}
                  className={styles.thumbnail}
                  loading="lazy"
                />
                <div className={styles.playButton}>
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              <h3 className={styles.videoTitle}>{video.title}</h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

