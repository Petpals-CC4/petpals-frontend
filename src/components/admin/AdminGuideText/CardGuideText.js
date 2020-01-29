import React, { Component } from "react";
import {
  Button,
  Card,
  Modal,
  message,
  Typography,
  Row,
  Col,
} from "antd";

import EditGuideText from "./EditGuideText";
import Axios from "../../../utils/api.service";

const { confirm } = Modal;

class CardGuideText extends Component {
  state = {
    drawerVisible: false,
    drawerEditVisible: false
  };

  showUpdateConfirm = obj => {
    const me = this;
    confirm({
      title: "คุณยืนยันจะแก้ไขคำค้นหานี้ใช่หรือไม่?",
      okText: "ยืนยัน",
      okType: "success",
      cancelText: "ยกเลิก",
      onOk() {
        me.updateGuideText(obj);
      },
      onCancel() {
        console.log("Cancel");
      }
    });
  };

  updateGuideText = async obj => {
    console.log(obj);
    try {
      let result = await Axios.put(`/admin/guide_text/${obj.guideText_id}`, obj);
      console.log(result.data);
      message.success("แก้ไขรายการสำเร็จ");
    } catch (error) {
      message.error("ไม่สามารถแก้ไขรายการได้");
    }

    this.props.refreshGuideText();
    this.handleClickClose("drawerEditVisible")();
  };

  showDeleteConfirm = id => () => {
    const me = this;
    confirm({
      title: "คุณยืนยันจะลบคำค้นหานี้ใช่หรือไม่?",
      okText: "ใช่ ฉันจะลบ",
      okType: "danger",
      cancelText: "ยกเลิก",
      onOk() {
        me.deleteGuideText(id);
      },
      onCancel() {
        console.log("Cancel");
      }
    });
  };

  deleteGuideText = async id => {
    try {
      let result = await Axios.delete(`/admin/guide_text/${id}`);
      console.log(result.data);
      message.success("ลบรายการสำเร็จ");
    } catch (error) {
      message.error("ไม่สามารถลบรายการได้");
    }
    this.props.refreshGuideText();
  };

  handleClick = drawer_name => e => {
    this.setState({
      [drawer_name]: true
    });
  };
  handleClickClose = drawer_name => e => {
    this.setState({
      [drawer_name]: false
    });
  };

  render() {
    const { guideText_id, name, refreshGuideText } = this.props;
    return (
      <Card
        key={guideText_id}
        hoverable
        style={{
          width: "100%",
          borderRadius: "12px",
          height: "100%"
        }}
        bodyStyle={{
          height: "100%"
        }}
      >
        <Row>
          <Col>
            <Row type="flex" justify="space-between">
              <Col span={24}>
                <Typography.Paragraph className="textCenter">
                  {name}
                </Typography.Paragraph>
              </Col>
            </Row>
          </Col>

          <Col span={24}>
            <Button.Group style={{ display: "flex" }}>
              <Button
                type="dashed"
                style={{ flex: 1 }}
                onClick={this.handleClick("drawerEditVisible")}
              >
                แก้ไข
              </Button>
              <Button
                type="danger"
                icon="delete"
                ghost
                onClick={this.showDeleteConfirm(guideText_id)}
              />
            </Button.Group>
          </Col>
        </Row>

        <EditGuideText
          visible={this.state.drawerEditVisible}
          guideTextDetail={{
            guideText_id,
            name,
            refreshGuideText
          }}
          handleCloseDrawer={this.handleClickClose("drawerEditVisible")}
          handleClickSave={this.showUpdateConfirm}
        />
      </Card>
    );
  }
}

export default CardGuideText;
