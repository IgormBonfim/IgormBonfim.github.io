import './App.css'
import Footer from './components/Footer/Footer.tsx';
import Navbar from './components/Navbar/Navbar.tsx';
import { Outlet } from 'react-router-dom'
import ScrollToTop from './utils/ScrollToTop.tsx';

function App() {
  return (
    <div className="w-full h-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <div className="container mx-auto px-8">
        <ScrollToTop/>
        <Navbar/>
        <main>
            <Outlet/>
        </main>
        <Footer/>
      </div>
    </div>
  )
}

export default App
