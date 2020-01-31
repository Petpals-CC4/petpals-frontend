import React, { Component } from 'react'
import { Table, Row, Col, Button, Layout, Tag } from 'antd'

import axios from '../utils/api.service'
import GoBackButton from '../components/utils/GoBackButton'

class StoreListPage extends Component {
  state = {
    adminStores: [],
  }

  componentDidMount = () => {
    this.getUser();
  }

  getUser = async () => {
    let result = await axios.get(`/admin_store`);
    console.log(result.data)
    this.setState({
      adminStores: result ? result.data : []
    })
  }

  swapStatus = (user_id) => async (e) => {
    console.log(user_id)
    let result = await axios.put(`/admin/update_status`, {
      user_id
    });
    console.log(result.data)
    this.getUser()
  }

  render() {
    const columns = [
      { title: 'ID', dataIndex: 'id', key: 'id' },
      { title: 'STORE_ID', dataIndex: 'store_id', key: 'store_id' },
      { title: 'ชื่อร้าน', dataIndex: 'store_name', key: 'store_name' },
      { title: 'รายละเอียดร้าน', dataIndex: 'store_description', key: 'store_description' },
      { title: 'อีเมล์', dataIndex: 'email', key: 'email' },
      {
        title: 'สถานะ',
        dataIndex: 'status',
        key: 'status',
        render: (text, object) => {
          let renderText = text ? text.toUpperCase() : ""
          return renderText === "ACTIVE" ?
            <Tag color="green">{renderText}</Tag>
            : renderText !== "" && <Tag color="volcano">{renderText}</Tag>
        }
      },
      {
        title: '',
        dataIndex: '',
        key: 'action',
        render: (_, object) => {
          return <Button onClick={this.swapStatus(object.id)}>
            {object.status === "active" ? "MAKE BAN" : "MAKE ACTIVE"}
          </Button>
        },
      },
    ];

    return (
      <Layout className="fullMinHeight">
        <GoBackButton goTo="/" />
        <div style={{ margin: "2em" }}>
          <Row type="flex" justify="center">
            <Col span={20} className="justifyEnd">
              <Button
                type="primary"
                onClick={this.props.handleClick}
              >
                เลือกดูรายชื่อผู้ใช้
              </Button>
            </Col>
          </Row>
          <Row type="flex" justify="center" >
            <Col span={20}>
              <Table
                rowKey={"id"}
                dataSource={this.state.adminStores}
                columns={columns}
                title={() => "รายชื่อร้านค้า"}
              >
              </Table>
            </Col>
          </Row>
        </div>
      </Layout>
    )
  }
}

export default StoreListPage
