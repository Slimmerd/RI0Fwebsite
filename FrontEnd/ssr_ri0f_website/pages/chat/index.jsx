import React, {useEffect} from 'react'
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {getComments} from "../../redux/chat-reducer";
import {ChatPageNaming} from "../../components/ChatPage/Blocks/Naming_chatpage";
import {ChatFormPage} from "../../components/ChatPage/Blocks/Form_chatpage";
import {ChatPageComments} from "../../components/ChatPage/Blocks/Comments_chatpage";
import Loading from "../../components/common/Loading";

const GlobalDiv = styled.div`
  background: #ECF0F1;
`

const ChatPage = () => {
    const comments = useSelector((state) => state.chat.comments)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getComments())
    }, [dispatch])

    if (!comments) {
        return (
            <Loading/>
        )
    }

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


export const getServerSideProps = async () => {
    // Old version
    // const { dispatch, getState } = store
    // await dispatch(getComments())
    // const comments = getState().chat.comments

    // Actual version
    // Only way to implement auto updating state
    return {
        props: {},
    }

}


export default ChatPage