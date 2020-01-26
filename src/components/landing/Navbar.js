import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Layout, Col, Row, Menu, Button, Dropdown } from 'antd';
import './Info.css'

import { ReactComponent as Logo } from '../../images/patpals_logo.svg'
import { actions as authAction } from '../../redux/reducers/auth'

const { Header } = Layout

class Navbar extends Component {

  state = {
    current: "about",
  };

  // getUserDetail = () => {
  //   const data = parseJwt(sessionStorage.getItem(TOKEN))
  //   console.log(data)
  //   this.setState({
  //     // user_id: data.id,
  //     username: data ? data.username : "",
  //     role: data ? data.role : "guest"
  //   })
  // }

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

  handleClickViewStore = () => {
    this.goto("/store_detail")
  }

  handleClickEditStore = () => {
    this.goto("/store_detail/edit")
  }

  handleClickSignin = () => {
    this.goto("/signin")
  }

  handleClickSignout = async () => {
    await this.props.signout()
    // await this.getUserDetail()
  }

  goto = (path = "/") => {
    this.props.history.push(path)
  }

  componentDidMount = () => {
    // this.getUserDetail()
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll);
  }

  // TODO: Responsive Header Tab
  render() {
    const {
      username,
      role
    } = this.props

    const userMenu = (
      <Menu style={{ minWidth: "200px" }}>
        <Menu.Item key="username" disabled>
          <span>{username}</span>
        </Menu.Item>
        <Menu.Item key="signout" onClick={this.handleClickSignout} style={{
          backgroundColor: "crimson",
          color: "white",
        }}>
          <span>ลงชื่อออก</span>
        </Menu.Item>
      </Menu>
    );

    const storeMenu = (
      <Menu style={{ minWidth: "200px" }}>
        <Menu.Item key="username" disabled>
          <span>{username}</span>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="store" onClick={this.handleClickViewStore}>
          <span>ดูร้านค้าของฉัน</span>
        </Menu.Item>
        <Menu.Item key="store_edit" onClick={this.handleClickEditStore}>
          <span>ตั้งค่าหน้าร้านค้าของฉัน</span>
        </Menu.Item>
        <Menu.Item key="signout" onClick={this.handleClickSignout} style={{
          backgroundColor: "crimson",
          color: "white",
        }}>
          <span>ลงชื่อออก</span>
        </Menu.Item>
      </Menu>
    );

    const guestMenu = (
      <Menu style={{ minWidth: "200px" }}>
        <Menu.Item key="signin" onClick={this.handleClickSignin}>
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
                  {username ?
                    <Dropdown
                      getPopupContainer={trigger => trigger.parentNode}
                      overlay={role === "store" ? storeMenu : userMenu}
                      placement="bottomRight"
                      trigger={['click']}
                    >
                      <Button type="primary" shape="circle" style={{ backgroundColor: '#e7e6e1', color: "#0F4C81" }}>
                        {username.slice(0, 3)}
                      </Button>
                    </Dropdown>
                    : <Dropdown
                      getPopupContainer={trigger => trigger.parentNode}
                      overlay={guestMenu}
                      placement="bottomRight"
                      trigger={['click']}
                    >
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

const mapStateToProps = ({ auth }) => ({
  username: auth.username,
  role: auth.role,
})

const mapDispatchToProps = {
  ...authAction
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Navbar))
