import {Col, Row} from "antd";
import {FadeInContainer} from "../../../common/FadeInAnimation";
import React from "react";


export const MainPageBlock1 = () => {
    return (


        <div className={'firstblock'}>

            <div className={'container'}>
                <FadeInContainer>
                    <Row className={'riof_inner'}>
                        <Col span={24}>
                            <div className={'riofh1'}>RIØFF</div>
                        </Col>
                    </Row>
                    <Row className={'coord_inner'}>
                        <Col span={24}>
                            <div className={'coord'}>RR-15-04</div>
                        </Col>
                    </Row>
                    <Row className={'coord_inner'}>
                        <Col span={24}>
                            <div className={'coord'}>AS-025</div>
                        </Col>
                    </Row>
                </FadeInContainer>
            </div>
        </div>

    )


}