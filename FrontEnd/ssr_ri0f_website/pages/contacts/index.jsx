import React from 'react'
import {ContactPageNaming} from "../../components/ContactsPage/Blocks/Naming_contactspage";
import {ContactPageExpQ} from "../../components/ContactsPage/Blocks/ExpQ_contactspage";
import {ContactPageSiteQ} from "../../components/ContactsPage/Blocks/siteQ_contactspage";

const Contacts = () => {
    return (
        <div>
            <ContactPageNaming/>
            <ContactPageExpQ/>
            <ContactPageSiteQ/>
        </div>
    )
}

export default Contacts