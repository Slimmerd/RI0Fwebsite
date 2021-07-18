import styled from "styled-components";
import React from 'react'
import {FadeInContainer} from "../../common/FadeInAnimation";
import {Col, Row} from "antd";
import DonateBadge from "./components/DonateBadge";

const SecondarySponsorBlockContainer = styled.div`
  min-height: 400px;
  background: #ECF0F1;

  .donations {
    padding-bottom: 48px;
  }
`

export const DonatePageSecondarySponsors = ({sponsors}) => {

    const filteredSponsors = sponsors.filter(sponsor => sponsor.category === 'General')

    return (
        <SecondarySponsorBlockContainer>
            <div className={'container'}>
                <FadeInContainer>
                    <div className={'donations'}>
                        <Row justify={'center'} gutter={[{xs: 0, sm: 20, md: 20, lg: 20}, 20]}>
                            {filteredSponsors.map((sponsor, i) => (<Col>
                                <DonateBadge key={i} sponsor={sponsor.name} image={sponsor.img}/>
                            </Col>))}
                        </Row>
                    </div>
                </FadeInContainer>
            </div>
        </SecondarySponsorBlockContainer>
    )
}