import {Col, Row} from "antd";
import island_map from "../../../../assets/island_map.png"


export const MainPageBlock2 = () => {
    return (
        <div className={'block2'}>
            <div className={'container'}>
            <Row>
                <Col className={'infoblock'} span={12}>
                    <div className={'islandinfoh1'}>Итуруп</div>

                    <div className={'islaninfop'}>Итуру́п (от айнского Этороп; яп. 択捉島 Эторофу. На российской карте 1745-го года — Цытронной) —
                        остров южной группы Большой гряды Курильских островов, самый крупный остров архипелага. Площадь
                        — 3174,71 км². Длина береговой линии достигает 581,9 км. Состоит из вулканических массивов и
                        горных кряжей. На острове насчитывается 20 вулканов, из них девять — действующие. Население
                        острова 6485 человек.
                    </div>

                </Col>
                <Col className={'islandmap'} span={12}>
                    <img src={island_map} alt="Iturup Island map"/>
                </Col>
            </Row>
            </div>
        </div>

    )


}