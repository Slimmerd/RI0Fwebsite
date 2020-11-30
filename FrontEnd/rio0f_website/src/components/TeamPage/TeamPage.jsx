import React from 'react'
import {Col, Row, Button} from "antd";
import styled from "styled-components";
import {TeamPageNaming} from "./Blocks/Naming_teampage";
import {TeamPageMembers} from "./Blocks/Member_teampage";




export const TeamPage = () =>{
    return(
        <div>
           <TeamPageNaming/>
           <TeamPageMembers/>
        </div>
    )
}