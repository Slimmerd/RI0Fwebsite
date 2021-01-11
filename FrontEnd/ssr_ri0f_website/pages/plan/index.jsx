import {PlanPageNaming} from "../../components/PlanPage/Blocks/Naming_planpage";
import {PlanPageCardsBlock} from "../../components/PlanPage/Blocks/CardsBlock_planpage";
import {NextSeo} from "next-seo";
import {MAIN_SEO} from "../../utils/SEO_headers";
import {plan} from "../../utils/seo_headers.json"
import useTranslation from "next-translate/useTranslation";

const PlanPage = () => {
    const {lang} = useTranslation()

    return (
        <>
            <NextSeo {...MAIN_SEO(lang, plan.ru, plan.en)}/>
            <PlanPageNaming/>
            <PlanPageCardsBlock/>
        </>
    )
}

export default PlanPage