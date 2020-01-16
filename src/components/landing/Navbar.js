import React, { Component } from 'react'
import { Layout, Avatar, Col, Row, Menu } from 'antd';
import './Info.css'

const { Header } = Layout

class Navbar extends Component {

  state = {
    current: 'about',
  };

  handleClick = e => {
    // console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  // TODO: Responsive Header Tab
  render() {
    return (
      <Layout>
        <Header style={{ background: "#0F4C81" }}>
          <Row type="flex" justify="space-between" align="middle">
            <Col>
              <Avatar icon='user' />
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
                    <Menu.Item key="about">เกี่ยวกับเรา</Menu.Item>
                    <Menu.Item key="search">ค้นหา</Menu.Item>
                    <Menu.Item key="care">ร้านรับฝากของเรา</Menu.Item>
                  </Menu>
                </Col>
                <Col>
                  <Avatar icon='user' />
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
