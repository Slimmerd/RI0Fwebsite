import React from 'react';
import { Menu, Grid } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


const { useBreakpoint } = Grid;

const LeftMenu = () => {
    const { md } = useBreakpoint();
    return (
        <Menu mode={md ? "horizontal" : "inline"}>
            <Menu.Item key="RU">
                <a href="">RU</a>
            </Menu.Item>
            <Menu.Item key="EN">
                <a href="">EN</a>
            </Menu.Item>
        </Menu>
    );
}

export default LeftMenu;