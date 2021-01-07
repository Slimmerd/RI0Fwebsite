import {MainPageBlock1} from "../components/MainPage/Blocks/Block1/Block1";
import {MainPageBlock2} from "../components/MainPage/Blocks/Block 2/Block2";
import {MainPageBlock3} from "../components/MainPage/Blocks/Block 3/Block3";
import {MainPageBlock4} from "../components/MainPage/Blocks/Block 4/Block4";
import React from "react";


export default function Home() {
    return (
        <div className={'mainpage'}>
            <MainPageBlock1/>
            <MainPageBlock2/>
            <MainPageBlock3/>
            <MainPageBlock4/>
        </div>
    )
}
