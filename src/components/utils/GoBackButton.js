import React from 'react';
import { withRouter } from 'react-router-dom';
import { Button } from 'antd'

const GoBackButton = ({ history }) => <div className="goBackButton">
  <Button
    type="primary"
    shape="circle"
    icon="arrow-left"
    size="large"
    onClick={() => history.goBack()}
  />
</div>

export default withRouter(GoBackButton);