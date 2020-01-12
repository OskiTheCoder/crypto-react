import React, { Component } from 'react';
import './App.css';
import Ticker from './Ticker.js';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <h2 className="app-title">React Cryptocurrency Comparator</h2>
          <p className="app-info">Current cryptocurrency prices (USD). Prices change each hour according to API updates. Data provided by CoinMarketCap.</p>
        </header>
        <Ticker />
      </div>
    );
  }
}

export default App;
