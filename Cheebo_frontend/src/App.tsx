import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import MainNavigator from './navigation/MainNavigator';
import './App.css';

const App = () => {
  return (
    <ThemeProvider>
      <MainNavigator />
    </ThemeProvider>
  );
};

export default App;