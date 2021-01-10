import React, {useEffect, useState} from 'react'
import {Row, Skeleton} from "antd";
import styled from "styled-components";
import {Icon} from '@iconify/react';
import cameraIcon from '@iconify/icons-si-glyph/camera';
import moment from 'moment';
import Link from "next/link";
import {useTranslation} from "react-i18next";

const CardShape = styled.div`
  height: 450px;
  width: 350px;
  background: #FFFFFF;
  margin: 0 auto;
  box-shadow: 31.2195px 25.0069px 80px rgba(0, 0, 0, 0.07), 20.2349px 16.2081px 46.8519px rgba(0, 0, 0, 0.0531481), 12.0253px 9.63227px 25.4815px rgba(0, 0, 0, 0.0425185), 6.2439px 5.00137px 13px rgba(0, 0, 0, 0.035), 2.54381px 2.0376px 6.51852px rgba(0, 0, 0, 0.0274815), 0.578139px 0.46309px 3.14815px rgba(0, 0, 0, 0.0168519);
  border-radius: 10px;

  transition: transform .4s ease-out 0s;

  &:hover {
    transform: scale(1.02);
  }


  .pictureStab {
    height: 157px;
    background: #2C3E50;

    display: flex;
    align-items: center;
    border-radius: 10px 10px 0 0;

    svg {
      margin: 0 auto;
      padding-right: 0px;
    }
  }


  .picture {
    height: 157px;

    display: flex;
    align-items: center;
    border-radius: 10px 10px 0 0;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    background-image: ${props => `url(${props.picture})`};

  }

  .text {
    color: #34495E;
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: 500;
    display: flex;
    align-items: start;
    padding: 20px;

    .date {
      font-size: 14px;
      line-height: 16px;
      text-align: left;
      padding-bottom: 10px;
    }

    .header {
      color: #2C3E50;
      font-size: 30px;
      line-height: 30px;
      text-align: left;
      padding-bottom: 20px;
      word-break: break-word;
      white-space: normal;
    }

    .paragraph {
      font-weight: 400;
      font-size: 20px;
      line-height: 23px;
      width: 310px;
      height: 140px;
      word-break: break-word;
      white-space: normal;
      text-align: left;
    }

    .skeletonStyle {
      width: 300px;
      height: 20px;
      border-radius: 5px;
      margin-bottom: 5px;
    }

    .skeletonHeader {
      width: 250px;
      height: 30px;
      border-radius: 5px;
    }

  }

  @media (max-width: 374px) {
    height: 500px;
    width: 270px;
    .text {
      .paragraph {
        width: 240px;
      }

      .header {
        font-size: 25px;
        line-height: 25px;
      }

      .skeletonStyle {
        width: 230px;
      }

      .skeletonHeader {
        width: 230px;
      }
    }

  }
`

export const SecondaryCard = ({news}) => {
    const [loading, setLoading] = useState(true);
    const [text, setText] = useState(null);
    const [name, setName] = useState(null);
    const {i18n} = useTranslation();

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
        <Link href={'/news/' + news.url}>
            <a>
                <CardShape picture={!loading ? news.img : null}>
                    {news.img && !loading ? <Row className={'picture'}>
                        </Row> :
                        <Row className={'pictureStab'}>
                            <Icon icon={cameraIcon} style={{color: '#ecf0f1', fontSize: '118.39999389648438px'}}/>
                        </Row>}

                    <Row className={'text'}>
                        <div style={{margin: '0 auto'}}>
                            <div className={'date'}>{!loading ? moment(news.date).format('DD.MM.YYYY') :
                                <Skeleton.Input style={{width: 100, height: '20px', borderRadius: '5px'}}
                                                active={'active'}/>}</div>

                            <div
                                className={'header'}>{!loading ? (name.length > 30 ? `${name.substring(0, 25)}...` : name) :
                                <Skeleton.Input className={'skeletonHeader'}
                                                active={'active'}/>}</div>

                            <div
                                className={'paragraph'}>{!loading ? (text.length > 180 ? `${text.substring(0, 160)}...` : text) : ParagraphSkeleton}
                            </div>
                        </div>
                    </Row>
                </CardShape>
            </a>
        </Link>
    )
}