import React from 'react';
import { withRouter } from 'react-router-dom';
import { Button } from 'antd'

const GoBackButton = ({ history, goTo }) => <div className="goBackButton">
  <Button
    type="primary"
    shape="circle"
    icon="arrow-left"
    size="large"
    onClick={() => goTo ? history.push(goTo) : history.goBack()}
  />
</div>

export default withRouter(GoBackButton);