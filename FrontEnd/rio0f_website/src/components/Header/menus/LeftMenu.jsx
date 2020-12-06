import React from 'react';
import { Menu, Grid } from 'antd';
import styled from "styled-components";
import {NavLink} from "react-router-dom";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const Super = styled.div`
    .ant-menu-item-selected{
  border-bottom: 2px solid white !important;
  color: #2C3E50 !important;
  
  &:hover{
  border-bottom: 2px solid transparent !important;
  }
  }
    
  .ant-menu-item{
   border-radius: 10px;
   border-bottom: 2px solid transparent;
 
  &:hover{
  background: #2C3E50;
  border-bottom: 2px solid white !important;
  }
  a:hover{  color: white !important;}
    }
`

const { useBreakpoint } = Grid;

const LeftMenu = () => {
    const { md } = useBreakpoint();
    return (
        <Super>
        <Menu mode={md ? "horizontal" : "inline"}>
            <Menu.Item key="RU">

                    <NavLink to="" activeClassName={'active'}>RU</NavLink>

             </Menu.Item>
            <Menu.Item key="EN">
                <NavLink to="" activeClassName={'active'}>EN</NavLink>
            </Menu.Item>
        </Menu>
        </Super>
    );
}

export default LeftMenu;