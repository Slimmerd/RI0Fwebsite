import React from 'react'
import {ContactPageNaming} from "../../components/ContactsPage/Blocks/Naming_contactspage";
import {ContactPageExpQ} from "../../components/ContactsPage/Blocks/ExpQ_contactspage";
import {ContactPageSiteQ} from "../../components/ContactsPage/Blocks/siteQ_contactspage";
import useTranslation from "next-translate/useTranslation";
import {NextSeo} from "next-seo";
import {MAIN_SEO} from "../../utils/SEO_headers";
import SEOHeaders from "../../utils/seo_headers.json"

const Contacts = () => {
    const {lang} = useTranslation()

    return (
        <>
            <NextSeo {...MAIN_SEO(lang, SEOHeaders.contacts.ru, SEOHeaders.contacts.en)}/>
            <ContactPageNaming/>
            <ContactPageExpQ/>
            <ContactPageSiteQ/>
        </>
    )
}

export default Contacts