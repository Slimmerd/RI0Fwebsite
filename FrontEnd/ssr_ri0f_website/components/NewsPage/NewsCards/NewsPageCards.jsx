import React, {useEffect, useState} from 'react';
import {FadeInContainer} from "../../common/FadeInAnimation";
import {SecondaryCard} from "./SecondaryCard";
import {NewsAnimContainer} from "../../common/NewsCardAnimation";
import {MainCard} from "./MainCard";
import {Col, Row} from "antd";

const NewsPageCards = ({news}) => {
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
        const Last = (isSize > breakpoint ? <MainCard news={news[0]}/> :
            <div className={'test'}><SecondaryCard news={news[0]}/></div>)

        return Last
    }


    return (
        <div>
            <FadeInContainer>
                <LastNews/>
            </FadeInContainer>
            {/*Other News card*/}
            <Row gutter={[{xs: 0, sm: 24, md: 24, lg: 24}, 48]} align={'center'}>
                <NewsAnimContainer
                    items={
                        news.slice(1).map((n, i) => <Col key={i} xs={24} sm={24} md={24} lg={12} xl={8}
                                                         xxl={8}><SecondaryCard news={n}/></Col>)
                    }/>
            </Row>
        </div>
    );
};

export default NewsPageCards;
