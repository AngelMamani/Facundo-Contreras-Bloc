import styles from './Footer.module.css';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.copyright}>
          © {currentYear} Facundo Contreras. Todos los derechos reservados.
        </p>
        <p className={styles.disclaimer}>
          El trading conlleva riesgos. Opera responsablemente.
        </p>
      </div>
    </footer>
  );
}
