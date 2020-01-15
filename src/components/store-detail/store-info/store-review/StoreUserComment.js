import React, { Component } from "react";
import {Card, Layout} from "antd";

// --------------------------------image-----------------------------------

import boneIcon from "../../../../images/boneicon2.png"
import boneEmptyIcon from "../../../../images/boneicon3.png";

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
      return <Card key={fIndex}>
        <h4 style={{color:"#1DE1EE"}}>
          {f.user.firstname}&emsp;{f.user.lastname}
        </h4>
        <h5 style={{color:"#1DE1EE"}}>{f.create_at}</h5>
        <p style={{color:"#1DE1EE"}}>{f.comment}</p>
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
    });
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
