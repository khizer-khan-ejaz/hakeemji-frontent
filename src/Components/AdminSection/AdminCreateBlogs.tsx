"use client"

import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { IoAdd } from "react-icons/io5";
import { CiImageOn } from "react-icons/ci";
import { convertImage } from "@/lib/utils/convertInputImageIntoBuffer"
import { MdCancel } from "react-icons/md";

interface ContentInfoType {
	heading: string
	des: string
	list: string[]
}




const ContentComp = ({ containerRef, content, setContent }) => {


	const [contentInfo, setContentInfo] = useState<ContentInfoType>({
		heading: "",
		des: "",
		list: []
	})


	const [isAddListClicked, setIsAddListClicked] = useState(false);
	const [point, setPoint] = useState("");

	useEffect(() => {
		if (containerRef.current) {
			containerRef.current.scrollTop = containerRef.current.scrollHeight - containerRef.current.clientHeight;
		}
	}, [contentInfo, isAddListClicked])

	const handleAddPoint = (e) => {
		e.preventDefault()
		if (!point) return
		setContentInfo(prev => {
			return { ...prev, list: [...prev.list, point] }
		})
		setPoint("");
	}

	const handleKeyPressing = (e) => {
		if (e.key == "Enter") {
			handleAddPoint(e)
		}
	}

	const handleContentFormSubmit = (e) => {
		e.preventDefault();
		if (!contentInfo.heading) return
		setContent(prev => {
			return [...prev, contentInfo]
		})
		setContentInfo(prev => {
			return { heading: "", des: "", list: [] }
		})
	}



	return (
		<div className='w-full h-full flex flex-col gap-[10px]'>

			{/* to show prev content */}
			{content.length > 0 && <div className='flex justify-center items-center'>
				<span className='md:text-[20px]'> Blogs Content </span>
			</div>}
			<div className='w-full flex flex-col gap-[10px]'>
				{content.map((c, index: number) => {
					return <div key={index} className='w-full flex flex-col gap-[5px] border-[1px] border-solid border-gray-200 rounded-lg p-[5px]'>
						{/* heading container */}
						<div className='w-full flex flex-col gap-[5px]'>
							<span className='p-[4px] font-[500] md:text-[18px] rounded-md '> {c.heading} </span>
						</div>

						{/* des container */}
						<div className='w-full flex flex-col gap-[5px]'>
							<span className=' p-[4px] rounded-md '> {c.des} </span>
						</div>

						{/* list container */}
						<div className='w-full flex flex-col gap-[5px]'>
							<ul className='list-disc ml-[25px]'>
								{c.list.map((l, index: number) => {
									return <li className='px-[10px] py-[7px] rounded-md' key={index}> {l} </li>
								})}
							</ul>
						</div>
					</div>
				})}
			</div>

			<div className='w-full flex justify-center items-center'>
				<span className='w-full text-center md:text-[20px]'>Add content of the blog</span>
			</div>
			{/* to add new content */}
			<form onSubmit={(e) => handleContentFormSubmit(e)} className='flex flex-col gap-[5px]'>
				{/* heading container */}
				<div className='w-full flex flex-col gap-[5px]'>
					<span>* Enter the heading</span>
					<input value={contentInfo.heading} onChange={(e) => setContentInfo(prev => ({ ...prev, heading: e.target.value }))} className='bg-gray-50 p-[10px] border-[1px] border-solid border-gray-200 rounded-md ' type="text" placeholder='heading' />
				</div>

				{/* des container */}
				<div className='w-full flex flex-col gap-[5px]'>
					<span>Enter the Description</span>
					<textarea value={contentInfo.des} onChange={(e) => setContentInfo(prev => ({ ...prev, des: e.target.value }))} className='bg-gray-50 p-[10px] border-[1px] border-solid border-gray-200 rounded-md ' placeholder='description' />
				</div>

				{/* list container */}
				<div className='w-full flex flex-col gap-[5px]'>
					{!isAddListClicked && <button onClick={() => setIsAddListClicked(prev => !prev)} className='px-[5px] py-[8px] bg-green-400 text-white font-semibold rounded-md' >Add Points</button>}
					{isAddListClicked && <div className='w-full flex flex-col gap-[5px]'>

						{/* this for displaying the previous points */}
						{/* {contentInfo.list.map((l , index : number)=>{
						<div key={index} className='w-full flex flex-col gap-[5px]'>
						<input value={l} type="text" />
					</div>
					})} */}

						{/* this for entering the new point */}
						<div className='w-full flex flex-col gap-[5px]'>
							<span>Enter points</span>

							{contentInfo.list.map((l, index: number) => {
								return <input key={index} value={l} className='bg-gray-50 p-[10px] border-[1px] border-solid border-gray-200 rounded-md ' type="text" placeholder='enter point' />
							})}

							<div className='w-full flex flex-col gap-[5px]'>
								<input onKeyDown={(e) => handleKeyPressing(e)} value={point} onChange={(e) => [setPoint(e.target.value)]} className='bg-gray-50 p-[10px] border-[1px] border-solid border-gray-200 rounded-md ' type="text" placeholder='enter point' />
								<button onClick={(e) => handleAddPoint(e)} className='bg-green-400 text-white font-semibold px-[5px] py-[8px] flex gap-[5px] justify-center items-center rounded-md' type='submit'>Add <IoAdd className='text-white' size={"20px"} /> </button>
							</div>
						</div>

					</div>}
				</div>

				<button type='submit' className='bg-green-400 text-white px-[5px] py-[8px] rounded-md font-semibold w-full mt-[10px]'> Add Content</button>

			</form>

		</div>
	)
}

const AdminCreateBlogs = () => {

	const [blogInfo, setBlogInfo] = useState({
		title: "",
		des: "",
		metaTitle: "",
		metaDescription: "",
		slug: "",
		coverImage: undefined
	})

	const [content, setContent] = useState([])

	const handleInputChange = (e, prop) => {
		setBlogInfo(prev => {
			return { ...prev, [prop]: e.target.value }
		})
	}

	const [isContentClicked, setIsContentClicked] = useState(false);

	const containerRef = useRef()
	const imageInputRef = useRef();
	const [imagePreview, setImagePreview] = useState<string>('');


	const handleCreateBlog = async () => {
		try {
			const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL
			const formData = new FormData()
			formData.append("title", blogInfo.title)
			formData.append("des", blogInfo.des)
			formData.append("metaTitle", blogInfo.metaTitle)
			formData.append("metaDescription", blogInfo.metaDescription)
			formData.append("slug", blogInfo.slug)
			formData.append("file", blogInfo.coverImage)
			formData.append("content", JSON.stringify(content))

			console.log("blgos data is ", formData)

			const res = await axios({
				url: `${backendUrl}/blogs/createnew`,
				method: "post",
				data: formData
			})

		} catch (err) {
			console.log("Error in handleCreateBlog ", err)
		}
	}

	const handleImageChange = (e) => {
		const ImageFile = e.target.files[0];
		console.log(ImageFile)
		setBlogInfo(prev => {
			return { ...prev, coverImage: ImageFile }
		})
		convertImage(ImageFile, setImagePreview);
	}

	const handleCancelImage = () => {
		setBlogInfo(prev => {
			return { ...prev, coverImage: undefined }
		})
		setImagePreview("")
		imageInputRef.current.value = ""
	}

	return (
		<div className='w-[100vw] mt-[10vh] h-[100vh] bg-white flex flex-col items-center justify-center'>

			<div ref={containerRef} className='w-full h-[90%] rounded-lg shadow-lg md:w-[50%] flex flex-col gap-[10px] justify-start items-center bg-white overflow-scroll scrollbar-hidden py-[10px]'>

				<h2 className='font-semibold md:text-[29px]'>Create Blog</h2>

				<div className='flex flex-col w-[90%] md:w-[70%] gap-[8px]'>
					<span>* Enter the Title of Blog</span>
					<input className='bg-gray-50 p-[10px] border-[1px] border-solid border-gray-200 rounded-md ' type="text" onChange={(e) => handleInputChange(e, "title")} placeholder='title' />
				</div>

				<div className='flex flex-col w-[90%] md:w-[70%] gap-[8px]'>
					<span>* Enter Cover Image of Blog</span>
					<input onChange={handleImageChange} ref={imageInputRef} type="file" hidden />
					{!imagePreview && <CiImageOn className='cursor-pointer' onClick={() => imageInputRef.current.click()} size={"25px"} />}
					{imagePreview && <div className='flex gap-[5px] relative'>
						<img src={imagePreview} alt="preview-image" className='object-contain h-full w-[90%] rounded-lg' />
						<span onClick={handleCancelImage} className='absolute cursor-pointer right-0 top-0' > <MdCancel size={"20px"} /> </span>
					</div>}
				</div>

				<div className='flex flex-col w-[90%] md:w-[70%] gap-[8px]'>
					<span>* Enter the slug for Blog</span>
					<input className='bg-gray-50 p-[10px] border-[1px] border-solid border-gray-200 rounded-md ' type="text" onChange={(e) => handleInputChange(e, "slug")} placeholder='slug' />
				</div>

				<div className='flex flex-col w-[90%] md:w-[70%] gap-[8px]'>
					<span>* Enter Blog Description</span>
					<input className='bg-gray-50 p-[10px] border-[1px] border-solid border-gray-200 rounded-md ' type="text" onChange={(e) => handleInputChange(e, "des")} placeholder='description' />
				</div>

				<div className='flex flex-col w-[90%] md:w-[70%] gap-[8px]'>
					<span>Enter meta title</span>
					<input className='bg-gray-50 p-[10px] border-[1px] border-solid border-gray-200 rounded-md ' type="text" onChange={(e) => handleInputChange(e, "metaTitle")} placeholder='meta title' />
				</div>

				<div className='flex flex-col w-[90%] md:w-[70%] gap-[8px]'>
					<span>Enter meta description</span>
					<textarea className='bg-gray-50 p-[10px] border-[1px] border-solid border-gray-200 rounded-md ' type="text" onChange={(e) => handleInputChange(e, "metaDescription")} placeholder='meta description' />
				</div>

				{/* area for content */}

				<div className='flex flex-col w-[90%] md:w-[70%] gap-[10px]'>
					{!isContentClicked && <button onClick={() => setIsContentClicked(prev => !prev)} className='cursor-pointer bg-green-400 text-white px-[5px] py-[8px] rounded-md font-semibold'>Add Content</button>}
					{isContentClicked && <ContentComp containerRef={containerRef} content={content} setContent={setContent} />}
				</div>

				{/* blog submit button container */}
				<div className='md:w-[50%] w-[90%] flex justify-center items-center'>
					<button onClick={handleCreateBlog} className='md:text-[18px] w-[80%] px-[10px] py-[8px] rounded-md bg-blue-400 text-white font-semibold'> Submit Blog </button>
				</div>

			</div>




		</div>
	)
}

export default AdminCreateBlogs
