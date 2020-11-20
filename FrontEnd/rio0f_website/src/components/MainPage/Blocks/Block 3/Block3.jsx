import {Col, Row} from "antd";
import rrc_logo from "../../../../assets/rrc_logo.png"
import {PlanCard} from "./Card/PlanCard";

//TODO: Inserting sponsor logo system, inserting card system, card pathway animation

//TODO: Block animation


export const MainPageBlock3 = () => {
    return (
        <div className={'block3'}>
            <div className={'container'}>
                <Row>
                    <Col className={'sponsorsblock'} span={3}>
                        <img src={rrc_logo} alt=""/>
                    </Col>
                    <Col className={'sponsorsblock'} span={3}>
                        <img src={rrc_logo} alt=""/>
                    </Col>
                    <Col className={'sponsorsblock'} span={3}>
                        <img src={rrc_logo} alt=""/>
                    </Col>
                    <Col className={'sponsorsblock'} span={3}>
                        <img src={rrc_logo} alt=""/>
                    </Col>
                    <Col className={'sponsorsblock'} span={3}>
                        <img src={rrc_logo} alt=""/>
                    </Col>
                    <Col className={'sponsorsblock'} span={3}>
                        <img src={rrc_logo} alt=""/>
                    </Col>
                    <Col className={'sponsorsblock'} span={3}>
                        <img src={rrc_logo} alt=""/>
                    </Col>
                    <Col className={'sponsorsblock'} span={3}>
                        <img src={rrc_logo} alt=""/>
                    </Col>
                </Row>

                <div className={'expplan'}>
                    <Row>
                        <Col span={24}>
                            <div className={'expplanh1'}>План Экспедиции</div>
                        </Col>
                    </Row>
                    <Row className={'cardblock'}>
                        <PlanCard/>
                    </Row>
                    <Row className={'cardblock'} justify="end" >
                        <PlanCard />
                    </Row>
                    <Row className={'cardblock'}>
                        <PlanCard/>
                    </Row>
                    <Row className={'cardblock'} justify="end">
                        <PlanCard/>
                    </Row>

                </div>
            </div>
        </div>

    )


}