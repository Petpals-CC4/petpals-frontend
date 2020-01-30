import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Axios from "../../utils/api.service";

import { Button, Row, Col, Typography, message } from "antd";

import CardGuideText from "./AdminGuideText/CardGuideText";
import AddGuideText from "./AdminGuideText/AddGuideText";

class AdminGuideText extends Component {
  state = {
    guideTextLists: [],
    drawerAddVisible: false
  };

  handleOpenDrawer = drawer_name => e => {
    this.setState({
      [drawer_name]: true
    });
  };

  handleCloseDrawer = drawer_name => e => {
    this.setState({
      [drawer_name]: false
    });
  };

  createGuideText = async obj => {
    try {
      let result = await Axios.post(`/admin/guide_text`, obj);
      console.log(result.data);
      message.success("เพิ่มรายการสำเร็จ");
    } catch (error) {
      message.error("ไม่สามารถเพิ่มรายการได้");
    }

    this.getGuideText();
    this.handleCloseDrawer("drawerAddVisible")();
  };

  getGuideText = async () => {
    let result = await Axios.get(`/admin/guide_text`);
    console.log(result.data);
    this.setState({
      guideTextLists: result ? result.data : []
    });
  };

  componentDidMount = () => {
    this.getGuideText();
  };

  render() {
    const { guideTextLists } = this.state;
    return (
      <div style={{ margin: "2em" }}>
        <Typography.Title
          level={3}
          style={{
            color: "#0F4C81",
            textAlign: "center"
          }}
        >
          รายการคำค้นหา
        </Typography.Title>
        <Button
          block
          type="primary"
          onClick={this.handleOpenDrawer("drawerAddVisible")}
          style={{ margin: "1em 0px" }}
        >
          เพิ่มคำค้นหา
        </Button>

        <Row type="flex" gutter={[16, 16]}>
          {guideTextLists
            ? guideTextLists.map((guideText) => (
                <Col key={guideText.id} xs={12} sm={8} md={4}>
                  <CardGuideText
                    guideText_id={guideText.id}
                    name={guideText.name}
                    refreshGuideText={this.getGuideText}
                  />
                </Col>
              ))
            : ""}
        </Row>

        <AddGuideText
          visible={this.state.drawerAddVisible}
          handleCloseDrawer={this.handleCloseDrawer("drawerAddVisible")}
          handleClickSave={this.createGuideText}
        />
      </div>
    );
  }
}

export default withRouter(AdminGuideText);
