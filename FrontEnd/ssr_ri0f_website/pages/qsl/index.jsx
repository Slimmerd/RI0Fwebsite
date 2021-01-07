import {QSLPageNaming} from "../../components/QSLPage/Blocks/Naming_qslpage";
import {QSLPageSendingReq} from "../../components/QSLPage/Blocks/SendingReq_qslpage";
import {QSLPageManager} from "../../components/QSLPage/Blocks/Manager_qslpage";

const QSLPage = () => {
    return (
        <div>
            <QSLPageNaming/>
            <QSLPageSendingReq/>
            <QSLPageManager/>
        </div>
    )
}

export default QSLPage