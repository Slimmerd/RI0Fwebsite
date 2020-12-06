import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import {Drawer, Button, Menu, Row, Col, Divider} from 'antd';
import {MenuOutlined} from '@ant-design/icons'
import RightMenu from "./menus/RightMenu";
import LeftMenu from "./menus/LeftMenu";

import { useLocation, useRouteMatch } from 'react-router-dom';
const Header = (props) => {

    let [mobileNavbar, setMobileNavbar] = useState(false)

    const showDrawer = () => {
        setMobileNavbar(true)
    };
    const onClose = () => {
        setMobileNavbar(false)
    };

    return (
        <div className={'menuBar'}>
            <Row className={'menuCon'}>
                <Col xs={3} sm={3} md={3} lg={3} xl={4}>
                    <div className={'logo'}>
                        <NavLink exact to="/">RIØF</NavLink>
                    </div>
                </Col>

                <Col xs={3} sm={3} md={3} lg={3} xl={4}>
                    <div className={'leftMenu'}>
                        <LeftMenu/>
                    </div>
                </Col>

                <Col xs={18} sm={18} md={18} lg={18} xl={16}>
                    <div className={'rightMenu'}>
                        <RightMenu/>
                    </div>
                    <Button className={'barsMenu'} icon={<MenuOutlined style={{color: '#1DA57A'}}/>} type="primary" onClick={showDrawer}>
                        {/*<span className={'barsBtn'}></span>*/}
                    </Button>

                    <Drawer
                        title="Basic Drawer"
                        placement="right"
                        closable={false}
                        onClose={onClose}
                        visible={mobileNavbar}
                    >
                        <RightMenu/>
                        <Divider/>
                        <LeftMenu/>
                    </Drawer>
                </Col>
            </Row>
        </div>

    );
};

export default Header;