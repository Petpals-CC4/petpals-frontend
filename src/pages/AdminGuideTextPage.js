import React, { Component } from 'react'
import GoBackButton from '../components/utils/GoBackButton'
import AdminGuideText from '../components/admin/AdminGuideText'

class AdminGuideTextPage extends Component {
  render() {
    return (
      <div>
        <GoBackButton />
        <AdminGuideText />
      </div>
    )
  }
}

export default AdminGuideTextPage
