import russiaI from '../../../assets/img/russia.svg';
import styles from './footer.module.scss';
import { Header } from '../header/header.tsx';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Header />
      <div className={styles.footer_text}>

        <div className={styles.address_block}>
          <div />
          <p className={styles.address}><br />
          info@narcologic.ru +7 901 745-30-58</p>
        </div>

        <span className={styles.rf}>
          <img src={russiaI} alt={'russia'} />
          <p className={styles.text}>ПРИ ПОДДЕРЖКЕ ДЕПАРТАМЕНТА ЗДРАВООХРАНЕНИЯ Г. НИЖНЕГО НОВГОРОДА ГОСУДАРСТВЕННОГО БЮДЖЕТНОГО УЧРЕЖДЕНИЯ ЗДРАВООХРАНЕНИЯ НИЖЕГОРОДСКИМ НАУЧНО-ПРАКТИЧЕСКИМ ЦЕНТРОМ НАРКОЛОГИИ</p>
        </span>

      </div>
    </footer>
  );
};