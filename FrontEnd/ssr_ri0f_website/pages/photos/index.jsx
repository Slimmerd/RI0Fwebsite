import React from 'react'
import {getPosts} from "../../redux/gallery-reducer";
import {PhotosPageNaming} from "../../components/PhotosPage/Blocks/Naming_photospage";
import {PhotosPageStub} from "../../components/PhotosPage/Blocks/Stub_photospage";
import {PhotosPageAction} from "../../components/PhotosPage/Blocks/Action_photospage";
import store from "../../redux/redux-store";
import Loading from "../../components/common/Loading";

const PhotosPage = ({galleryPosts}) => {

    if (!galleryPosts) {
        return (
            <Loading/>
        )
    }

    return (
        <div>
            <PhotosPageNaming/>
            {!galleryPosts ? <PhotosPageStub/> : galleryPosts.map((p, i) => <PhotosPageAction post={p} key={i}/>)}
        </div>
    )
}

export const getServerSideProps = async () => {
    const {dispatch, getState} = store
    await dispatch(getPosts())
    const galleryPosts = getState().gallery.posts

    return {
        props: {galleryPosts},
    }

}


export default PhotosPage