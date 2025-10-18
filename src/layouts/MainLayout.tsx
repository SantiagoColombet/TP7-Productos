import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import '../App.css'

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
