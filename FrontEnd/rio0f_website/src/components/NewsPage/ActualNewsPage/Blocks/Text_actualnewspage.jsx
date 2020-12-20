import React, {useEffect, useState} from 'react'
import styled from "styled-components";
import {FadeInContainer} from "../../../common/FadeInAnimation";
import {useTranslation} from "react-i18next";

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
    
@media (max-width: 992px){
 .text{
    width: 745px
  }
}

@media (max-width: 768px){
 .text{
    width: 550px
  }
}

@media (max-width: 576px){
 .text{
    width: 375px
  }
}

@media (max-width: 376px){
 .text{
    width: 270px
  }
}

`

export const ActualNewsPageText = ({news}) => {
    const [text, setText] = useState(null);
    const {t, i18n} = useTranslation();

    useEffect(() => {
        if (i18n.language === 'ru') {
            setText(news.text_ru)
        } else {
            setText(news.text_en)
        }
    }, [i18n.language, news.text_ru, news.text_en])


    return (
        <FadeInContainer>
            <HeaderBlock>
                <div className={'container'}>
                    <div className={'text'}>
                        {text}
                    </div>
                </div>
            </HeaderBlock>
        </FadeInContainer>
    )
}