import React, { Component } from "react";
import { Row, Col, Typography } from "antd";

// ------------------------Icon------------------------------

import boneEmptyIcon from "../../../images/boneicon3.png";

// ---------------------Component--------------------------

import StoreUserComment from "./store-review/StoreUserComment";

export class StoreReviews extends Component {
  render() {
    const { feedback_score, feedbacks } = this.props;

    // console.log(feedbacks);

    return (
      <>
        <Row
          gutter={[16, 16]}
          type="flex"
          justify="center"
          align="middle"
          style={{ marginTop: "20px" }}
        >
          <Col>
            <Typography.Title style={{ margin: 0 }}>
              รีวิว
            </Typography.Title>
          </Col>
          <Col className="justifyCenter">
            <div>
              <img
                src={boneEmptyIcon}
                style={{ width: "1.4em", height: "1.4em" }}
                alt="empty_bone"
              />
            </div>
            <div>
              <span style={{ color: "#0F4C81", fontSize: "1.4em", paddingLeft: "4px" }}>
                {feedback_score ? feedback_score.toFixed(2) : "0.0"}
              </span>
            </div>
          </Col>
        </Row>

        {feedbacks
          ? feedbacks.map(feedback => (
            <Row key={feedback.id} gutter={[8, 8]}>
              <Col span={24}>
                <StoreUserComment
                  rating={feedback.rating}
                  comment={feedback.comment}
                  fullname={feedback.fullname}
                  createdAt={feedback.createdAt}
                />
              </Col>
            </Row>
          ))
          : ""}
      </>
    );
  }
}

export default StoreReviews;
