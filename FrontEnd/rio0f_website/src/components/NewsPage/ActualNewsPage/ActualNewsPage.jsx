import React from 'react'
import {ActualNewsPageNaming} from "./Blocks/Naming_actualnewspage";
import {ActualNewsPagePicture} from "./Blocks/Picture_actualnewspage";
import {ActualNewsPageText} from "./Blocks/Text_actualnewspage";
import {ActualNewsPagePreviousNews} from "./Blocks/PreviousNews_actualnewspage";

export const ActualNewsPage = () => {
    return (
        <div>
            <ActualNewsPageNaming/>
            <ActualNewsPagePicture/>
            <ActualNewsPageText/>
            <ActualNewsPagePreviousNews/>
        </div>

    )
}
