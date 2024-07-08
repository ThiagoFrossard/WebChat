// src/App.tsx
import React from 'react';
import './App.css';
import Welcome from './components/Welcome';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Welcome name="Visitante" />
      </header>
    </div>
  );
};

export default App;
