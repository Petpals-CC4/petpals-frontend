import React, { Component } from 'react';
import { Col, Row}  from 'antd';
import { Divider } from 'antd';
import { Layout } from 'antd';
import CarouselSlider from './CarouselSlider'
import './Info.css'


export class PageInfo extends Component {
    
    

    render() {
    
        return (
            <div>
                <Row type='flex' justify= 'center' style= {{padding: '10px'}}>
                    <span  className ="text">ค้นหาบริการที่ดีที่สุดเพื่อเพื่อนเเสนรักของคุณ</span>
                   
                </Row>

                <Row type='flex' justify= 'center' style= {{padding: '3px'}}>
                <span className ='text'>จากผู้ให้บริการมืออาชีพ</span>
                </Row>
                
                <CarouselSlider justify= 'center' />
                <Row type='flex' justify= 'center' style = {{padding: '15px', fontsize:'20px'}}>
                    <span className ='text'>เสียงตอบรับจากลูกค้าของเรา</span>
                </Row>
                <Row type='flex' justify= 'center' style ={{padding: '4px'}}>
                    <span className ='point'>ร้าน Groom your pals</span>
                </Row>
                <Row type='flex' justify= 'center'>
                    <span className = 'aodeatil'>กรุงเทพ เขตบางรัก</span>
                </Row>
                <Row type='flex' justify= 'center'>
                    <span className = 'moc'>บริการตัดขนของร้าน สะอาด เรียบร้อย แฮปปี้ มากๆ :></span>
                </Row>
                <Row type='flex' justify= 'center'>
                    <span className ='aodeatil' style= {{padding: '8px'}}>- Sudarat Chinchange</span>
                </Row>
                <Divider></Divider>
                <Row type='flex' justify= 'center' style ={{padding: '4px'}}>
                    <span className ='point'>ร้าน Groom your pals</span>
                </Row>
                <Row type='flex' justify= 'center'>
                    <span className ='aodeatil'>กรุงเทพ เขตบางรัก</span>
                </Row>
                <Row type='flex' justify= 'center'>
                    <span className ='moc'>บริการตัดขนของร้าน สะอาด เรียบร้อย แฮปปี้ มากๆ :></span>
                </Row>
                <Row type='flex' justify= 'center'>
                    <span className = 'aodeatil' style= {{padding: '8px'}}>- Sudarat Chinchange</span>
                    <Divider></Divider>
                </Row>
                {/* <Divider></Divider>
                <Row type='flex' justify= 'center'>
                    <span>ร้าน Groom your pals</span>
                </Row>
                <Row type='flex' justify= 'center'>
                    <span>กรุงเทพ เขตบางรัก</span>
                </Row>
                <Row type='flex' justify= 'center'>
                    <span>บริการตัดขนของร้าน สะอาด เรียบร้อย แฮปปี้ มากๆ :></span>
                </Row>
                <Row type='flex' justify= 'center'>
                    <span style= {{padding: '8px'}}>- Sudarat Chinchange</span>
                </Row> */}
                <Row type='flex' justify= 'center' className ="text">ค้นหาเลย</Row>
               
            </div>
        )
    }
}

export default PageInfo
