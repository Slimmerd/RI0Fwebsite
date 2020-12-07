import React from 'react'
import {HardwarePageNaming} from "./Blocks/Naming_hardwarepage";
import {HardwarePageCardsBlock} from "./Blocks/CardsBlock_hardwarepage";

export const HardwarePage = () =>{
    return(
        <div>
          <HardwarePageNaming/>
          <HardwarePageCardsBlock/>
        </div>
    )
}