import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Navbar from './components/layouts/Navbar/Navbar';
import Footer from './components/layouts/Footer/Footer';

import styles from './styles/App.module.css';

import Home from './pages/Home/Home';
import CompanyList from './pages/Company/CompanyList';

function App() {
  return (
    <div className={styles.screen}>
      <BrowserRouter>
        <Navbar />
        <ContentBox />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

function ContentBox() {
  return (
    <div className={styles.container}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/company' element={<CompanyList />} />
      </Routes>
    </div>
  );
}

export default App;
