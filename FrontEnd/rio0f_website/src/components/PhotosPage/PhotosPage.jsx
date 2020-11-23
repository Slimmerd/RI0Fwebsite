import {Col, Row, Button} from "antd";
import styled from "styled-components";
import {PhotosPageNaming} from "./Blocks/Naming_photospage";
import {PhotosPageAction} from "./Blocks/Action_photospage";



export const PhotosPage = () =>{
    return(
        <div>
        <PhotosPageNaming/>
        <PhotosPageAction/>
        <PhotosPageAction/>
        <PhotosPageAction/>
        </div>
    )
}