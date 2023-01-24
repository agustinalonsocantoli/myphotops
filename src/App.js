import './App.css';
import { HeaderComponent } from './components/header';
import { FooterComponent } from './components/footer';
// import { HomeComponent } from './pages/home';
import { SearchComponent } from './pages/search';

function App() {
  return (
    <div>
      <HeaderComponent />
      {/* <HomeComponent /> */}
      <SearchComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
