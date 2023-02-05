import React from 'react';
import './App.css';
import './main.css';
import Listing from './components/Listing';
import data from './data/etsy.json';

function App() {
  const dates = {data};
  return (
    <Listing items={dates}/>
  );
}

export default App;
