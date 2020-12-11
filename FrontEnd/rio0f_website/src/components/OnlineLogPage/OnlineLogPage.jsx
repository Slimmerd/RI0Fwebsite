import React, {useState} from 'react'
import {OnlineLogPageNaming} from "./Blocks/Naming_onlinelogpage";
import {OnlineLogPageStub} from "./Blocks/Stub_onlinelogpage";
import {OnlineLogTable} from "./Blocks/Table_onlinelog";

//TODO: Change when table will be uploaded (change state from admin panel)
export const OnlineLogPage = () =>{
    const [stub,showStub] = useState(true)

    return(
        <div>
            <OnlineLogPageNaming/>
            {stub? <OnlineLogPageStub/> : <OnlineLogTable/>}
        </div>
    )
}