import NavBar from '../components/NavBar.jsx';
import Footer from '../components/Footer.jsx';
import { Outlet } from 'react-router-dom';
import '../app.css'

function MainLayout() {
    return (
    <>
        <NavBar />
        <Outlet />
        <Footer />
    </>
  );
};

export default MainLayout;
