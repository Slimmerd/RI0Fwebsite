import React from 'react'
import styled from "styled-components";
import {FadeInContainer} from "../../../../utils/FadeInAnimation";

const HeaderBlock = styled.div`
    min-height: 460px;
    background: #FFFFFF;
    
    .text{
    padding: 30px 0 30px 0;
    width: 920px;
    
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    
    color: #2C3E50;
    
    text-align: left;
    margin: 0 auto;
    }
`

export const ActualNewsPageText = () => {
    return (
        <FadeInContainer>
        <HeaderBlock>
            <div className={'container'}>
                <div className={'text'}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat faucibus lacus, non ultricies
                    nibh
                    efficitur eget. Etiam vulputate sapien lacinia, tincidunt dolor venenatis, cursus nunc. Nullam at
                    dictum
                    tortor. Fusce viverra hendrerit convallis. Nunc commodo ultrices nibh, et dictum nulla tempus at.
                    Suspendisse malesuada ut ante non cursus. Vestibulum molestie tortor neque, nec iaculis metus congue
                    in.
                    Nunc ullamcorper et nisl eget molestie. Class aptent taciti sociosqu ad litora torquent per conubia
                    nostra, per inceptos himenaeos. Phasellus feugiat nisi quis dignissim molestie. Quisque pretium
                    cursus
                    purus.
                    <br/>
                    <br/>
                    Praesent risus elit, pellentesque nec justo nec, tempor auctor mauris. Nullam pulvinar mattis neque,
                    nec
                    ornare tellus aliquam vitae. Curabitur cursus justo sit amet mauris viverra, quis auctor odio
                    eleifend.
                    Mauris non posuere lectus. Vestibulum at dolor eu diam finibus pretium. Donec augue diam, mollis at
                    sapien id, fringilla feugiat ipsum. Phasellus pulvinar euismod efficitur. Suspendisse potenti.
                    Vestibulum ac tellus purus.
                </div>
            </div>
        </HeaderBlock>
        </FadeInContainer>
    )
}