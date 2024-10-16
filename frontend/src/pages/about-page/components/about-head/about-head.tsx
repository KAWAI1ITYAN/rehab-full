import styles from './about-head.module.scss';
// import { ChangeEvent, FormEvent, useState } from 'react';
// import { useCreateBidMutation } from '../../../../store/reviews/api.ts';
// import { bidI } from '../../../../shared/types/types.ts';

// const initialState = {
//   name: '',
//   phone: ''
// };

export const AboutHead = () => {

  // const [createBid, { isLoading }] = useCreateBidMutation();

  // const [state, setState] = useState<bidI>(initialState);

  // const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //   setState({ ...state, [e.target.name]: e.target.value });
  // };
  //
  // const handleSubmit = async (e: FormEvent) => {
  //   e.preventDefault();
  //   try {
  //     await createBid(state).unwrap();
  //     setState(initialState);
  //   } catch (err) {
  //     console.error('Failed to submit the review', err);
  //   }
  // };

  return (
    <section className={styles.section}>
      <div className={styles.title_block}>
        <p className={styles.title}>
          ЛЕЧЕНИЕ НАРКОМАНИИ И<br /> АЛКОГОЛИЗМА
        </p>
        <p className={styles.desc}>
          РАБОТАЮЩИЕ МЕТОДИКИ ЛЕЧЕНИЯ <br />
          ЗАВИСИМОСТИ
        </p>
      </div>
      <form className={styles.form}
        // onSubmit={handleSubmit}
      >
        <p className={styles.text}>
          Свяжитесь с нашими специалистами для дальнейшей консультации
        </p>
        {/*<input placeholder='Имя'*/}
        {/*       onChange={handleChange}*/}
        {/*       value={state.name}*/}
        {/*       required*/}
        {/*/>*/}
        {/*<input placeholder='Номер телефона'*/}
        {/*       value={state.phone}*/}
        {/*       type={'tel'}*/}
        {/*       required*/}
        {/*       onChange={handleChange}*/}
        {/*/>*/}

        <p className={styles.phone}>Телефон: 8-901-745-30-58</p>
        <p className={styles.phone}>Почта: info@narcologic.ru</p>

        {/*<button type='submit' className={styles.btn} disabled={isLoading}>*/}
        {/*  {isLoading ? 'Добавление...' : 'Отправить'}*/}
        {/*</button>*/}
      </form>
    </section>
  );
};
