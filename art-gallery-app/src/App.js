import Layout from './components/Layout/Layout';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import HomePage from './components/pages/HomePage/HomePage';
import CustomerSupportPage from './components/pages/CustomerSupportPage/CustomerSupportPage';
import GalleryPage from './components/pages/GalleryPage/GalleryPage';

function App() {
  return (
    <div>
    <Navbar />
    <Layout> 
      <HomePage />
      <GalleryPage />
      <CustomerSupportPage />
    </Layout>
    
    </div>
  );
}

export default App;
