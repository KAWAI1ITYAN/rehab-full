import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainPage } from '../../pages/main-page/main-page.tsx';
import { AboutPage } from '../../pages/about-page/about-page.tsx';
import { ReviewsPage } from '../../pages/reviews-page/reviews-page.tsx';

export const Router: FC = () => {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/reviews' element={<ReviewsPage />} />
    </Routes>
  );
};
