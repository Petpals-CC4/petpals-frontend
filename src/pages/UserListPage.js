import React, { Component } from 'react'
import { Table, Row, Col, Button, Form } from 'antd'

import axios from '../utils/api.service'
import { withRouter } from 'react-router-dom';

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
      { title: 'First Name', dataIndex: 'firstname', key: 'firstname' },
      { title: 'Last Name', dataIndex: 'lastname', key: 'lastname' },
      { title: 'Email', dataIndex: 'email', key: 'email' },
      { title: 'Status', dataIndex: 'status', key: 'status' },
      {
        title: 'Action',
        dataIndex: '',
        key: 'x',
        render: (_, object) => {
          return <Button onClick={this.swapStatus(object.id)}>
            {object.status === "active" ? "MAKE BAN" : "MAKE ACTIVE"}
          </Button>
        },
      },
    ];

    return (
        <Form onSubmit={this.handleSubmit}>
          <div style={{ marginBottom: "2em" }}>
            <Row type='flex' justify='start' >
              <Col span={20}>
                <Button type="default" htmlType="submit" onClick={this.props.handleClick} >
                  <h3>Store List </h3>
                </Button>
              </Col>
            </Row>
          </div>

          <Row type='flex' justify='center' >
            <Col span={20}>
              <Table
                dataSource={this.state.adminUsers}
                columns={columns}
                bordered
                title={() => 'User List'}
              >
              </Table>
            </Col>
          </Row>
        </Form>
    )
  }
}

export default Form.create({ name: "Userlistpage_form" })(withRouter(UserListPage))
