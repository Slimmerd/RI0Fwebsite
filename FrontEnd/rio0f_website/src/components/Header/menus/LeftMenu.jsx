import React, {useState} from 'react';
import { Menu, Grid } from 'antd';
import styled from "styled-components";
import i18n from "../../../i18n";

const Super = styled.div`
    .ant-menu-item-selected{
  border-bottom: 2px solid white !important;
  color: white !important;
  
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
    
    
  @media (max-width: 992px){
    ul{
    background-color: transparent;
    border: none;
    }
    
    li{
     margin-bottom: 25px !important;
    }
    
    a, div {
    font-family: Roboto,sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    
    color: #FFFFFF !important;
    }
    
    .ant-menu-item, .ant-menu-item-only-child, .ant-menu-item-selected, .ant-menu-item-selected a{
    background: transparent !important;
    color: #FFFFFF !important;
    }
    
  }
`

const { useBreakpoint } = Grid;

const LeftMenu = () => {
    const [language, setLanguage] = useState(localStorage.getItem('locales'))
    const { lg } = useBreakpoint();

    const changeLanguage = lng => {
        i18n.changeLanguage(lng);
        localStorage.setItem('locales', `${lng}`);
        setLanguage(lng)
    };
    return (
        <Super>
        <Menu mode={lg ? "horizontal" : "inline"} selectedKeys={language}>
            <Menu.Item key="ru">
                    <a onClick={() => changeLanguage('ru')}>RU</a>
             </Menu.Item>
            <Menu.Item key="en">
                <a onClick={() => changeLanguage('en')}>EN</a>
            </Menu.Item>
        </Menu>
        </Super>
    );
}

export default LeftMenu;