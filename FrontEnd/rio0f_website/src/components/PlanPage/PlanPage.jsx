import React from 'react'
import {Col, Row, Button} from "antd";
import styled from "styled-components";
import {PlanPageNaming} from "./Blocks/Naming_planpage";
import {PlanPageCardsBlock} from "./Blocks/CardsBlock_planpage";

export const PlanPage = () =>{
    return(
        <div>
          <PlanPageNaming/>
          <PlanPageCardsBlock/>
        </div>
    )
}