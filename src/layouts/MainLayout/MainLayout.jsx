import { Outlet } from 'react-router-dom';
import Navbar from '../../components/common/Navbar/Navbar';
import Footer from '../../components/common/Footer/Footer';
import WhatsAppFloating from '../../components/common/WhatsAppFloating/WhatsAppFloating';
import './MainLayout.css';

const MainLayout = () => {
  return (
    <div className="main-layout">
      <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
      <WhatsAppFloating />
      <Footer />
    </div>
  );
};

export default MainLayout;
