import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Row, Col } from 'antd'

import { TOKEN } from '../utils/constants'
import { actions as authAction } from '../redux/reducers/auth'
import Signin from '../components/auth/Signin'
import Signup from '../components/auth/Signup'

class AuthPage extends Component {
  state = {
    mode: "signin"
  }

  changeToMode = (mode) => () => {
    this.setState({ mode })
  }

  componentDidMount = () => {
    if (this.props.history.location.pathname === "/signin" || this.props.history.location.pathname === "/signup") {
      this.setState({mode: this.props.history.location.pathname.substr(1, this.props.history.location.pathname.length)})
    }
    const token = sessionStorage.getItem(TOKEN);
    if (!token) {
      this.props.setRole("guest")
    }
  }

  render() {
    return (
      <Row type="flex" justify="center" align="middle">
        <Col xs={20} md={12} className="justifyCenter fullMinHeight">
          {this.state.mode === "signin" ? <Signin onChangeMode={this.changeToMode} /> : <Signup onChangeMode={this.changeToMode} />}
        </Col>
      </Row>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  ...authAction
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthPage)
