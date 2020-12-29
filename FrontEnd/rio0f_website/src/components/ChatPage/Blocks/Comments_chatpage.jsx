import React from 'react'
import {Col, Row} from "antd";
import {CommentCard} from "./Components/Comment";
import styled from "styled-components";

// language=SCSS prefix=*{ suffix=}
const CommentBlock = styled.div`
  .button {
    padding-top: 80px;
    display: flex;
    align-items: center;
  }

  button {
    width: 300px;
    height: 75px;
    margin: 0 auto;
    border-radius: 15px;
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 42px;
    overflow: hidden;

    color: #ECF0F1;
  }
`

export const ChatPageComments = ({Comments}) => {

    return (
        <CommentBlock>
            <Row gutter={[0, 20]} justify={'center'}>
                {Comments.map((n, i) =>
                    <Col key={i}><CommentCard comment={n}/></Col>
                )}
            </Row>
            <div className={'button'}>
            </div>
        </CommentBlock>
    )
}