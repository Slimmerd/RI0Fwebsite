import React from 'react'
import {Col, Row} from "antd";
import island_map from "../../../../assets/island_map.png"
import {FadeInContainer} from "../../../common/FadeInAnimation";
import {useTranslation} from "react-i18next";

export const MainPageBlock2 = () => {
    const { t, i18n } = useTranslation()
    return (
        <div className={'block2'}>
            <FadeInContainer>
            <div className={'container'}>

            <Row>
                <Col className={'infoblock'}  md={24} lg={12} xl={12} xxl={12}>
                    <div className={'islandinfoh1'}>{t('main:Block2.island_name')}</div>
                    <div className={'islaninfop'}>{t('main:Block2.island_description')}</div>
                </Col>

                <Col className={'islandmap'}  md={24} lg={12} xl={12} xxl={12}>
                    <img src={island_map} alt="Iturup Island map"/>
                </Col>
            </Row>

            </div>
            </FadeInContainer>
        </div>

    )


}