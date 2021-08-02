import React from 'react'
import {OnlineLogPageNaming} from "../../components/OnlineLogPage/Blocks/Naming_onlinelogpage";
import {OnlineLogPageStub} from "../../components/OnlineLogPage/Blocks/Stub_onlinelogpage";
import {NextSeo} from "next-seo";
import {MAIN_SEO} from "../../utils/SEO_headers";
import useTranslation from "next-translate/useTranslation";
import SEOHeaders from "../../utils/seo_headers.json"

const OnlineLogPage = () => {
    const {lang} = useTranslation()

    return (
        <>
            <NextSeo {...MAIN_SEO(lang, SEOHeaders.onlinelog.ru, SEOHeaders.onlinelog.en)}/>
            <OnlineLogPageNaming/>
            <OnlineLogPageStub/>
        </>
    )
}

export default OnlineLogPage