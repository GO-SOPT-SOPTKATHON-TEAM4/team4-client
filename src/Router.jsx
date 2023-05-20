import { BrowserRouter, Route, Routes } from 'react-router-dom';

import GameResultPage from './pages/GameResultPage';
import HomePage from './pages/GamePage';
import LandingPage from './pages/LandingPage';
import RankingDetailPage from './pages/RankingDetailPage';
import RankingPage from './pages/RankingPage';
import { RecoilRoot } from 'recoil';
import { Suspense } from 'react';
import WinnerPage from './pages/WinnerPage';
import PostPage from './pages/PostPage';
import PostCompletePage from './pages/PostCompletePage';

const Router = () => {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Suspense>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/winner" element={<WinnerPage />} />
            <Route path="/game" element={<HomePage />} />
            <Route path="/gameresult" element={<GameResultPage />} />
            <Route path="/ranking" element={<RankingPage />} />
            <Route path="/detail" element={<RankingDetailPage />} />
            <Route path="/post" element={<PostPage />} />
            <Route path="/postcomplete" element={<PostCompletePage />} />
          </Routes>
        </Suspense>
      </RecoilRoot>
    </BrowserRouter>
  );
};

export default Router;
