import React from 'react';
import './App.css';
import useGlobalStyles from './components/styles/useGlobalStyles';
import TopNav from './components/ui/TopNav';
import Header from './components/ui/layout/Header';

function App() {
  const globalClasses = useGlobalStyles();
  return (
    <div className={globalClasses.rootApp}>
      <TopNav />
      <Header />
    </div>
  );
}

export default App;
