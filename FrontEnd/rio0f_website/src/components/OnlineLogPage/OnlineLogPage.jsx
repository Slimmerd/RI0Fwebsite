import React from 'react'
import {Col, Row, Button} from "antd";
import styled from "styled-components";
import {OnlineLogPageNaming} from "./Blocks/Naming_onlinelogpage";
import {OnlineLogPageStub} from "./Blocks/Stub_onlinelogpage";

export const OnlineLogPage = () =>{
    return(
        <div>
            <OnlineLogPageNaming/>
            <OnlineLogPageStub/>
        </div>
    )
}