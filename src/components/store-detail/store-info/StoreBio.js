import React, { Component, Suspense } from "react";
import { Col, Row, Card, Typography, Button } from "antd";

const EditStoreBioDrawer = React.lazy(() => import('./store-bio/EditStoreBioDrawer'));

// ------------------------image------------------------------

export class StoreBio extends Component {
  state = {
    drawerEditVisible: false
  }

  handleOpenDrawer = () => {
    this.setState({ drawerEditVisible: true })
  }

  handleCloseDrawer = () => {
    this.setState({ drawerEditVisible: false })
  }

  handleClickSave = async (obj) => {
    console.log(obj);
    this.props.updateAPI(obj)
    this.handleCloseDrawer()
  }

  render() {
    const { drawerEditVisible } = this.state
    const { name, description, imageUrl, isEditable } = this.props;
    return (
      <>
        <Card
          style={{
            margin: "2em",
            cursor: "pointer",
            borderRadius: "12px"
          }}
        >
          <Row gutter={[8, 8]} type="flex" justify={"center"} align="middle">
            <Col span={18}>
              <Typography.Title style={{ color: "#0F4C81" }}>
                {name}
              </Typography.Title>
              <Typography.Paragraph style={{ color: "#0F4C81" }}>
                {description}
              </Typography.Paragraph>
            </Col>
            <Col span={6}>
              <img
                src={imageUrl}
                style={{ width: "100%", maxWidth: "7em", maxHeight: "7em", borderRadius: "50%" }}
                alt="store_image"
              />
            </Col>
          </Row>
          {isEditable ?
            <Button type="dashed" onClick={this.handleOpenDrawer}>แก้ไข</Button>
            : null
          }
          <Suspense fallback={<div>Loading...</div>}>
            <EditStoreBioDrawer
              visible={drawerEditVisible}
              handleCloseDrawer={this.handleCloseDrawer}
              handleClickSave={this.handleClickSave}
              store_name={name}
              store_description={description}
            />
          </Suspense>

        </Card>
      </>
    );
  }
}

StoreBio.defaultProps = {
  isEditable: false
};

export default StoreBio;
