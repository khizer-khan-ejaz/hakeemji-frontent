import axios from 'axios';
import React from 'react';
import { MdCancel } from "react-icons/md";

const Gallery = ({ setAllGalleries, gallery }) => {

	const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

	const handleDeleteGallery = async (e) => {
		try {
			e.stopPropagation();
			const res = await axios({
				url: `${backendUrl}/gallery/delete/${gallery._id}`,
				method: "delete"
			})
			setAllGalleries(prev => {
				return prev.filter(p => {
					return p._id != gallery._id
				})
			})
		} catch (err) {
			console.log("Error in handleDeleteGallery ", err)
		}
	}

	return (
		<div className="max-h-[300px] h-full relative rounded-lg shadow-xl overflow-hidden">

			{/* Gallery Image Container */}
			<div className="h-full w-full">
				<img className="object-cover h-full w-full rounded-lg" src={gallery.galleryImageUrl} alt="gallery-image" />
			</div>

			{/* Overlay covering only the bottom */}
			<div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-b from-transparent to-black/70"></div>

			{/* Description Container */}
			<div className="absolute bottom-4 left-4 right-4 text-white md:text-[18px] font-semibold text-lg z-10 overflow-auto scrollbar-hidden">
				{gallery.des}
			</div>

			{/* delete button container */}
			<div onClick={(e) => handleDeleteGallery(e)} className='absolute top-0 right-[4px] cursor-pointer z-[200] bg-black rounded-full'>
				<MdCancel size={"20px"} className='text-white' />
			</div>

		</div>
	);
};


export default Gallery;