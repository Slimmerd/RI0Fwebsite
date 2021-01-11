import {QSLPageNaming} from "../../components/QSLPage/Blocks/Naming_qslpage";
import {QSLPageSendingReq} from "../../components/QSLPage/Blocks/SendingReq_qslpage";
import {QSLPageManager} from "../../components/QSLPage/Blocks/Manager_qslpage";
import {NextSeo} from "next-seo";
import {MAIN_SEO} from "../../utils/SEO_headers";
import {qsl} from "../../utils/seo_headers.json"
import useTranslation from "next-translate/useTranslation";

const QSLPage = () => {
    const {lang} = useTranslation()

    return (
        <>
            <NextSeo {...MAIN_SEO(lang, qsl.ru, qsl.en)}/>
            <QSLPageNaming/>
            <QSLPageSendingReq/>
            <QSLPageManager/>
        </>
    )
}

export default QSLPage