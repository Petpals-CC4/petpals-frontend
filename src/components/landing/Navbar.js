import React, { Component } from 'react'
import { Layout, Avatar, Col, Row, Menu } from 'antd';
import './Info.css'

import { ReactComponent as Logo } from '../../images/patpals_logo.svg'

const { Header } = Layout

class Navbar extends Component {

  state = {
    current: 'about',
  };

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

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleClick = e => {
    // console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  // TODO: Responsive Header Tab
  render() {
    return (
      <Layout className="fixedNav">
        <Header style={{ background: "#0F4C81" }}>
          <Row type="flex" justify="space-between" align="middle">
            <Col>
              <Logo style={{ height: "48px", display: "flex" }} />
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
                  <Avatar icon='user' style={{ backgroundColor: '#e7e6e1', color: "#0F4C81" }} />
                </Col>
              </Row>
            </Col>
          </Row>
        </Header>
      </Layout>
    )
  }
}

export default Navbar
