import { useAppDispatch, useAppSelector } from '../../../../store/store.ts';
import { selectModal } from '../../../../store/reviews/selectors.ts';
import { Review } from '../../../../shared/components/review/review.tsx';
import { useGetLatestViewsQuery } from '../../../../store/reviews/api.ts';
import { closeForm, openForm } from '../../../../store/reviews/slice.ts';
import styles from './about-reviews.module.scss';


export const AboutReviews = () => {
  const state = useAppSelector(selectModal);
  const dispatch = useAppDispatch();
  const { data } = useGetLatestViewsQuery();


  return (
    <>
      <h1 className={styles.title}>Недавние отзывы</h1>
      <div className={styles.block}>
        {data?.map((item) => <Review text={item.text} name={item.name} date={item.date} key={item.id} />)}

      </div>
      <div className={styles.btn_block}>
        <button className={styles.btn}
                onClick={state.isOpen
                  ? () => dispatch(closeForm())
                  : () => dispatch(openForm())}>Оставить отзыв
        </button>
      </div>
    </>

  );
};


