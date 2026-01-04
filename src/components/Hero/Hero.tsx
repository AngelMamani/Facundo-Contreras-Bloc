import styles from './Hero.module.css';
import foto from '../../assets/foto.png';

export function Hero() {
  return (
    <section className={styles.hero} style={{ backgroundImage: `url(${foto})` }}>
      <div className={styles.overlay}></div>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Facundo <span className={styles.titleAccent}>Contreras</span>
          </h1>
          <p className={styles.subtitle}>
            Trader Profesional de Opciones Binarias
          </p>
          <div className={styles.description}>
            <p>
              Soy Facundo, aficionado por el Trading. Disfruto compartir mis
              conocimientos y ver cómo las personas aprenden y crecen en este
              apasionante mundo de las opciones binarias.
            </p>
            <p className={styles.experience}>
              Con años de experiencia operando en mercados financieros,
              especializado en estrategias de acción del precio y análisis
              técnico.
            </p>
          </div>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <div className={styles.statValue}>11.7K+</div>
              <div className={styles.statLabel}>Suscriptores</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statValue}>173+</div>
              <div className={styles.statLabel}>Videos</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
