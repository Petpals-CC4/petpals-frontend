import React, { Component } from "react";
import { Layout, Row, Col, Card } from "antd";

// ------------------------Icon------------------------------

import boneEmptyIcon from "../../../images/boneicon3.png";

// ---------------------Component--------------------------

import StoreUserComment from "./store-review/StoreUserComment";

export class StoreReviews extends Component {
  render() {
    const {
      feedback_score,
      feedbacks
    } = this.props

    // console.log(feedbacks);

    return (
      <Layout style={{ marginBottom: "24px" }}>
        <Card>
          <Row
            gutter={[8, 8]}
            type="flex"
            justify="space-around"
            align="middle"
          >
            <Col span={2} type="flex" justify="start">
              <h1 style={{ color: "#0F4C81" }} >รีวิว</h1>
            </Col>
            <Col span={2} offset={6} type="flex" justify="end">
              <img
                src={boneEmptyIcon}
                style={{ width: "30px", height: "30px" }}
                alt="empty_bone"
              />
              <h3 style={{ color: "#0F4C81" }}> {feedback_score ? feedback_score.toFixed(2) : "0.0"} </h3>
            </Col>
          </Row>
        </Card>
        {feedbacks ? feedbacks.map((feedback) => (
          <Row key={feedback.id}>
            <StoreUserComment
              rating={feedback.rating}
              comment={feedback.comment}
              fullname={feedback.fullname}
              createdAt={feedback.createdAt}
            />
          </Row>
        )) : ""
        }
      </Layout>
    );
  }
}

export default StoreReviews;
