import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div className='welcome-container'>
        <h3 className='greetings'>Welcome to</h3>
        <h1 className='company-name'>FindMyFreelancer</h1>
        <h3 className='description'>An online portal for finding the right freelancer for getting your work done.</h3>
        <button
          className='home-button'
          onClick={() => window.location.pathname="/home"}
        >
          Find My Freelancer
          <i className="fas fa-arrow-right" />
        </button>
      </div>
    )
  }
}


