import React, {useEffect} from 'react'
import {getPosts} from "../../redux/gallery-reducer";
import {PhotosPageNaming} from "../../components/PhotosPage/Blocks/Naming_photospage";
import {PhotosPageStub} from "../../components/PhotosPage/Blocks/Stub_photospage";
import {PhotosPageAction} from "../../components/PhotosPage/Blocks/Action_photospage";
import Loading from "../../components/common/Loading";
import useTranslation from "next-translate/useTranslation";
import {NextSeo} from "next-seo";
import {photos} from "../../utils/seo_headers.json"
import {MAIN_SEO} from "../../utils/SEO_headers";
import {useDispatch, useSelector} from "react-redux";

const PhotosPage = () => {
    const {lang} = useTranslation()
    const dispatch = useDispatch()
    const galleryPosts = useSelector(state => state.gallery.posts)

    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch])

    if (!galleryPosts) {
        return (
            <Loading/>
        )
    }

    return (
        <>
            <NextSeo {...MAIN_SEO(lang, photos.ru, photos.en)}/>
            <PhotosPageNaming/>
            {galleryPosts.length === 0 ? <PhotosPageStub/> : galleryPosts.map((p, i) => <PhotosPageAction post={p}
                                                                                                          key={i}/>)}
        </>
    )
}

export default PhotosPage