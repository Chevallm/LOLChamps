import React, { Component } from 'react';
var lol = require('lol-js');
var lolClient = lol.client({
  apiKey: "RGAPI-f8b31e70-9be7-4938-ab58-affdc3a70d00",
})

class MyScreen extends Component {

  constructor(props) {
    super(props);
    this.champions = [ "Karma", "Amumu"].map( (champion) =>
      <li key={champion}>{champion}</li>
    );
  }

  render() {
    return (
      <div className="container">
        <ul>
          {this.champions}
        </ul>
      </div>
    );
  }
}

export default MyScreen;
