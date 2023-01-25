import React from 'react';
import { Route, Routes, HashRouter } from 'react-router-dom';
import { HeaderComponent } from './components/header';
import { FooterComponent } from './components/footer';
import { HomeComponent } from './pages/home';
import { SearchComponent } from './pages/search';
import { FavoriteComponent } from './pages/favorite';

function App() {

  return (
    <HashRouter>
      <HeaderComponent />
        <Routes>
          <Route path='/' element={<HomeComponent />} />
          <Route path='/search' element={<SearchComponent />} />
          <Route path='/favorite' element={<FavoriteComponent />} />
        </Routes>
      <FooterComponent />
    </HashRouter>
  );
}

export default App;
