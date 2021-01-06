import './App.less';
import {
    Route,
    Switch,
    useLocation,
    withRouter,
    useRouteMatch,
    BrowserRouter,
} from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import {MainPage} from "./components/MainPage/mainpage";
import {Footer} from "./components/Footer/Footer";
import {NewsPage} from "./components/NewsPage/NewsPage";
import {DonatePage} from "./components/DonatePage/DonatePage";
import {ContactsPage} from "./components/ContactsPage/ContactsPage";
import {PhotosPage} from "./components/PhotosPage/PhotosPage";
import {QSLPage} from "./components/QSLPage/QSLPage";
import {PlanPage} from "./components/PlanPage/PlanPage";
import {HardwarePage} from "./components/HardwarePage/HardwarePage";
import {TeamPage} from "./components/TeamPage/TeamPage";
import {ActualNewsPage} from "./components/NewsPage/ActualNewsPage/ActualNewsPage";
import {OnlineLogPage} from "./components/OnlineLogPage/OnlineLogPage";
import {ChatPage} from "./components/ChatPage/ChatPage";
import React, {Suspense, useEffect} from "react";
import {Login as LoginPage} from "./components/AdminPanel/LoginPage/LoginPage";
import {compose} from "redux";
import AdminPanel from "./components/AdminPanel/AdminPanel/AdminPanel";
import Error404 from "./components/common/404";
import Loading from "./components/common/Loading";
import {Provider} from "react-redux";
import store from "./redux/redux-store";

function App() {
    let path = useRouteMatch("/admin/:path?");

    const ScrollToTop = () => {
        const {pathname} = useLocation();

        useEffect(() => {
            window.scrollTo(0, 0);
        }, [pathname]);

        return null
    }

    return (
        <Suspense fallback={<Loading/>}>
            <div className="app-wrapper">
                <ScrollToTop/>
                {path ? null : <HeaderContainer/>}
                <div className="app-wrapper-content">
                    <Switch>

                        <Route exact path="/" render={() => <MainPage/>}/>
                        <Route exact path="/news" render={() => <NewsPage/>}/>
                        <Route exact path="/donate" render={() => <DonatePage/>}/>
                        <Route exact path="/contacts" render={() => <ContactsPage/>}/>
                        <Route exact path="/photos" render={() => <PhotosPage/>}/>
                        <Route exact path="/qsl" render={() => <QSLPage/>}/>
                        <Route exact path="/plan" render={() => <PlanPage/>}/>
                        <Route exact path="/hardware" render={() => <HardwarePage/>}/>
                        <Route exact path="/team" render={() => <TeamPage/>}/>
                        <Route exact path="/news/:url?" render={() => <ActualNewsPage/>}/>
                        <Route exact path="/onlinelog" render={() => <OnlineLogPage/>}/>
                        <Route exact path="/chat" render={() => <ChatPage/>}/>

                        <Route exact path={'/admin/:path?'}>
                            <AdminPanel/>
                        </Route>
                        <Route exact path="/login" render={() => <LoginPage/>}/>

                        <Route render={() => <Error404/>}/>
                    </Switch>
                </div>
                {path ? null : <Footer/>}
            </div>
        </Suspense>
    );
}


const AppContainer = compose(withRouter)(App)

const Application = (
    <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
)

export default Application;
