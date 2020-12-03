import React from 'react'
import {Button, Col, Form, Input, Row} from "antd";
import {CommentCard} from "./Components/Comment";
import styled from "styled-components";

const CommentBlock = styled.div`
    
    .button{
    height: 280px;
    
    display: flex;
    align-items: center;
    }
    
    button{
    width: 300px;
    height: 75px;
    margin: 0 auto;
    border-radius: 15px;
    font-family: Roboto,sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 42px;
   
    color: #ECF0F1;
    
    background: #2C3E50 !important;
    border-color: #2c3e50 !important;
    &:hover {
    background: #37617e !important;
    border-color: #37617e !important;
    color: #ECF0F1;
  }
    }
`




export const ChatPageComments = () => {

    return (
       <CommentBlock>
           <Row gutter={[0,20]}>
               <Col><CommentCard/></Col>
           </Row>
           <Row gutter={[0,20]}>
               <Col><CommentCard/></Col>
           </Row>
           <Row gutter={[0,20]}>
               <Col><CommentCard/></Col>
           </Row >
           <Row gutter={[0,20]}>
               <Col><CommentCard/></Col>
           </Row>
           <Row>
               <Col><CommentCard/></Col>
           </Row>
           <div className={'button'}>
           <Button type="primary">Еще</Button>
           </div>
       </CommentBlock>
    )
}