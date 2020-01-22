import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Layout, Col, Row, Menu, Button, Dropdown } from 'antd';
import './Info.css'

import { ReactComponent as Logo } from '../../images/patpals_logo.svg'
import { TOKEN } from '../../utils/constants'
import { parseJwt } from '../../utils';

import { actions as authAction } from '../../redux/reducers/auth'
import { withRouter, Link } from 'react-router-dom';

const { Header } = Layout

class Navbar extends Component {

  state = {
    current: 'about',
    username: ""
  };

  getUserDetail = () => {
    const data = parseJwt(sessionStorage.getItem(TOKEN))
    console.log(data)
    this.setState({
      // user_id: data.id,
      username: data ? data.username : "",
      // role: data.role
    })
  }

  getActiveID = () => {
    let listMenu = [
      "about",
      "feedback",
      "search"
    ]
    for (let index = 0; index < listMenu.length; index++) {
      const menu = listMenu[index];
      let menuHtml = document.getElementById(menu)
      let yPosMenu = menuHtml.getBoundingClientRect().y
      if (yPosMenu >= 0) {
        return menu
      }
    }
  }

  handleScroll = () => {
    let nowActive = this.getActiveID()
    this.setState({
      current: nowActive
    })
  }
  
  handleClick = e => {
    // console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };
  
  handleClickSignin = () => {
    this.props.history.push("/signin")
  }
  
  handleClickSignout = async () => {
    await this.props.signout()
    await this.getUserDetail()
  }
  
  componentDidMount = () => {
    this.getUserDetail()
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll);
  }

  // TODO: Responsive Header Tab
  render() {
    const {
      username
    } = this.state

    const userMenu = (
      <Menu style={{minWidth: "200px"}}>
        <Menu.Item disabled>
          <span>{username}</span>
        </Menu.Item>
        <Menu.Item onClick={this.handleClickSignout} style={{
          backgroundColor: "crimson",
          color: "white",
        }}>
          <span>ลงชื่อออก</span>
        </Menu.Item>
      </Menu>
    );
    
    const guestMenu = (
      <Menu>
        <Menu.Item onClick={this.handleClickSignin}>
          <span>ลงชื่อเข้าใช้</span>
        </Menu.Item>
      </Menu>
    );

    return (
      <Layout className="fixedNav">
        <Header style={{ background: "#0F4C81" }}>
          <Row type="flex" justify="space-between" align="middle">
            <Col>
              <Link to="/">
                <Logo style={{ height: "48px", display: "flex" }} />
              </Link>
            </Col>
            <Col>
              <Row type="flex" align="middle" gutter={16}>
                <Col>
                  <Menu
                    onClick={this.handleClick}
                    selectedKeys={[this.state.current]}
                    mode="horizontal"
                    style={{
                      borderBottom: "0px",
                      backgroundColor: "#0F4C81",
                      color: "white",
                    }}>
                    <Menu.Item key="about"><a href="#about">เกี่ยวกับเรา</a></Menu.Item>
                    <Menu.Item key="feedback"><a href="#feedback">รีวิว</a></Menu.Item>
                    <Menu.Item key="search"><a href="#search">ค้นหา</a></Menu.Item>
                  </Menu>
                </Col>
                <Col>
                  {username !== "" ?
                    <Dropdown overlay={userMenu} placement="bottomRight">
                      <Button type="primary" shape="circle" style={{ backgroundColor: '#e7e6e1', color: "#0F4C81" }}>
                        {username.slice(0, 3)}
                      </Button>
                    </Dropdown>
                    : <Dropdown overlay={guestMenu} placement="bottomRight">
                      <Button type="primary" shape="circle" icon="user" style={{ backgroundColor: '#e7e6e1', color: "#0F4C81" }} />
                    </Dropdown>
                  }
                </Col>
              </Row>
            </Col>
          </Row>
        </Header>
      </Layout>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  ...authAction
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Navbar))
