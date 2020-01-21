import React, { Component } from "react";
import { Card, Layout } from "antd";
import moment from 'moment'

// --------------------------------image-----------------------------------

import boneIcon from "../../../../images/boneicon2.png"
import boneEmptyIcon from "../../../../images/boneicon3.png";
import { dateFormat } from "../../../../utils";

export class StoreUserComment extends Component {
  state = {
    feedback: [
      {
        user: {
          firstname: "บอมเบย์",
          lastname: "ชอบหมา"
        },
        rating: 5,
        create_at: "12-01-2020",
        comment: "ชอบครับแชมพูน้องหอมชื่นใจ"
      },
      {
        user: {
          firstname: "บอมเบย์",
          lastname: "ชอบหมา"
        },
        rating: 3.5,
        create_at: "12-01-2020",
        comment: "ชอบครับแชมพูน้องหอมชื่นใจ"
      },
      {
        user: {
          firstname: "บอมเบย์",
          lastname: "ชอบหมา"
        },
        rating: 1,
        create_at: "12-01-2020",
        comment: "ชอบครับแชมพูน้องหอมชื่นใจ"
      }
    ]
  };

  // ------------------------------------handle-function--------------------------------------

  handleCommentCardFont = () => {
    const {
      rating,
      comment,
      fullname,
      createdAt
    } = this.props
    // console.log(rating,
    //   comment,
    //   fullname,
    //   createdAt);
    // return ""
    let boneRender = []
    for (let index = 0; index < 5; index++) {
      if (index < parseInt(rating)) {
        boneRender.push(true);
      } else {
        boneRender.push(false);
      }
    }
    return <Card>
      <h4 style={{ color: "#0F4C81" }}>
        {fullname}
      </h4>
      <h5 style={{ color: "#0F4C81" }}>{dateFormat(createdAt)}</h5>
      <p style={{ color: "#0F4C81" }}>{comment}</p>
      {boneRender.map((bone, index) => {
        return bone ? (
          <img
            src={boneIcon}
            key={index}
            style={{ width: "15px", height: "15px" }}
          />
        ) : (
            <img
              src={boneEmptyIcon}
              key={index}
              style={{ width: "15px", height: "15px" }}
            />
          );
      })}
    </Card>
  };

  render() {
    return (
      <Layout>
        {this.handleCommentCardFont()}
      </Layout>
    );
  }
}

export default StoreUserComment;
