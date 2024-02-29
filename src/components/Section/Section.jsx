import styles from './Section.module.css';

const Section = ({ title, children }) => {
  return (
    <div className={styles.section}>
      <h2 className={styles.header}>{title}</h2>
      {children}
    </div>
  );
};

export default Section;
