import {Col, Row, Skeleton} from "antd";
import styled from "styled-components";
import {Icon} from '@iconify/react';
import cameraIcon from '@iconify/icons-si-glyph/camera';
import React, {useEffect, useState} from "react";
import i18n from "i18next";
import moment from 'moment';
import {Link, NavLink} from "react-router-dom";

const CardShape = styled.div`
  height: 370px;
  width: 1110px;
  border-radius: 10px;
  margin: 0 auto 50px auto;

  box-shadow: 31.2195px 25.0069px 80px rgba(0, 0, 0, 0.07), 20.2349px 16.2081px 46.8519px rgba(0, 0, 0, 0.0531481), 12.0253px 9.63227px 25.4815px rgba(0, 0, 0, 0.0425185), 6.2439px 5.00137px 13px rgba(0, 0, 0, 0.035), 2.54381px 2.0376px 6.51852px rgba(0, 0, 0, 0.0274815), 0.578139px 0.46309px 3.14815px rgba(0, 0, 0, 0.0168519);

  transition: transform .4s ease-out 0s;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 1200px) {
    width: 900px
  }


  @media (max-width: 992px) {
    max-width: 745px
  }


  @media (max-width: 768px) {
    max-width: 550px
  }

  @media (max-width: 576px) {
    max-width: 400px
  }

  @media (max-width: 360px) {
    max-width: 270px
  }

  .picture, .text {
    height: 370px;
  }

  .pictureStab {
    background: #2C3E50;
    display: flex;
    align-items: center;
    border-radius: 10px 0 0 10px;

    svg {
      margin: 0 auto;
      padding-right: 16px;
    }
  }

  .picture {
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    border-radius: 10px 0 0 10px;
    background-image: ${props => `url(${props.picture})`};

  }

  .text {
    background: #FFFFFF;
    border-radius: 0 10px 10px 0;
    color: #34495E;
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: 500;
    padding: 25px;
    display: flex;
    align-items: start;

    .date {
      font-size: 14px;
      line-height: 16px;
      text-align: left;
      padding-bottom: 10px;
    }

    .header {
      color: #2C3E50;
      font-size: 36px;
      line-height: 36px;
      text-align: left;
      word-break: break-word;
      white-space: normal;
      padding-bottom: 20px;
    }

    .paragraph {
      font-weight: 400;
      font-size: 24px;
      line-height: 28px;
      word-break: break-word;
      white-space: normal;
      width: 400px;
      height: 215px;

      text-align: left;
    }

    .skeletonStyle {
      width: 400px;
      height: 25px;
      border-radius: 5px;
      margin-bottom: 5px;
    }

  }
`

export const MainCard = ({news}) => {
    const [loading, setLoading] = useState(true);
    const [text, setText] = useState(null);
    const [name, setName] = useState(null);

    const ParagraphSkeleton = [
        <Skeleton.Input key={1} className={'skeletonStyle'} active={'active'}/>,
        <Skeleton.Input key={2} className={'skeletonStyle'} active={'active'}/>,
        <Skeleton.Input key={3} className={'skeletonStyle'} active={'active'}/>,
        <Skeleton.Input key={4} className={'skeletonStyle'} active={'active'}/>,
        <Skeleton.Input key={5} className={'skeletonStyle'} active={'active'}/>,
        <Skeleton.Input key={6} className={'skeletonStyle'} active={'active'}/>,
        <Skeleton.Input key={7} className={'skeletonStyle'} active={'active'}/>]

    useEffect(() => {
        if (i18n.language === 'ru') {
            setText(news.text_ru)
            setName(news.name_ru)
        } else {
            setText(news.text_en)
            setName(news.name_en)
        }
        if (news === undefined || news.length === 0) {
            setLoading(true)
        } else setLoading(false)
    }, [i18n.language, news])

    return (
        <NavLink to={'/news/' + news.url}>
            <CardShape picture={!loading ? news.img : null}>
                <div className={'container'}>

                    <Row>
                        {news.img && !loading ?
                            <Col className={'picture'} span={14} xs={12} sm={12} md={10} lg={12} xl={14}>
                            </Col> :
                            <Col className={'pictureStab'} span={14} xs={12} sm={12} md={10} lg={12} xl={14}>
                                <Icon icon={cameraIcon} style={{color: '#ecf0f1', fontSize: '118.39999389648438px'}}/>
                            </Col>}
                        <Col span={10} xs={12} sm={12} md={14} lg={12} xl={10} className={'text'}>
                            <div style={{margin: '0 auto'}}>

                                <div className={'date'}>{!loading ? moment(news.date).format('DD.MM.YYYY') :
                                    <Skeleton.Input style={{width: 100, height: '25px', borderRadius: '5px'}}
                                                    active={'active'}/>}</div>

                            <div
                                className={'header'}>{!loading ? (name.length > 30 ? `${name.substring(0, 30)}...` : name) :

                                <Skeleton.Input style={{width: 400, height: '45px', borderRadius: '5px'}}
                                                active={'active'}/>}</div>
                                <div
                                    className={'paragraph'}> {!loading ? (text.length > 180 ? `${text.substring(0, 180)}...` : text) : ParagraphSkeleton}
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </CardShape>
        </NavLink>
    )
}