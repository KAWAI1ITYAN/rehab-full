import { useEffect } from 'react';
import styles from './about-page.module.scss';
import { useAppSelector } from '../../store/store.ts';
import { selectModal } from '../../store/reviews/selectors.ts';
import { AboutHead } from './components/about-head/about-head.tsx';
import { AboutReabilitation } from './components/about-reabilitation/about-reabilitation.tsx';
import { AboutPlaces } from './components/about-places/about-places.tsx';
import { AboutReviews } from './components/about-reviews/about-reviews.tsx';
import { AboutReviewsForm } from './components/about-reviews-form/about-reviews-form.tsx';

export const AboutPage = () => {
  const state = useAppSelector(selectModal);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'О нас';
  }, []);

  console.log(state);
  return (
    <div className={styles.container}>
      <AboutHead />
      <AboutReabilitation />
      <AboutPlaces />
      <AboutReviews />
      {state.isOpen && <AboutReviewsForm />}
    </div>
  );
};