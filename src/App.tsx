import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-astral-light/60">
      <Navbar />
      <main className="flex-1 px-4 py-8 sm:px-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
