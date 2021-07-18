import React from 'react';
import styled from "styled-components";
import Image from "next/image";

const BadgeStyle = styled.div`
  display: inline-flex;
  min-width: 180px;
  margin: 0 5px 0 5px;

  .badge {
    padding: 15px;
    background: #2C3E50;
    border-radius: 15px;
    min-height: 64px;
    min-width: 180px;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .pic {
    height: 64px;
    align-self: center;
    padding-right: 20px;
  }

  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  color: #ECF0F1;

  transition: transform .4s ease-out 0s;

  &:hover {
    transform: translateZ(0) scale(1.02);
  }

  @media (max-width: 576px) {
    font-size: 18px;
    line-height: 20px;
  }

  @media (max-width: 376px) {
    font-size: 16px;
    line-height: 18px;
  }
`

const DonateBadge = ({image, sponsor}) => {
    return (
        <BadgeStyle>
            {image && <div className={'pic'}>
                <Image
                    src={image} alt="logo"
                    width={64}
                    height={64}
                    layout={'fixed'}
                    quality={90}
                />
            </div>}
            <div className={'badge'}>{sponsor}</div>

        </BadgeStyle>
    );
};

export default DonateBadge;
