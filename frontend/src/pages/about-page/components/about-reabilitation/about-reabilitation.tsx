import styles from './about-reabilitation.module.scss';

export const AboutReabilitation = () => {
  return (
    <div className={styles.block}>
      <h1 className={styles.title}>Как проходит реабилитация?</h1>
      <p className={styles.one}> · Много центров и клиник предлагают разные программы реабилитации.
        Религиозная, трудовая, психологическая,
        социологическая и т.п. Многолетний опыт работы с зависимыми и последние достижения в этой области показывают
        отличные результаты при сочетании таких методов: программа на основе 12 шагов; плюс социализация, плюс методики
        развития личностных качеств (ответственность, лидерство, честность и пр.) и физическое восстановление.</p>

      <p className={`${styles.text} ${styles.two}`}> · Индивидуальные программы.<br />
        Для каждого человека подбирается индивидуальная программа реабилитации.</p>

      <p className={`${styles.text} ${styles.three}`}> · Работа с родственниками.<br />
        Поддержка и консультации родных входят в план реабилитации.</p>

      <p className={`${styles.text} ${styles.four}`}> · Групповые и индивидуальные занятия. <br />Процесс организован
        так,
        чтоб использовать время с максимальной
        пользой.</p>

      <p className={`${styles.text} ${styles.five}`}> · Психологи, аддиктологи. С резидентами обязательно
        работают опытные специалисты, применяются современные методики и проверенные тренинги.</p>
    </div>
  );
};