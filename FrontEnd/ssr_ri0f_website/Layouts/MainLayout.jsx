import {Footer} from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import "../styles/antd-custom.less";

export function MainLayout({children}) {
    return (
        <>
            <Header/>
            <main>
                {children}
            </main>
            <Footer/>
        </>
    )
}