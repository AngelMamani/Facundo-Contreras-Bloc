import styles from './TelegramSection.module.css';

export function TelegramSection() {
  return (
    <section className={styles.section}>
      <div className={styles.bgEffect}></div>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Únete a la Comunidad</h2>
          <div className={styles.titleUnderline}></div>
          <p className={styles.subtitle}>
            Grupo de Trading Gratis con señales diarias
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.features}>
            <div className={styles.feature}>
              <div className={styles.featureIconWrapper}>
                <span className={styles.featureIcon}>⚡</span>
                <div className={styles.iconGlow}></div>
              </div>
              <div className={styles.featureContent}>
                <h3 className={styles.featureTitle}>2 Sesiones al Día</h3>
                <p className={styles.featureText}>1 operación por sesión</p>
              </div>
            </div>

            <div className={styles.feature}>
              <div className={styles.featureIconWrapper}>
                <span className={styles.featureIcon}>🔥</span>
                <div className={styles.iconGlow}></div>
              </div>
              <div className={styles.featureContent}>
                <h3 className={styles.featureTitle}>Grupo Privado Disponible</h3>
                <p className={styles.featureText}>
                  3 sesiones con más operaciones y reuniones en vivo
                </p>
              </div>
            </div>
          </div>

          <div className={styles.buttonContainer}>
            <a
              href="https://t.me/+Ve1KkGWBfo1lZjRh"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.button}
            >
              <span className={styles.buttonText}>Unirse a Telegram</span>
              <span className={styles.buttonArrow}>→</span>
              <div className={styles.buttonGlow}></div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
