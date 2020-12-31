import {PhotosPageNaming} from "./Blocks/Naming_photospage";
import {PhotosPageAction} from "./Blocks/Action_photospage";
import React, {useEffect} from 'react'
import {PhotosPageStub} from "./Blocks/Stub_photospage";
import {useDispatch, useSelector} from "react-redux";
import {getPosts} from "../../redux/gallery-reducer";

export const PhotosPage = () => {

    const dispatch = useDispatch()
    const galleryPosts = useSelector((state) => state.gallery.posts)

    useEffect(() => dispatch(getPosts()), [])

    return (
        <div>
            <PhotosPageNaming/>
            {!galleryPosts ? <PhotosPageStub/> : galleryPosts.map((p, i) => <PhotosPageAction post={p} key={i}/>)}
        </div>
    )
}