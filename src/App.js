import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';

import Footer from './site/Footer';
import Header from './site/Header';
import {
  BrowserRouter as Router
} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
      <Header />
      </Router>
      <Footer />
    </div>
  );
};

export default App;
