import React, {useState} from 'react'
import {OnlineLogPageNaming} from "../../components/OnlineLogPage/Blocks/Naming_onlinelogpage";
import {OnlineLogPageStub} from "../../components/OnlineLogPage/Blocks/Stub_onlinelogpage";
import {OnlineLogTable} from "../../components/OnlineLogPage/Blocks/Table_onlinelog";
import {NextSeo} from "next-seo";
import {MAIN_SEO} from "../../utils/SEO_headers";
import useTranslation from "next-translate/useTranslation";
import {onlinelog} from "../../utils/seo_headers.json"

//TODO: Change when table will be uploaded (change state from admin panel)
const OnlineLogPage = () => {
    const {lang} = useTranslation()
    const [stub, showStub] = useState(true)

    return (
        <>
            <NextSeo {...MAIN_SEO(lang, onlinelog.ru, onlinelog.en)}/>
            <OnlineLogPageNaming/>
            {stub ? <OnlineLogPageStub/> : <OnlineLogTable/>}
        </>
    )
}

export default OnlineLogPage