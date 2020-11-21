import logo from './logo.svg';
import './App.less';
import {Switch, Redirect, Route, BrowserRouter} from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import {MainPage} from "./components/MainPage/mainpage";
import {Footer} from "./components/Footer/Footer";

function App() {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <HeaderContainer/>
                <div className="app-wrapper-content">
                    <Switch>
                        {/*<Route exact path="/" render={() => <Redirect to={'/profile'}/>}/>*/}

                        {/*<Route path="/profile/:userID?" render={withSuspense(ProfileContainer)}/>*/}


                        <Route exact path="/" render={() => <MainPage/>}/>

                        <Route render={() => <div>404 NOT Found</div>}/>
                    </Switch>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
