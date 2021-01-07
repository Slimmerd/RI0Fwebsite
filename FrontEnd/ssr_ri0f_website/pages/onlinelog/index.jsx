import React, {useState} from 'react'
import {OnlineLogPageNaming} from "../../components/OnlineLogPage/Blocks/Naming_onlinelogpage";
import {OnlineLogPageStub} from "../../components/OnlineLogPage/Blocks/Stub_onlinelogpage";
import {OnlineLogTable} from "../../components/OnlineLogPage/Blocks/Table_onlinelog";

//TODO: Change when table will be uploaded (change state from admin panel)
const OnlineLogPage = () => {
    const [stub, showStub] = useState(true)

    return (
        <div>
            <OnlineLogPageNaming/>
            {stub ? <OnlineLogPageStub/> : <OnlineLogTable/>}
        </div>
    )
}

export default OnlineLogPage