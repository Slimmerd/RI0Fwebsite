import {DonatePageNaming} from "../../components/DonatePage/Blocks/Naming_donatepage";
import {DonatePageMethods} from "../../components/DonatePage/Blocks/Methods_donatepage";
import {DonatePageMainSponsors} from "../../components/DonatePage/Blocks/MainSponsors_donatepage";
import {DonatePageSecondarySponsors} from "../../components/DonatePage/Blocks/SecondarySponsors_donatepage";
import {NextSeo} from "next-seo";
import {MAIN_SEO} from "../../utils/SEO_headers";
import SEOHeaders from "../../utils/seo_headers.json"
import useTranslation from "next-translate/useTranslation";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getSponsors} from "../../redux/sponsors-reducer";

const DonatePage = () => {
    const {lang} = useTranslation()
    const sponsors = useSelector(state => state.sponsors.posts)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getSponsors())
    }, [dispatch])

    return (
        <>
            <NextSeo {...MAIN_SEO(lang, SEOHeaders.donate.ru, SEOHeaders.donate.en)}/>
            <DonatePageNaming/>
            <DonatePageMethods/>
            <DonatePageMainSponsors sponsors={sponsors}/>
            <DonatePageSecondarySponsors sponsors={sponsors}/>
        </>
    )
}

export default DonatePage