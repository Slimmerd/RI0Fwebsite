import {Col, Row} from "antd";
import {FadeInContainer} from "../../../../utils/FadeInAnimation";
import React from "react";


export const MainPageBlock1 = () => {
    return (


        <div className={'firstblock'}>

            <div className={'container'}>
                <FadeInContainer>
                <Row className={'riof_inner'}>
                    <Col span={24}>
                        <div className={'riofh1'}>RIØF</div>
                    </Col>
                </Row>
                <Row className={'coord_inner'}>
                    <Col span={24}>
                        <div className={'coord'}>RR-00-00</div>
                    </Col>
                </Row>
                <Row className={'coord_inner'}>
                    <Col span={24}>
                        <div className={'coord'}>AS-000</div>
                    </Col>
                </Row>
                </FadeInContainer>
            </div>
        </div>

    )


}