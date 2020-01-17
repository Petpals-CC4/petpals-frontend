import React, { Component } from 'react'
import PageInfo from '../components/landing/PageInfo'
import Navbar from '../components/landing/Navbar'
import SearchZone from '../components/landing/SearchZone'
import FooterZone from '../components/landing/FooterZone'

class LandingPage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <PageInfo />
        <SearchZone />
        <FooterZone />
      </div>
    )
  }
}

export default LandingPage
