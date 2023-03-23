import Layout from './components/Layout/Layout';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import CustomerSupportPage from './pages/CustomerSupportPage/CustomerSupportPage';
import GalleryPage from './pages/GalleryPage/GalleryPage';
import ArtworkPage from './pages/ArtworkPage/ArtworkPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import { routes } from './constants/routes';
import { useMemo } from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  
  const navbarLinks = useMemo(() => {
    return [
      {
        to: routes.homePage,
        label: "Home",
      },
      {
        to: routes.customerSupportPage,
        label: "Customer Support Page",
      },
      {
        to: routes.galleryPage,
        label: "Gallery Page",
      }

    ];
  }, []);
 

  return (
    <div>
    <Navbar pages={navbarLinks}/>
    <Layout> 
      <Routes>
        <Route path={routes.homePage} element={<HomePage/>}/>
        <Route path={routes.customerSupportPage} element={<CustomerSupportPage/>}/>
        <Route path={routes.galleryPage} element={<GalleryPage/>}/>
        <Route path={routes.artworkPage} element={<ArtworkPage/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    
    </Layout>
    
    </div>
  );
}

export default App;
