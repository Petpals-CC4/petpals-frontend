import React, { Component } from 'react'
import { Form, Row, Col, Button, Input, Drawer, message } from 'antd';
import Axios from "../../utils/api.service";
import { withRouter } from "react-router-dom";

import AddStoreBio from './edit-store-bio/AddStoreBio'
import AdjustStoreBio from './edit-store-bio/AdjustStoreBio'

export class EditStoreBio extends Component {
    state = {
        StoreBio: {},
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

    editBio = async (Obj) => {
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
        let result = await Axios.get('/store_bio')
        console.log(result.data);
        this.setState({
            StoreBio: result ? result.data : {}
        });
    };
    
    componentDidMount = () => {
        this.getBio();
    };

    render() {
        const { StoreBio } = this.state;
        const {
            bio_storename,
            bio_description
        } = this.props
        return (
            <div>
                <div 
                   className="text" 
                   style={{
                    color: "#0F4C81",
                    textAlign: "center",
                    paddingTop: "30px",
                    paddingBottom: '10px'
                  }}>
                        ข้อมูลร้านค้า
                  </div>
                  <Button
                    block 
                    type="primary" 
                    style={{ left:"20px"}}
                    onClick={this.handleOpenDrawer("drawerAddVisible")}>
                    แก้ไข
                </Button>  
                  <AddStoreBio
                    visible={this.state.drawerAddVisible} 
                    StoreBio={
                        bio_storename,
                        bio_description
                    }
                    handleCloseDrawer={this.handleCloseDrawer("drawerAddVisible")}
                    handleClickSave={this.editBio}/>
                <Row>
                    <Col>
                     <AdjustStoreBio
                      bio_storename={StoreBio.store_name}
                      bio_description={StoreBio.store_description}
                      bio_store_images={StoreBio.profile_image_url}
                     />
                    </Col>
                </Row>
             </div>
        )
    }
}

export default withRouter(EditStoreBio)
