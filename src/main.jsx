import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import GLAILanding from './components/GLAILanding'; // ✅ make sure path matches

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GLAILanding />
  </React.StrictMode>
);
