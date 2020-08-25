import React from 'react';
import './assets/styles/App.css';
import Container from "./components/container";

function App() {
  return (
    <div className="app">
      <h1>
        Simple carousel
      </h1>
        <div className="container">
            <Container/>
        </div>
    </div>
  );
}

export default App;
