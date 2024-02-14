import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Navbar from './components/layouts/Navbar/Navbar';
import Footer from './components/layouts/Footer/Footer';
import styles from './styles/App.module.css';

import AdminHome from './pages/Admin/Home/AdminHome';

import CompanyList from './pages/Admin/Company/Home/CompanyList';

import AssetList from './pages/Admin/Asset/Home/AssetList';
import AssetRegister from './pages/Admin/Asset/Register/AssetRegister';
import AssetDetail from './pages/Admin/Asset/Detail/AssetDetail';

import ContractList from './pages/Admin/Contract/Home/ContractList';
import ContractRegister from './pages/Admin/Contract/Register/ContractRegister';
import ContractDetail from './pages/Admin/Contract/Detail/ContractDetail';

import ClientHome from './pages/Client/Home/ClientHome';
import RequestList from './pages/Admin/Request/Home/RequestList';

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
        <Route path='/admin/asset/register' element={<AssetRegister />} />
        <Route path='/admin/asset/:id/detail' element={<AssetDetail />} />

        <Route path='/admin/contract' element={<ContractList />} />
        <Route path='/admin/contract/register' element={<ContractRegister />} />
        <Route path='/admin/contract/:id/detail' element={<ContractDetail />} />

        <Route path='/admin/request' element={<RequestList />} />

        <Route path='/client/home' element={<ClientHome />} />
      </Routes>
    </div>
  );
}

export default App;
