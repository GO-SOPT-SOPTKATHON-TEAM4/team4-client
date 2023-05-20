import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from './pages/GamePage';
import LandingPage from './pages/LandingPage';
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
          </Routes>
        </Suspense>
      </RecoilRoot>
    </BrowserRouter>
  );
};

export default Router;
