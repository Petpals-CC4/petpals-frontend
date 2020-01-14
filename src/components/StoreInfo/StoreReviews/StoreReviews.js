import React, { Component } from 'react'
import { Layout, Row, Col } from 'antd'

// ------------------------Icon------------------------------

import boneEmptyIcon from "../boneicon3.png";

// ---------------------Component--------------------------

import StoreUserComment from './StoreUserComment'

export class StoreReviews extends Component {
    render() {
        return (
           <Layout>
               <Row>
                   <Col>
                   <h1>รีวิว</h1>
                   </Col>
                   <Col>
                   <img src={boneEmptyIcon} style={{ width:'30px', height: '30px' }}/>
                   </Col>
               </Row>
               <Row>
                   <StoreUserComment/>
               </Row>
           </Layout>
        )
    }
}

export default StoreReviews
