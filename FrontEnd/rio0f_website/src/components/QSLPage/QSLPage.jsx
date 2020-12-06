import React from 'react'
import {QSLPageNaming} from "./Blocks/Naming_qslpage";
import {QSLPageSendingReq} from "./Blocks/SendingReq_qslpage";
import {QSLPageManager} from "./Blocks/Manager_qslpage";

export const QSLPage = () =>{
    return(
        <div>
            <QSLPageNaming/>
            <QSLPageSendingReq/>
            <QSLPageManager/>
        </div>
    )
}