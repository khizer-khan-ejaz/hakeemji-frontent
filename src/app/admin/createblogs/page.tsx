"use client"

import AdminCreateBlogs from '@/Components/AdminSection/AdminCreateBlogs'
import {useSearchParams} from "next/navigation"
import React, { useEffect, useState } from 'react'

const CreateBlogs = () => {

	// const blogDataToBeEdited = useSearchParams();
	const[blogData , setBlogData] = useState();


	// useEffect(() => {
	// 	const encoded = blogDataToBeEdited.get('blogData');
	// 	if (encoded) {
	// 	  try {
	// 		const decoded = JSON.parse(decodeURIComponent(encoded));
	// 		setBlogData(decoded)
	// 		console.log("decoded blog data is " , decoded)
	// 	  } catch (err) {
	// 		console.error("Failed to decode blogData:", err);
	// 	  }
	// 	}
	//   }, [blogDataToBeEdited]);

	// fetching the prev blgog data..
	useEffect(()=>{
		try{

		}catch(err){
			console.log("Error in useEffect while fetcing the prev data " , err.message)
		}
	})

  return (
	<div>
		 <AdminCreateBlogs prevBlog={blogData} />
	</div>
  )
}

export default CreateBlogs
