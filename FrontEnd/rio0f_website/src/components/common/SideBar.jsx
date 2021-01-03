import React, {useEffect, useState} from 'react'
import {Button, Divider, Drawer} from "antd";
import {MenuOutlined} from "@ant-design/icons";
import RightMenu from "../Header/menus/RightMenu";
import LeftMenu from "../Header/menus/LeftMenu";
import {useLocation} from "react-router-dom";

const SideBar = () => {
    let [mobileNavbar, setMobileNavbar] = useState(false)

    const showDrawer = () => {
        setMobileNavbar(true)
    };
    const onClose = () => {
        setMobileNavbar(false)
    };

    const { pathname } = useLocation();
    useEffect(() => {
        setMobileNavbar(false)
    }, [pathname]);



    return (
        <div>
            <Button className={'barsMenu'} icon={<MenuOutlined style={{color: '#FFF'}}/>} type="primary" onClick={showDrawer}>

            </Button>

            <Drawer
                placement="right"
                closable={false}
                onClose={onClose}
                visible={mobileNavbar}
                headerStyle={{ background: '#2C3E50'}}
                bodyStyle={{background: '#2C3E50'}}
            >
                <RightMenu/>
                <Divider style={{background:'hsl(0, 0%, 90%)'}}/>
                <LeftMenu/>
            </Drawer>
        </div>
    );
};

export default SideBar;
