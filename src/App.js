import './App.css';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

function App() {
  const location = useLocation();
  const showPaths = ['/', '/profile'];
  const showNavbar = showPaths.includes(location.pathname);
  return (
    <>
      <Outlet/>
      {showNavbar && <Navbar/>}
    </>
  );
}

export default App;
