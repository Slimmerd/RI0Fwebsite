import "../styles/antd-custom.less";
import {Provider} from 'react-redux'
import store from "../redux/redux-store";
import {DefaultSeo} from "next-seo";
import {SEO} from "../next-seo.config";
import Head from "next/head";
import {MainLayout} from "../Layouts/MainLayout";

function MyApp({Component, pageProps}) {
    const Layout = Component.layout || MainLayout


    return (
        <Provider store={store}>
            <Head>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <DefaultSeo {...SEO} />
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Provider>
    )
}

export default MyApp
