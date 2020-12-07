import styled from "styled-components";
import React from 'react'
import {FadeInContainer} from "../../../utils/FadeInAnimation";

const HeaderBlock = styled.div`
    height: 300px;
    background: #ECF0F1;
        
    display: flex;
    align-items: center;
    
    color: #2C3E50;
    
    .header{
    font-family: Oswald, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 96px;
    line-height: 142px;
    
    padding-bottom: 20px;
    }
    
    .sub{
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    }
    
      @media (max-width:425px){
    .header{
      font-size: 66px;
      line-height: 76px;
      }
      .sub{
      font-size: 18px;
    line-height: 20px;
      }
}
`

export const ChatPageNaming = () =>{
    return(
        <HeaderBlock>
            <div  className={'container'}>
                <FadeInContainer>
                <div className={'header'}>Общение</div>
                <div className={'sub'}>Здесь вы можете оставить комментарии</div>
                </FadeInContainer>
            </div>
        </HeaderBlock>
    )
}