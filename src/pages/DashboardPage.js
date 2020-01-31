import React, { Component } from 'react'
import Dashboard from "../../src/components/dashboard/Dashboard"
import GoBackButton from '../components/utils/GoBackButton'

class DashboardPage extends Component {
  render() {
    return (
      <div>
        <GoBackButton goTo="/" />
        <Dashboard />
      </div>
    )
  }
}

export default DashboardPage
