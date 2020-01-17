import React, { Component } from 'react'
import { Layout, Icon, Divider } from 'antd'

class FooterZone extends Component {
  render() {
    return (
      <Layout.Footer style={{ textAlign: 'center' }}>
        Made with <span style={{ color: "#e25555" }}>&#9829;</span> by PetPals © 2020
        <Divider type="vertical" />
        Follow me on &nbsp;
        <a href="https://github.com/Petpals-CC4"><Icon type="github" /></a>
      </Layout.Footer>
    )
  }
}

export default FooterZone
