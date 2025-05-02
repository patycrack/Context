import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './generated-tailwind.css';
import { CharacterProvider } from './context/CharacterContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <CharacterProvider>
    <App />
  </CharacterProvider>
);
