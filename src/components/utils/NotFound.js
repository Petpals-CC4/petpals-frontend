import React, { Component } from 'react'
import { Result, Button } from 'antd'

export class NotFound extends Component {
  goHomeee = (e) => {
    this.props.history.push('/')
  }

  render() {
    return (
      <Result
        className="not-found-page"
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button type="primary" onClick={this.goHomeee}>
            Back Home
          </Button>}
      />
    )
  }
}

export default NotFound
