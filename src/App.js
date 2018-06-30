import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className = "container">
      <div className = "row">
      <div className = "col-sm-12">
      <img src={require('./images/doctor.png')} className = "content_image"/>
          <img src={require('./images/Cap.png')} className = "image_header"/>
          <h1>Medcollab</h1><small className = "tagline">Ask, Find, Resolve</small></div>
      </div>
      </div>
      <div className = "row">
      <div className = "col-sm-3">
     
      </div>
      <div className = "col-sm-6">
      <div className = "middle_portion">
      <h2 className="tagline2">Join the biggest Medical community today!</h2>

      </div>
        <button className = "btn btn-primary">Sign in</button>
        <h2>Your Medical Partner</h2><small>Made for Medical Students</small>
        </div>
        <div className = "col-sm-3">
        </div>
        </div>
        </div>
    );
  }
}

export default App;
