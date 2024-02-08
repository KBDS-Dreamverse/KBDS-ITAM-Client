import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Navbar from './components/layouts/Navbar/Navbar';
import Footer from './components/layouts/Footer/Footer';

import styles from './styles/App.module.css';




import AdminHome from './pages/Home/AdminHome';
import ClientHome from './pages/Home/ClientHome';
import CompanyList from './pages/Company/CompanyList';
import Main from "./pages/Client/Main";
import Login from "./pages/Client/Login";


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
<<<<<<< HEAD
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<Main/>}/>
        <Route path="/login" element={<Login/>}/>
=======
        <Route path='/admin/home' element={<AdminHome />} />
        <Route path='/admin/company' element={<CompanyList />} />

        <Route path='/client/home' element={<ClientHome />} />
>>>>>>> a0f7302297ee9e8f840181f5fb2766c961aa7c25
      </Routes>
    </div>
  );
}

export default App;
