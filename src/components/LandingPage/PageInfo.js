import React, { Component } from 'react';
import { Col, Row}  from 'antd';
import { Divider } from 'antd';
import { Layout } from 'antd';
//import CarouselSlider from

export class PageInfo extends Component {
    render() {
        
        return (
            <div>
                <Row type='flex' justify= 'center' style= {{ padding: '15px',  }}>
                    <span style= {{fontSize:'25px'}}>ค้นหาบริการสำหรับสัตว์เลี้ยงเเสนรักของคุณ</span>
                </Row>
                <Row type='flex' justify= 'center' style= {{}}>
                    <span style= {{fontSize:'25px'}}>ให้เราดูเเลสัตว์เลี้ยงตัวโปรดของคุณ</span>
                </Row>
                <Row type='flex' >
                    <Col span={8}>๔</Col>
                    <Col span={8}>๖sssssssssssssssssssssssssssssssssssssss</Col>
                <Col span={8}>๗ssssssssssssssssssssssssssssssssssssssssssssssss</Col>
                </Row>
                <Row type='flex' justify= 'center' style= {{ padding: '20px'}} >
                    <span>Hellow World!</span>
                </Row>
                <Row type='flex' justify= 'center'style= {{ padding: '15px'}} >
                    sdssdsdsdsdsdsdsdsdsdsdsdsdsdsdsdssdsd
                </Row>
                <Divider></Divider>
            </div>
        )
    }
}

export default PageInfo
