import React, {useEffect, useState} from 'react';
import {FadeInContainer} from "../../common/FadeInAnimation";
import {Col, Row} from "antd";
import {SecondaryCard} from "./SecondaryCard";
import {MainCard} from "./MainCard";

const NewsPageStab = () => {
    const isBrowser = () => typeof window !== "undefined"
    const [isSize, setSize] = useState(null);
    const breakpoint = 786

    useEffect(() => {
        let timeoutID = null
        let isMounted = true

        if (isBrowser) setSize(window.innerWidth)

        const resizeListener = () => {
            if (isMounted) {
                clearTimeout(timeoutID)
                timeoutID = setTimeout(() => setSize(window.innerWidth), 150)
            }
        }

        window.addEventListener("resize", () => resizeListener());

        return () => {
            // remove resize listener
            isMounted = false
            window.removeEventListener('resize', resizeListener());
        }

    }, [isSize, setSize]);


    const LastNews = () => {
        const Last = (isSize > breakpoint ? <MainCard news={''}/> :
            <div className={'test'}><SecondaryCard news={''}/></div>)

        return Last
    }

    return (
        <div>
            {/*Main card*/}
            <FadeInContainer>
                <LastNews/>
            </FadeInContainer>
            {/*Other News card*/}
            <Row gutter={[{xs: 0, sm: 24, md: 24, lg: 24}, 48]} align={'center'}>
                <Col xs={24} sm={24} md={24} lg={12} xl={8}
                     xxl={8}><SecondaryCard news={''}/></Col>
                <Col xs={24} sm={24} md={24} lg={12} xl={8}
                     xxl={8}><SecondaryCard news={''}/></Col>
                <Col xs={24} sm={24} md={24} lg={12} xl={8}
                     xxl={8}><SecondaryCard news={''}/></Col>
            </Row>
        </div>
    );
};

export default NewsPageStab;
