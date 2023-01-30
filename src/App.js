import React from 'react';
import { Route, Routes, HashRouter } from 'react-router-dom';
import { HeaderComponent } from './components/header';
import { FooterComponent } from './components/footer';
import { HomeComponent } from './pages/home';
import { SearchComponent } from './pages/search';
import { FavoriteComponent } from './pages/favorite';
import { ErrorComponent } from './components/error';

function App() {

  return (
    <HashRouter>
      <HeaderComponent />
        <Routes>
          <Route path='/' element={<HomeComponent />} />
          <Route path='/search' element={<SearchComponent />} />
          <Route path='/favorite' element={<FavoriteComponent />} />
          <Route path='*' element={<ErrorComponent />} />
        </Routes>
      <FooterComponent />
    </HashRouter>
  );
}

export default App;
