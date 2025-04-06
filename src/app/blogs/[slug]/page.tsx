"use client"

import React, { useEffect, useState } from 'react'
import { useParams } from "next/navigation"
import axios from 'axios';
import LoadingComp from '@/Components/LoadingComp';
import { CiCalendarDate } from "react-icons/ci";
import { formatDate } from '@/lib/utils/formatDate';
import { CiEdit } from "react-icons/ci";
import {useRouter} from "next/navigation"

const BlogPage = () => {

	const { slug } = useParams();
	const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
	const [blog, setBlog] = useState(undefined)
	const [loading, setLoading] = useState(true)

	const user = localStorage.getItem("admin") || undefined
	const router = useRouter();

	const getBlogByParams = async () => {
		try {

			const res = await axios({
				url: `${backendUrl}/blogs/${slug}`,
				method: "get"
			})
			console.log("blog is ", res.data?.data)
			setBlog(res.data?.data);

		} catch (err) {
			console.log("Error in getBlogByParams ", err);
		} finally {
			setLoading(false);
		}
	}

	useEffect(() => {
		getBlogByParams();
	}, [slug])


	const ContentContainer = ({heading , des , list} : {heading : string , des : undefined | string , list : undefined | string[]})=>{

		return <div className='w-[90%]'>
			{/* content heading content */}
			<div className='w-full'>
				<h3 className='font-semibold md:text-[20px]'> {heading} </h3>
			</div>

			{/* container for des */}
			{des && <div className='w-full'>
					<p className='md:text-[15px]'> {des} </p>
			</div>}

			{/* container for lists */}
			{list && <div className='w-full'>
				<ul className='w-full list-disc ml-[25px]'>
				{list.map((l , index : number)=>{
					return <li key={index} className='w-full md:text-[15px] px-[5px] py-[10px]'> {l} </li>
				})}
				</ul>
			</div>}

		</div>
	}

	const handleClickEditButton = async()=>{
		try{
			const encodedData = encodeURIComponent(JSON.stringify(blog));
			router.push(`/admin/createblogs?blogData=${encodedData}`)
		}catch(err){
			console.log("Error in handleClickEditButton " , err.message)
		}
	}

	return (
		<div className='h-[100vh] w-[100vw] flex justify-center items-center bg-gray-100'>

			{!loading ? (blog  ? <div className='scrollbar-hidden mt-auto w-[95%] h-[95%] md:w-[60%] md:h-[85%] overflow-scroll bg-white rounded-lg flex justify-start items-center flex-col gap-[15px]'>

				{/* container for the title of blog */}
				<div className='w-ful flex justify-center items-center mt-[15px]'>
					<h1 className='font-semibold md:text-[30px]'>{blog.title}</h1>
				</div>

				{/* container for image in blog */}
				<div className='md:h-[300px] w-[90%]'>
					<img className='h-full w-full object-cover rounded-md' src={`${blog.url}`} alt="blog-image" />
				</div>

				{/* blog publish details */}
				<div className='w-[90%] flex gap-[10px] justify-start items-center'>
					<CiCalendarDate size={"20px"} /> <span className=' text-[12px] md:text-[15px]'> {formatDate(blog.createdAt)} </span>
					{user && <CiEdit onClick={handleClickEditButton} size={"20px"} className='cursor-pointer' />}
				</div>

				{/* blogs description container */}
				<div className='w-[90%]'>
					<p className='md:text-[15px]'> {blog.des} </p>
				</div>

				{/* blogs content container */}
				<div className='w-[90%] flex flex-col gap-[10px] py-[10px]'>
					{blog?.content?.map((cont , index : number)=>{
						return(
							<div key={index}>
								<ContentContainer  heading={cont.heading} des={cont.des} list={cont.list} />
							</div>
							)

					})}
				</div>

			</div> : <div className='w-full h-full flex justify-center items-center'> <h2>OOPS NO BLOG FOUND FOR THIS SLUG</h2> </div>) : <LoadingComp/>}

		</div>
	)
}

export default BlogPage
