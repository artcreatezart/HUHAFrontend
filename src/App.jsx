import { useEffect } from 'react';
import { HashRouter } from 'react-router-dom';
import './App.css';
import './App.css'

// Import Components
import Navbar from './components/Navbar';
import Links from './components/Links';
import Footer from './components/Footer';

const App = () => {

  return (
    <HashRouter>
      <Navbar />
      <Links/>
      <Footer />
    </HashRouter>
  )
}

export default App
