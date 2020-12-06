import logo from './logo.svg';
import './App.less';
import {Switch, Redirect, Route, BrowserRouter} from "react-router-dom";
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
import {AppAssa} from "./components/test";
import React,{ useEffect } from "react";

import { useLocation, useRouteMatch } from 'react-router-dom';
function App() {

   const ScrollToTop = () => {
        const { pathname } = useLocation();

        useEffect(() => {
            window.scrollTo(0, 0);
        }, [pathname]);

        return null
    }

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <ScrollToTop/>
                <HeaderContainer/>
                <div className="app-wrapper-content">
                    <Switch>
                        {/*<Route exact path="/" render={() => <Redirect to={'/profile'}/>}/>*/}
                        {/*<Route path="/profile/:userID?" render={withSuspense(ProfileContainer)}/>*/}

                        <Route exact path="/" render={() => <MainPage/>}/>
                        <Route exact path="/news" render={() => <NewsPage/>}/>
                        <Route exact path="/donate" render={() => <DonatePage/>}/>
                        <Route exact path="/contacts" render={() => <ContactsPage/>}/>
                        <Route exact path="/gallery" render={() => <PhotosPage/>}/>
                        <Route exact path="/qsl" render={() => <QSLPage/>}/>
                        <Route exact path="/plan" render={() => <PlanPage/>}/>
                        <Route exact path="/hardware" render={() => <HardwarePage/>}/>
                        <Route exact path="/team" render={() => <TeamPage/>}/>
                        <Route exact path="/news/act" render={() => <ActualNewsPage/>}/>
                        <Route exact path="/onlinelog" render={() => <OnlineLogPage/>}/>
                        <Route exact path="/chat" render={() => <ChatPage/>}/>
                        <Route exact path="/test" render={() => <AppAssa/>}/>

                        <Route render={() => <div>404 NOT Found</div>}/>
                    </Switch>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;