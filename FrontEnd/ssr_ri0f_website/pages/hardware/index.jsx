import {HardwarePageNaming} from "../../components/HardwarePage/Blocks/Naming_hardwarepage";
import {HardwarePageCardsBlock} from "../../components/HardwarePage/Blocks/CardsBlock_hardwarepage";
import {NextSeo} from "next-seo";
import {MAIN_SEO} from "../../utils/SEO_headers";
import {hardware} from "../../utils/seo_headers.json"
import useTranslation from "next-translate/useTranslation";

const HardwarePage = () => {
    const {lang} = useTranslation()

    return (
        <>
            <NextSeo {...MAIN_SEO(lang, hardware.ru, hardware.en)}/>
            <HardwarePageNaming/>
            <HardwarePageCardsBlock/>
        </>
    )
}

export default HardwarePage