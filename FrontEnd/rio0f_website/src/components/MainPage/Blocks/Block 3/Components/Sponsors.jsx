import React from 'react';
import {Col, Row} from "antd";
import rrc_logo from "../../../../../assets/rrc_logo.png";

export const SponsorsBlock = () => {
    return (
        <Row align={'center'} >
            <Col className={'sponsorsblock'}  md={4} lg={3}>
                <img src={rrc_logo} alt=""/>
            </Col>
            <Col className={'sponsorsblock'}  md={4} lg={3}>
                <img src={rrc_logo} alt=""/>
            </Col>
            <Col className={'sponsorsblock'}  md={4} lg={3}>
                <img src={rrc_logo} alt=""/>
            </Col>
            <Col className={'sponsorsblock'}  md={4} lg={3}>
                <img src={rrc_logo} alt=""/>
            </Col>
            <Col className={'sponsorsblock'}  md={4} lg={3}>
                <img src={rrc_logo} alt=""/>
            </Col>
            <Col className={'sponsorsblock'}  md={4} lg={3}>
                <img src={rrc_logo} alt=""/>
            </Col>
            <Col className={'sponsorsblock'}  md={4} lg={3}>
                <img src={rrc_logo} alt=""/>
            </Col>
            <Col className={'sponsorsblock'} md={4} lg={3}>
                <img src={rrc_logo} alt=""/>
            </Col>
        </Row>
    );
};
