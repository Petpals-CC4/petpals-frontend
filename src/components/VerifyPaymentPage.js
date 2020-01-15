import React, { Component } from 'react'
import { Layout, Row, Col, Upload, Icon, Card, Form, Select, Button } from 'antd'

const { Option } = Select


function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

export class VerifyPaymentPage extends Component {
  state = {
    data: {
      verifiedSlip: "",
      bank: ""
    },
    loading: false,
  }


  handleChange = info => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      getBase64(info.file.originFileObj, imageUrl =>
        this.setState({
          imageUrl,
          loading: false,
        }),
      );
    }
  };


  render() {
    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? 'loading' : 'plus'} />
        <div className="uploadslip">Upload</div>
      </div>
    )

    const { imageUrl } = this.state;
    return (
      <Layout>
        <Card style={{ display: "block", margin: '25px 125px 25px 125px' }}>
          <Row>
            <Col>
              <Upload onChange={this.handleChange} >
                {this.state.data.verifiedSlip}
                {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
              </Upload>
            </Col>
          </Row>
        </Card>
        <Row>

        </Row>
      </Layout>
    )
  }
}

export default VerifyPaymentPage
