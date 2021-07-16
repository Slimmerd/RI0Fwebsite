import {TeamPageNaming} from "../../components/TeamPage/Blocks/Naming_teampage";
import {TeamPageMembers} from "../../components/TeamPage/Blocks/Member_teampage";
import {NextSeo} from "next-seo";
import {MAIN_SEO} from "../../utils/SEO_headers";
import SEOHeaders from "../../utils/seo_headers.json"
import useTranslation from "next-translate/useTranslation";

const TeamPage = () => {
    const {lang} = useTranslation()

    return (
        <>
            <NextSeo {...MAIN_SEO(lang, SEOHeaders.team.ru, SEOHeaders.team.en)}/>
            <TeamPageNaming/>
            <TeamPageMembers/>
        </>
    )
}

export default TeamPage