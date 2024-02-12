import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Navbar from './components/layouts/Navbar/Navbar';
import Footer from './components/layouts/Footer/Footer';

import styles from './styles/App.module.css';

import AdminHome from './pages/Admin/Home/AdminHome';
import CompanyList from './pages/Admin/Company/CompanyList';
import AssetList from './pages/Admin/Asset/AssetList';

import ClientHome from './pages/Client/Home/ClientHome';

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
        <Route path='/' element={<AdminHome />} />
        <Route path='/admin/home' element={<AdminHome />} />
        <Route path='/admin/company' element={<CompanyList />} />
        <Route path='/admin/asset' element={<AssetList />} />

        <Route path='/client/home' element={<ClientHome />} />
      </Routes>
    </div>
  );
}

export default App;
