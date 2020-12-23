import React, {useEffect} from 'react'
import {ChatPageNaming} from "./Blocks/Naming_chatpage";
import {ChatFormPage} from "./Blocks/Form_chatpage";
import styled from "styled-components";
import {ChatPageComments} from "./Blocks/Comments_chatpage";
import {useDispatch, useSelector} from "react-redux";
import {getComments} from "../../redux/chat-reducer";

const GlobalDiv = styled.div`
  background: #ECF0F1;
`


export const ChatPage = () => {
    const comments = useSelector((state) => state.chat.comments)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getComments())
    }, [dispatch])


    return (
        <GlobalDiv>
            <ChatPageNaming/>
            <div className={'container'}>
                <ChatFormPage/>
                {comments !== 0 ? <ChatPageComments Comments={comments}/> : null}
            </div>
        </GlobalDiv>
    )
}