import styled from "styled-components";
import {FadeInContainer} from "../../common/FadeInAnimation";
import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import DonateBadge from "./components/DonateBadge";
import {Col, Row} from "antd";

const MainSponsorBlockContainer = styled.div`
  min-height: 1px;
  background: #ECF0F1;
  box-shadow: 0 2.32131px 11.6066px 4.64262px rgba(0, 0, 0, 0.1);

  .donations {
    padding-bottom: 48px;
  }
`
const BlockHeader = styled.div`
  font-family: Oswald, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 96px;
  line-height: 142px;

  color: #2C3E50;

  padding: 42px 0 48px 0;

  @media (max-width: 786px) {
    font-size: 76px;
    line-height: 86px;
  }

  @media (max-width: 576px) {
    font-size: 54px;
    line-height: 56px;
  }

  @media (max-width: 376px) {
    font-size: 42px;
    line-height: 48px;
  }
`

export const DonatePageMainSponsors = ({sponsors}) => {
    const {t} = useTranslation()

    const filteredSponsors = sponsors.filter(sponsor => sponsor.category === 'Main')

    return (
        <MainSponsorBlockContainer>
            <div className={'container'}>
                <FadeInContainer>
                    <BlockHeader>{t('donate:sponsor_block.heading')}</BlockHeader>
                </FadeInContainer>

                <FadeInContainer>
                    <div className={'donations'}>
                        <Row justify={'center'} gutter={[{xs: 0, sm: 30, md: 30, lg: 30}, 20]}>
                            {filteredSponsors.map((sponsor, i) => (<Col>
                                <DonateBadge key={i} sponsor={sponsor.name} image={sponsor.img}/>
                            </Col>))}
                        </Row>
                    </div>
                </FadeInContainer>
            </div>
        </MainSponsorBlockContainer>
    )
}