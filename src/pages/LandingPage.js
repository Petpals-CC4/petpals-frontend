import React, { Component } from 'react'
import PageInfo from '../components/landing/PageInfo'
import Navbar from '../components/landing/Navbar'

class LandingPage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <PageInfo />
      </div>
    )
  }
}

export default LandingPage
