import React, { Component } from 'react'
import { Row, Col, Button, Table, Form } from 'antd';

import axios from '../utils/api.service'
import { withRouter } from 'react-router-dom';

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
      { title: 'ID', dataIndex: 'store_id', key: 'id' },
      { title: 'Store Name', dataIndex: 'store_name', key: 'storename' },
      { title: 'Store Description', dataIndex: 'store_description', key: 'storedescription' },
      { title: 'Status', dataIndex: 'status', key: 'status' },
      {
        title: 'Action',
        dataIndex: '',
        key: 'x',
        render: (_, object) => {
          return <Button onClick={this.swapStatus(object.id)}>
            {object.status === "active" ? "MAKE BAN" : "MAKE ACTIVE"}
          </Button>
        }
      },
    ];

    return (
      <Form >
        <div style={{ marginBottom: "2em" }}>
          <Row type='flex' justify='start' >
            <Col span={20}>
              <Button type="default" htmlType="submit" onClick={this.props.handleClick} >
                <h3>User List </h3>
              </Button>
            </Col>
          </Row>
        </div>

        <Row type='flex' justify='center'>
          <Col span={20}>
            <Table 
            dataSource={this.state.adminStores}
              columns={columns}
              bordered
              title={() => 'Store List'}
            >
            </Table>
          </Col>
        </Row>
      </Form>
    )
  }
}

export default Form.create({ name: "Sotrelistpage_form" })(withRouter(StoreListPage))
