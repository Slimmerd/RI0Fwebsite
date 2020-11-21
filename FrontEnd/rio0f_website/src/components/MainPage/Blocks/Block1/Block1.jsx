import {Col, Row} from "antd";


export const MainPageBlock1 = () => {
    return (


        <div className={'firstblock'}>

            <div className={'container'}>

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
            </div>
        </div>

    )


}