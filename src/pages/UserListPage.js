import React, { Component } from 'react'
import { Table, Row, Col, Button, Layout, Tag } from 'antd'

import axios from '../utils/api.service'
import GoBackButton from '../components/utils/GoBackButton'

class UserListPage extends Component {
  state = {
    adminUsers: [],
  }

  componentDidMount = () => {
    this.getUser();
  }

  getUser = async () => {
    let result = await axios.get(`/admin_user`);
    console.log(result.data)
    this.setState({
      adminUsers: result ? result.data : []
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
      { title: 'ชื่อจริง', dataIndex: 'firstname', key: 'firstname' },
      { title: 'นามสกุล', dataIndex: 'lastname', key: 'lastname' },
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
                เลือกดูรายชื่อร้านค้า
              </Button>
            </Col>
          </Row>
          <Row type="flex" justify="center" >
            <Col span={20}>
              <Table
                rowKey={"id"}
                dataSource={this.state.adminUsers}
                columns={columns}
                title={() => "รายชื่อผู้ใช้"}
              >
              </Table>
            </Col>
          </Row>
        </div>
      </Layout>
    )
  }
}

export default UserListPage
