import React from 'react'
import {ChatPageNaming} from "./Blocks/Naming_chatpage";
import {ChatPageForm} from "./Blocks/Form_chatpage";
import styled from "styled-components";
import {ChatPageComments} from "./Blocks/Comments_chatpage";

const GlobalDiv = styled.div`
      background: #ECF0F1;
`


export const ChatPage = () => {
    return (
        <GlobalDiv>
            <ChatPageNaming/>
            <div className={'container'}>
                <ChatPageForm/>
                <ChatPageComments/>
            </div>


        </GlobalDiv>
    )
}