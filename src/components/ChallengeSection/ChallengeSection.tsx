import styles from './ChallengeSection.module.css';
import foto2 from '../../assets/foto2.png';

export function ChallengeSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.videoContainer}>
            <div className={styles.videoWrapper}>
              <iframe
                className={styles.iframe}
                src="https://www.youtube.com/embed/qvz6e-APHE8"
                title="Reto de $100 a $10,000 USD en Opciones Binarias"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
          <div className={styles.imageContainer}>
            <img src={foto2} alt="Facundo Contreras" className={styles.image} />
            <div className={styles.imageOverlay}></div>
          </div>
        </div>
        <div className={styles.text}>
          <h2 className={styles.title}>Reto: De $100 a $10,000 USD</h2>
          <p className={styles.description}>
            En esta serie me propongo el reto de comenzar con $100 USD y
            terminar con $10,000 USD. Te muestro un plan detallado con
            estrategias, gestión de riesgo y análisis de mercado.
          </p>
        </div>
      </div>
    </section>
  );
}
