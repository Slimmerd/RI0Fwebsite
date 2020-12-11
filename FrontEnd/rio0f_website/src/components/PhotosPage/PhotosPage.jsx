import {PhotosPageNaming} from "./Blocks/Naming_photospage";
import {PhotosPageAction} from "./Blocks/Action_photospage";
import React, {useState} from 'react'
import {PhotosPageStub} from "./Blocks/Stub_photospage";

export const PhotosPage = () => {
    const [stab, showStab] = useState(false)

    return (
        <div>
            <PhotosPageNaming/>
            {stab ? <PhotosPageStub/> : [<PhotosPageAction/>,
                <PhotosPageAction/>,
                <PhotosPageAction/>]}
        </div>
    )
}