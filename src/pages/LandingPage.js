import React, { Component } from 'react'
import PageInfo from '../components/landing/PageInfo'
import Navbar from '../components/landing/Navbar'
import SearchZone from '../components/landing/SearchZone'

class LandingPage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <PageInfo />
        <SearchZone />
      </div>
    )
  }
}

export default LandingPage
