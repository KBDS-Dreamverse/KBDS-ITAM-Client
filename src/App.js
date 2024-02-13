import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Navbar from './components/layouts/Navbar/Navbar';
import Footer from './components/layouts/Footer/Footer';

import styles from './styles/App.module.css';

import AdminHome from './pages/Home/AdminHome';
import ClientHome from './pages/Home/ClientHome';
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
        <Route path='/admin/home' element={<AdminHome />} />
        <Route path='/admin/company' element={<CompanyList />} />

        <Route path='/client/home' element={<ClientHome />} />
      </Routes>
    </div>
  );
}

export default App;
