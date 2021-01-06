import Link from 'next/link'
import {Col, Row} from 'antd';
import RightMenu from "./menus/RightMenu";
import LeftMenu from "./menus/LeftMenu";
import SideBar from "../common/SideBar";

const Header = () => {
    return (
        <div className={'menuBar'}>

            <Row className={'menuCon'}>
                <Col xs={3} sm={3} md={3} lg={3} xl={4}>
                    <div className={'logo'}>
                        <Link href="/"><a>RIØF</a></Link>
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

                    <SideBar/>

                </Col>
            </Row>
        </div>

    );
};

export default Header;