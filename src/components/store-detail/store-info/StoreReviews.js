import React, { Component } from "react";
import {Row, Col, Typography} from "antd";

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
          style={{marginTop: "20px" }}
        >
          <Col>
            <Typography.Title
              ellipsis={{ rows: 1 }}
              style={{ margin: 0 }}
            >
              <h2>รีวิว</h2>
            </Typography.Title>
          </Col>
          <Col>
            <img
              src={boneEmptyIcon}
              style={{ width: "20px", height: "20px" }}
              alt="empty_bone"
            />
            <h3 style={{ color: "#0F4C81" }}>
              {feedback_score ? feedback_score.toFixed(2) : "0.0"}
            </h3>
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
