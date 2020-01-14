import React, { Component } from "react";
import { Layout, Card, Row, Col, Button } from "antd";

// --------------------------------image-----------------------------------

import boneIcon from "../boneicon2.png";
import boneEmptyIcon from "../boneicon3.png";

export class StoreUserComment extends Component {
  state = {
    boneRender: [],
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
    return this.state.feedback.map((f, fIndex) => {
        let boneRender = []
        for (let index = 0; index < 5; index++) {
            if (index < parseInt(f.rating)) {
                boneRender.push(true);
            } else {
                boneRender.push(false);
            }
        }
      return <div key={fIndex}>
        <h3>
          {f.user.firstname}&emsp;{f.user.lastname}
        </h3>
        <h4>{f.create_at}</h4>
        <p>{f.comment}</p>
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
      </div>
    });
  };

  render() {
    return (
      <>
        <Card>
          {this.handleCommentCardFont()} 
        </Card>
      </>
    );
  }
}

export default StoreUserComment;
