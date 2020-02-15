import React from 'react';
import './App.css';
import Header from './components/Header';
import Posts from './components/Posts';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <Posts />
    </div>
  );
}

export default App;
