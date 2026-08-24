import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { DesignServicesPage } from './pages/DesignServicesPage';

export const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    // Simple custom routing listener
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', onLocationChange);

    // Overwrite pushState and replaceState to trigger re-renders on local link clicks
    const originalPushState = window.history.pushState;
    window.history.pushState = function (...args) {
      originalPushState.apply(window.history, args);
      onLocationChange();
    };

    const originalReplaceState = window.history.replaceState;
    window.history.replaceState = function (...args) {
      originalReplaceState.apply(window.history, args);
      onLocationChange();
    };

    return () => {
      window.removeEventListener('popstate', onLocationChange);
      window.history.pushState = originalPushState;
      window.history.replaceState = originalReplaceState;
    };
  }, []);

  return (
    <div className="app-root">
      <Header />
      {currentPath === '/design-services' ? <DesignServicesPage /> : <HomePage />}
    </div>
  );
};

export default App;
