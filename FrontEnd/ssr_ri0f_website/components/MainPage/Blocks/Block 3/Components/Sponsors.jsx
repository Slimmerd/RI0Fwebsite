import React from 'react';
import {Col, Row} from "antd";
import Image from 'next/image'

const rrc_logo = '/static/assets/rrc_logo.png'
const ri0ff_logo = '/static/assets/newLogo.png'

export const SponsorsBlock = () => {
    return (
        <Row align={'center'}>
            <Col className={'sponsorsblock'} md={4} lg={3}>
                <Image
                    src={rrc_logo} alt=""
                    width={90}
                    height={90}
                />
            </Col>

            <Col className={'sponsorsblock'} md={4} lg={3}>
                <Image
                    src={ri0ff_logo} alt=""
                    width={90}
                    height={90}
                />
            </Col>

            <Col className={'sponsorsblock'} md={4} lg={3}>
                <Image
                    src={rrc_logo} alt=""
                    width={90}
                    height={90}
                />
            </Col>

            <Col className={'sponsorsblock'} md={4} lg={3}>
                <Image
                    src={ri0ff_logo} alt=""
                    width={90}
                    height={90}
                />
            </Col>

            <Col className={'sponsorsblock'} md={4} lg={3}>
                <Image
                    src={rrc_logo} alt=""
                    width={90}
                    height={90}
                />
            </Col>

            <Col className={'sponsorsblock'} md={4} lg={3}>
                <Image
                    src={ri0ff_logo} alt=""
                    width={90}
                    height={90}
                />
            </Col>

            <Col className={'sponsorsblock'} md={4} lg={3}>
                <Image
                    src={rrc_logo} alt=""
                    width={90}
                    height={90}
                />
            </Col>

            <Col className={'sponsorsblock'} md={4} lg={3}>
                <Image
                    src={ri0ff_logo} alt=""
                    width={90}
                    height={90}
                />
            </Col>
        </Row>
    );
};
