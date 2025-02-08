import axios from 'axios'
import React from 'react'
import BlogsContainer from './BlogsContainer'

const BlogsContainerForFetcingBlogsSSR = async() => {

	let blogs = [];
	const res = await axios({
		url : `${process.env.NEXT_PUBLIC_BACKEND_URL}/blogs`,
		method : "get"
	})
	blogs = res.data?.data;
  return <BlogsContainer allBlogs={blogs}/>
}

export default BlogsContainerForFetcingBlogsSSR
