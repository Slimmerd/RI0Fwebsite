import "../styles/antd-custom.less";
import {Provider} from 'react-redux'
import store from "../redux/redux-store";
import {DefaultSeo} from "next-seo";
import {SEO} from "../next-seo.config";
import Head from "next/head";
import {MainLayout} from "../Layouts/MainLayout";
import NextNprogress from 'nextjs-progressbar';

function MyApp({Component, pageProps}) {
    const Layout = Component.layout || MainLayout


    return (
        <Provider store={store}>
            <NextNprogress
                color="#ECF0F1"
                startPosition={0.3}
                stopDelayMs={200}
                height="3"
            />
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
