import React, { Component } from 'react'
import { Form, Row, Col, Button, Input, Drawer, message } from 'antd';
import Axios from "../../utils/api.service";
import { withRouter } from "react-router-dom";

import AddStoreBio from './edit-store-bio/AddStoreBio'
import AdjustStoreBio from './edit-store-bio/AdjustStoreBio'

export class EditStoreBio extends Component {
    state = {
        StoreBio: [],
        drawerAddVisible: false
    }
    
    handleOpenDrawer = (drawer_name) => (e) => {
        this.setState({
            [drawer_name]: true
        });
    };
    
    handleCloseDrawer = (drawer_name) => (e) => {
        this.setState({
            [drawer_name]:false
        });
    };

    edditingBio = async (Obj) => {
        try {
            // { store_name: "", store_description: "" }
            let result = await Axios.put(`/store`, Obj)
            console.log(result.data);
            message.success('เเก้ไขสำเร็จ')
        } catch (err) {
            message.error("ไม่สามารถแก้ไขได้")
        }

        this.getBio();
        this.handleCloseDrawer("drawerAddVisible")()
    }
    
    getBio = async () => {
        let result = await Axios.get('/store')
        console.log(result.data);
        this.setState({
            StoreBio: result ? result.data : []
        });
    };
    
    componentDidMount = () => {
        this.getBio();
    };

    render() {
        const { StoreBio } = this.state;
        return (
            <div>
                <Row>
                 {StoreBio
                  ? StoreBio.map(StoreBio => (
                    <Col
                    key={StoreBio.id}
                    >
                    <AdjustStoreBio
                     bio_id={StoreBio.bio_id}
                     bio_storename={StoreBio.bio_storename}
                     bio_name={StoreBio.bio_name}
                     bio_detail={StoreBio.bio_detil}
                     bio_phone={StoreBio.bio_phone} />
                    </Col>
                       
                  )) 
                  : ""}
                 </Row>
                 <div 
                   className="text" 
                   style={{ textAlign: "center", paddingTop: "60px" }}>
                        ข้อมูลร้านค้า
                    <Button 
                        type="primary" 
                        style={{ left:"20px"}}
                        onClick={this.handleOpenDrawer("drawerAddVisible")}>
                        แก้ไข
                    </Button>
                  </div>
                  <AddStoreBio
                    visible={this.state.drawerAddVisible} 
                    handleCloseDrawer={this.handleCloseDrawer("drawerAddVisible")}
                    handleClickSave={this.getBio}/>
             </div>
        )
    }
}

export default withRouter(EditStoreBio)
