import React, {useEffect, useState} from 'react'
import {Col, Row} from "antd";
import styled from "styled-components";
import {FadeInContainer} from "../../../common/FadeInAnimation";
import moment from "moment";
import {useTranslation} from "react-i18next";

const HeaderBlock = styled.div`
  height: 350px;
  background: #ECF0F1;
  display: flex;
  align-items: center;

  color: #2C3E50;

  .rowSize {
    width: 920px;
    margin: 0 auto;
    }

  .header {
    font-family: Oswald, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    line-height: 48px;
    text-align: start;
    word-break: break-word;
    white-space: normal;
    padding-bottom: 54px;
    width: 920px;
  }

  .sub {
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    text-align: start;
    //width: 300px;
  }

  @media (max-width: 1200px) {
    .rowSize {
      width: 745px
    }

    .header {
      width: 745px
    }
  }

  @media (max-width: 768px) {
    .header {
      font-size: 36px;
      line-height: 36px;
      width: 550px
    }

    .sub {
      font-size: 18px;
      line-height: 18px;
    }

    .rowSize {
      width: 550px
    }
  }

  @media (max-width: 576px) {
    .header {
      //font-size: 28px;
      //line-height: 28px;
      width: 100%;
      text-align: center;
    }

    .sub {
      //  font-size: 18px;
      //line-height: 18px;
      text-align: center;
    }

    .rowSize {
      width: 375px
    }
  }

  @media (max-width: 376px) {
    .rowSize {
      width: 270px
    }
} 
`

export const ActualNewsPageNaming = ({news}) => {
    const [name, setName] = useState(null);
    const [author, setAuthor] = useState(null)
    const {t, i18n} = useTranslation();

    useEffect(() => {
        if (i18n.language === 'ru') {
            setName(news.name_ru)
            setAuthor(news.author_ru)
        } else {
            setName(news.name_en)
            setAuthor(news.author_en)
        }
    }, [i18n.language, news.name_ru, news.name_en, news.author_ru, news.author_en])

    return (
        <HeaderBlock>
            <div className={'container'}>
                <FadeInContainer>
                    <Row justify={'center'} className={'rowSize'}>
                        <Col>
                            <div className={'header'}>{name}</div>
                            <Row gutter={[{xs: 0, sm: 10, md: 10, lg: 10}, 0]} className={'row'} justify={'center'}>
                                <Col xs={24} sm={12} md={12}>
                                    <div className={'sub'}>{author}</div>
                                </Col>
                                <Col xs={24} sm={12} md={12}>
                                    <div className={'sub'}>{moment(news.date).format('DD.MM.YYYY')}</div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </FadeInContainer>
            </div>
        </HeaderBlock>
    )
}
