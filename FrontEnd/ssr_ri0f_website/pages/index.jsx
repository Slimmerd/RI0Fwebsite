import {MainPageBlock1} from "../components/MainPage/Blocks/Block1/Block1";
import {MainPageBlock2} from "../components/MainPage/Blocks/Block 2/Block2";
import {MainPageBlock3} from "../components/MainPage/Blocks/Block 3/Block3";
import {MainPageBlock4} from "../components/MainPage/Blocks/Block 4/Block4";
import React from "react";
import {NextSeo} from "next-seo";
import {main} from "../utils/seo_headers.json"
import {MAIN_SEO} from "../utils/SEO_headers";
import useTranslation from "next-translate/useTranslation";

export default function Home() {
    const {lang} = useTranslation()

    return (
        <>
            <NextSeo {...MAIN_SEO(lang, main.ru, main.en)}/>
            <MainPageBlock1/>
            <MainPageBlock2/>
            <MainPageBlock3/>
            <MainPageBlock4/>
        </>
    )
}
