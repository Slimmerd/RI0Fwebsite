import React from 'react'
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