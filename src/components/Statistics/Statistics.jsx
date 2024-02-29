import styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <p className={styles.option}>Good: {good}</p>
      <p className={styles.option}>Neutral: {neutral}</p>
      <p className={styles.option}>Bad: {bad}</p>
      <p className={styles.option}>Total: {total}</p>
      <p className={styles.option}>
        Positive feedback percentage: {positivePercentage}%
      </p>
    </div>
  );
};

export default Statistics;
