import React from 'react'
import {Col, Row, Button} from "antd";
import styled from "styled-components";
import {ContactPageNaming} from "./Blocks/Naming_contactspage";
import {ContactPageExpQ} from "./Blocks/ExpQ_contactspage";
import {ContactPageSiteQ} from "./Blocks/siteQ_contactspage";

export const ContactsPage = () => {
    return (
        <div>
            <ContactPageNaming/>
            <ContactPageExpQ/>
            <ContactPageSiteQ/>
        </div>
    )
}