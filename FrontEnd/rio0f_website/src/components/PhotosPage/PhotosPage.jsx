import {Col, Row, Button} from "antd";
import styled from "styled-components";
import {PhotosPageNaming} from "./Blocks/Naming_photospage";
import {PhotosPageAction} from "./Blocks/Action_photospage";
import React from 'react'

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