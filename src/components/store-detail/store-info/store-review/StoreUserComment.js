import React, { Component } from "react";
import { Card, Row, Col, Typography } from "antd";

// --------------------------------image-----------------------------------

import boneIcon from "../../../../images/boneicon2.png";
import boneEmptyIcon from "../../../../images/boneicon3.png";
import { datetimeFormat } from "../../../../utils";

export class StoreUserComment extends Component {
  handleCommentCardFont = () => {
    const { rating, comment, fullname, createdAt } = this.props;
    let boneRender = [];
    for (let index = 0; index < 5; index++) {
      if (index < parseInt(rating)) {
        boneRender.push(true);
      } else {
        boneRender.push(false);
      }
    }
    return (
      <Card style={{ margin: "16px 0px", cursor: "pointer" }}>
        <Typography.Title level={4} ellipsis={{ rows: 1 }} style={{ margin: 0 }}>
          <strong>{fullname}</strong>
        </Typography.Title>

        <h5 style={{ color: "#0F4C81" }}>{datetimeFormat(createdAt)}</h5>
        <p>{comment}</p>
        {boneRender.map((bone, index) => {
          return bone ? (
            <img
              src={boneIcon}
              key={index}
              style={{ width: "15px", height: "15px" }}
              alt="bone"
            />
          ) : (
              <img
                src={boneEmptyIcon}
                key={index}
                style={{ width: "15px", height: "15px" }}
                alt="empty_bone"
              />
            );
        })}
      </Card>
    );
  };

  render() {
    return (
      <Row gutter={[8, 8]}>
        <Col span={24}>{this.handleCommentCardFont()}</Col>
      </Row>
    );
  }
}

export default StoreUserComment;
