import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-mv-dark text-mv-silver selection:bg-mv-wine selection:text-white flex flex-col transition-colors duration-300">
          <Navbar />
          <main className="flex-grow">
            <Home />
          </main>
          <footer className="bg-mv-black border-t border-white/5 py-8 mt-auto">
            <div className="max-w-7xl mx-auto px-4 text-center text-mv-smoke text-sm">
              <p>© 2024 MOTORVERSE. Premium Intelligence Platform.</p>
            </div>
          </footer>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
