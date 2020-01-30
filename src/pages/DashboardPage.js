import React, { Component } from 'react'
import DashboardNanny from "../../src/components/DashboardNanny/DashboardNanny"
import GoBackButton from '../components/utils/GoBackButton'

class DashboardPage extends Component {
  render() {
    return (
      <div>
        <GoBackButton goTo="/" />
        <DashboardNanny />
      </div>
    )
  }
}

export default DashboardPage
