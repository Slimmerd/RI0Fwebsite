import React, {useState} from 'react'
import {Button, Col, Row} from "antd";
import {CommentCard} from "./Components/Comment";
import styled from "styled-components";
import {useTranslation} from "react-i18next";

// language=SCSS prefix=*{ suffix=}
const CommentBlock = styled.div`
    .button {
      height: 280px;
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

    .ant-btn > .ant-btn-loading-icon .anticon {
      padding-right: 0 !important;
    }

    .ant-btn-loading-icon {
      padding-right: 25px !important;
    }

    .ant-btn.ant-btn-primary,
    .ant-btn-primary {
      background-color: #2C3E50;
      border-color: #2c3e50;

      &:hover {
        background: hsl(210, 29%, 40%) !important;
        border-color: hsl(210, 29%, 40%) !important;
      }
    }
`

export const ChatPageComments = () => {
    const { t, i18n } = useTranslation()
    const [loading, setLoading] = useState(false)

    const OnClick = () => {
        setLoading(!loading)
    }

    return (
        <CommentBlock>
            <Row gutter={[0, 20]} justify={'center'}>
                <Col><CommentCard/></Col>
                <Col><CommentCard/></Col>
                <Col><CommentCard/></Col>
                <Col><CommentCard/></Col>
                <Col><CommentCard/></Col>
            </Row>
            <div className={'button'}>
                <Button type="primary" loading={loading}
                        onClick={OnClick}>{t('chat:more_button')}</Button>
            </div>
        </CommentBlock>
    )
}