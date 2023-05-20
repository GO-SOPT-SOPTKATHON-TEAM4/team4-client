import { BrowserRouter, Route, Routes } from 'react-router-dom';

import GameResultPage from './pages/GameResultPage';
import HomePage from './pages/GamePage';
import LandingPage from './pages/LandingPage';
import RankingDetailPage from './pages/RankingDetailPage';
import RankingPage from './pages/RankingPage';
import { RecoilRoot } from 'recoil';
import { Suspense } from 'react';

const Router = () => {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Suspense>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/game" element={<HomePage />} />
            <Route path="/gameresult" element={<GameResultPage />} />
            <Route path="/ranking" element={<RankingPage />} />
            <Route path="/detail:postId" element={<RankingDetailPage />} />
          </Routes>
        </Suspense>
      </RecoilRoot>
    </BrowserRouter>
  );
};

export default Router;
