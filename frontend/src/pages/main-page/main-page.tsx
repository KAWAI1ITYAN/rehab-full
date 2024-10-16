import { useEffect } from 'react';
import { MainSpecialists } from './components/main-specialists/main-specialists';
import { MainOffer } from './components/main-offer/main-offer';
import { MainBlock } from './main-blocks/main-blocks';
import styles from './main-page.module.scss';
import { AboutHead } from '../about-page/components/about-head/about-head.tsx';
import { MainCondition } from './components/main-condition/main-condition.tsx';

export const MainPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Главная';
  }, []);

  return (
    <div className={styles.container}>
      <AboutHead />
      <MainBlock />
      <MainOffer />
      <MainSpecialists />
      <MainCondition />
    </div>
  );
};
