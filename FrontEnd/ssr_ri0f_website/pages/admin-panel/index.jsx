import React from 'react'
import AdminLayout from "../../Layouts/AdminLayout";
import {NextSeo} from "next-seo";
import {ADMIN_SEO} from "../../utils/SEO_headers";

const AdminPanel = () => {
    const version = 0.5

    return (
        <>
            <NextSeo {...ADMIN_SEO}/>
            <h1>EXPEDITION WEBSITE ADMIN PANEL. BETA {version}</h1>
        </>
    )
}

AdminPanel.layout = AdminLayout

export default AdminPanel