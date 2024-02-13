import { Route, Routes, BrowserRouter, useLocation } from 'react-router-dom';
import Navbar from './components/layouts/Navbar/Navbar';
import Footer from './components/layouts/Footer/Footer';
import ClientAssetSidebar from './components/layouts/Navbar/ClientAssetSidebar';
import AdminSidebar from './components/layouts/Navbar/AdminSidebar';
import ClientSidebar from './components/layouts/Navbar/ClientSidebar';
import styles from './styles/App.module.css';

import AdminHome from './pages/Home/AdminHome';
import ClientHome from './pages/Home/ClientHome';
import CompanyList from './pages/Company/CompanyList';
import Login from "./pages/Client/Login";
import AssetRequest from './pages/LifeCycle/AssetRequest';
import DepartmentAssetList from './pages/Client/DepartmentAssetList';
import AssetExpire from './pages/LifeCycle/AssetExpire';

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
        <Route path="/login" element={<Login/>}/>
        <Route path='/client/asset/request' element={<AssetRequest/>}/>
        <Route path='/client/asset/:deptId/:contId/expire' element={<AssetExpire/>}/>
        <Route path='/client/:deptId/list' element={<DepartmentAssetList/>}/>
      </Routes>
    </div>
  );
}

export default App;
