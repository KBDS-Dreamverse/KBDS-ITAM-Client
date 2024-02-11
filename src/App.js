import { Route, Routes, BrowserRouter, useLocation } from 'react-router-dom';
import Navbar from './components/layouts/Navbar/Navbar';
import Footer from './components/layouts/Footer/Footer';
import ClientSidebar from './components/layouts/Navbar/ClientSidebar';
import AdminSidebar from './components/layouts/Navbar/AdminSidebar';

import styles from './styles/App.module.css';

import AdminHome from './pages/Home/AdminHome';
import ClientHome from './pages/Home/ClientHome';
import CompanyList from './pages/Company/CompanyList';
import Login from "./pages/Client/Login";
import AssetRequest from './pages/LifeCycle/AssetRequest';


function App() {

  const renderSidebar = () => {
    const path = window.location.pathname;
    if (path.startsWith('/client')) {
      return <ClientSidebar />;
    } else if(path.startsWith('/admin')) {
      return <AdminSidebar/>
    } else {
      return null;
    }
  };
  const renderNavbar = () => {
    const path = window.location.pathname;
    if(path.startsWith('/login')){
      return null;
    } else {
      return <Navbar/>;
    }
  };

  return (
    <div className={styles.screen}>
      <BrowserRouter>
        {renderNavbar()}
        {renderSidebar()}
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
      </Routes>
    </div>
  );
}

export default App;
