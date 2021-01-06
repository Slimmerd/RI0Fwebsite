import {Footer} from "../components/Footer/Footer";
import Header from "../components/Header/Header";

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