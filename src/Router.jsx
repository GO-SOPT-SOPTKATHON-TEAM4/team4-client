import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import LandingPage from './pages/LandingPage';
import RankingPage from './pages/RankingPage';
import { RecoilRoot } from 'recoil';
import { Suspense } from 'react';
import WinnerPage from './pages/WinnerPage';

const Router = () => {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Suspense>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/winner" element={<WinnerPage />} />
            <Route path="/ranking" element = {<RankingPage />} />
          </Routes>
        </Suspense>
      </RecoilRoot>
    </BrowserRouter>
  );
};

export default Router;
