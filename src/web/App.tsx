import React from 'react';
import { observer } from 'mobx-react-lite';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import StoresProvider from './providers/StoresProvider';
import { AppStore } from './stores/AppStore';

import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import Platform from './pages/platform/Platform';
import TermsConditions from './pages/termsconditions/TermsConditions';
// import VideoLibrary from './pages/videolibrary/VideoLibrary';

const App = observer(() => {
  return (
    <BrowserRouter>
      <StoresProvider appStore={new AppStore()}>
        <div className="main-container">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/platform" element={<Platform />} />
            <Route path="/terms-and-conditions" element={<TermsConditions />} />
            <Route path="/video-library" element={<Navigate to="/" replace />} />
          </Routes>
          <Footer />
        </div>
      </StoresProvider>
    </BrowserRouter>
  );
});

export default App;
