import React from 'react'
import GalleryContainer from './GalleryContainer';
import axios from "axios"

const FetchGallerySSR = async() => {
	let galleries = [];
	const res = await axios({
		url : `${process.env.NEXT_PUBLIC_BACKEND_URL}/gallery`,
		method : "get"
	})
	galleries = res.data?.data;

	return <GalleryContainer galleries={galleries} />

}

export default FetchGallerySSR
