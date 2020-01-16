import React, { Component } from 'react'
import { Layout, Avatar, Col, Row, Menu } from 'antd';
import PageInfo from './PageInfo'
import { Anchor } from 'antd'
import SearchResult from './SearchZone/SearchResult'
import SearchInput from './SearchZone/SearchInput'
import './Info.css'


const { Header, Footer, Sider, Content } = Layout

export class Navbar extends Component {

    state = {
        current: 'about',
    };

    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };

    render() {


        return (
            <div>
             
                    <Header style={{
                        display: "flex",
                        flexDirection: "row",
                        width: "100vw",
                        background: "#41DAF0"

                    }}>

                        <div>
                            <Avatar icon='user' />
                        </div>
                        <div style={{ minWidth: "10px", maxWidth: "1000px", width: "1000px" }}></div>
                        {/* <div style={{width:"100px",minWidth:"70px"}}>about</div>
                            <div style={{width:"100px",minWidth:"70px"}}>search</div>
                            <div style={{width:"100px",minWidth:"70px"}}>care</div>
                            <div style={{width:"100px",minWidth:"70px"}}>icon</div> */}
                        <Menu onClick={this.handleClick} 
                        selectedKeys={[this.state.current]} 
                        mode="horizontal" 
                        style={{ 
                            backgroundColor: "#41DAF0", 
                            color: "white"
                            }}
                            className = 'nav'>
                        <Menu.Item key="about">About</Menu.Item>
                        <Menu.Item key="search">Search</Menu.Item>
                        <Menu.Item key="care">Care</Menu.Item>
                        <Menu.Item key="icon">
                            <Avatar icon='user' />
                        </Menu.Item>
                        </Menu>
                   </Header>
          
            <PageInfo />
            <SearchInput />
            <SearchResult />
            </div >
        )
    }
}

export default Navbar
