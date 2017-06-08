import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import MyScreen from './MyScreen';

class App extends Component {
  render() {
    return (
      <div id='body'>
        <Navbar/>
        <main className="grey darken-3">
          <MyScreen/>
        </main>
        <Footer/>
      </div>
    );
  }
}

export default App;
