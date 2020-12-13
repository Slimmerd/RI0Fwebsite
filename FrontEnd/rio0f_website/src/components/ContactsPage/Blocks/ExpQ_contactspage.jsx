import {Col, Row} from "antd";
import styled from "styled-components";
import React from 'react'
import {Icon} from '@iconify/react';
import bubbleMessageTalk from '@iconify/icons-si-glyph/bubble-message-talk';
import {FadeInContainer} from "../../common/FadeInAnimation";
import {useTranslation} from "react-i18next";

// language=SCSS prefix=*{ suffix=}
const BlockHeader = styled.div`
    min-height: 431px;
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: 500;
    color: #2C3E50;

    .picture {
      padding: 45px 0 25px 0;
    }

    .header {
      font-size: 36px;
      line-height: 42px;
      padding-bottom: 66px;
    }

    .name {
      font-size: 24px;
      line-height: 28px;
      padding-bottom: 35px;
    }

    .email {
      font-size: 20px;
      line-height: 28px;
      padding-bottom: 45px;
    }

    @media (max-width: 576px) {
      .name, .email {
        font-size: 18px;
        line-height: 20px;
      }
    }

    @media (max-width: 375px) {
      .name, .email {
        font-size: 16px;
        line-height: 18px;
      }
    }
`

export const ContactPageExpQ = () => {
    const {t, i18n} = useTranslation()

    return (
        <BlockHeader>
            <div className={'container'}>
                <FadeInContainer>
                    <div className={'picture'}>
                        <Icon icon={bubbleMessageTalk} style={{color: '#2c3e50', fontSize: '64px'}}/>
                    </div>

                    <div className={'header'}>{t('contacts:expedition_question.heading')}</div>

                    <div className={'name'}>{t('contacts:expedition_question.name')}</div>
                    <Row className={'email'} justify={'center'} gutter={[10, 0]}>
                        <Col>Email: </Col>
                        <Col>
                            <div>
                                <a href="mailto:rz3ec@yandex.ru">rz3ec@yandex.ru</a>
                            </div>
                        </Col>
                    </Row>
                </FadeInContainer>
            </div>
        </BlockHeader>
    )
}