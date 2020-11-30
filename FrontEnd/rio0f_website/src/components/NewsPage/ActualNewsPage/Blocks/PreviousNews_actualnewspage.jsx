import React from 'react'
import styled from "styled-components";
import {Col, Row} from "antd";
import {SecondaryCard} from "../../NewsCards/SecondaryCard";

const HeaderBlock = styled.div`
    height: 550px;
    background: #ECF0F1;
    
    display: flex;
    align-items: center;
   
`

export const ActualNewsPagePreviousNews = () => {
    return (

        <HeaderBlock>
            <div className={'container'}>
                <Row gutter={[30, 0]}>
                    <Col><SecondaryCard/></Col>
                    <Col><SecondaryCard/></Col>
                    <Col><SecondaryCard/></Col>
                </Row>
            </div>
        </HeaderBlock>

    )


}