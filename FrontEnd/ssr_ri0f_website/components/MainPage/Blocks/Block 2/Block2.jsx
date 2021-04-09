import React from 'react'
import {Col, Row} from "antd";
import {FadeInContainer} from "../../../common/FadeInAnimation";
import useTranslation from 'next-translate/useTranslation'
import Image from "next/image";

export const MainPageBlock2 = () => {
    const {t} = useTranslation()
    return (
        <div className={'block2'}>
            <FadeInContainer>
                <div className={'container'}>

                    <Row>
                        <Col className={'infoblock'} md={24} lg={12} xl={12} xxl={12}>
                            <div className={'islandinfoh1'}>{t('main:Block2.island_name')}</div>
                            <div className={'islaninfop'}>{t('main:Block2.island_description')}</div>
                        </Col>

                        <Col className={'islandmap'} md={24} lg={12} xl={12} xxl={12}>
                            <Image src={"/static/assets/RI0FF_1.webp"} alt="Iturup Island map"
                                   layout={'fill'} quality={90} priority/>
                        </Col>
                    </Row>

                </div>
            </FadeInContainer>
        </div>

    )
}