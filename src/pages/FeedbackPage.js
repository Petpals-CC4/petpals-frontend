import React, { Component } from 'react'

import Feedback from '../components/feedback'
import GoBackButton from '../components/utils/GoBackButton'

export class FeedbackPage extends Component {
  render() {
    return (
      <>
        <GoBackButton />
        <Feedback />
      </>
    )
  }
}

export default FeedbackPage