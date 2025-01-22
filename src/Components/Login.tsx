"use client"

import React, { useState } from 'react'

const Login = () => {

	const[email , setEmail] = useState<string>("")
	const[password , setPassword] = useState<string>("")

	const handleLogin = async()=>{
	}

	const handleForgetPassword = async()=>{
	}

	const handleChangeSecretCode = async()=>{
	}
	
  return (
	<div className='flex justify-center items-center p-2'>

		<div className='md:w-[40%] h-max flex flex-col justify-center items-center gap-[10px] p-4'>

		<h2 className='text-center w-full md:text-[35px] font-semibold'>Login</h2>

		<div className='flex flex-col justify-center items-start gap-[20px] p-2 w-[80%]'>
			
			<div className='flex flex-col justify-center items-start w-full'>
			<span>Email</span>
			<input onChange={(e)=>setEmail(e.target.value)} className='focus:bg-gray-50 cursor-pointer transition-all duration-400 focus:shadow-md focus:border-[1px] focus:border-gray-400 box-border outline-none w-full border-[1px] border-solid border-gray-200 rounded-lg p-[10px]' type="text" placeholder='enter your email' />
			</div>

			<div className='flex flex-col justify-center items-start w-full'>
			<span>Password</span>
			<input onChange={(e)=> setPassword(e.target.value)} className='focus:bg-gray-50 cursor-pointer transition-all duration-400 focus:shadow-md focus:border-[1px] focus:border-gray-400 box-border w-full outline-none border-[1px] border-solid border-gray-200 rounded-lg p-[10px]' type="password" placeholder='enter password' />
			</div>
		</div>

		<div className='w-full flex justify-center items-center'>
		<button onClick={handleLogin} className='bg-green-500 md:w-[40%] rounded-md py-[10px] font-semibold md:text-[20px] text-white' > Login </button>
		</div>

		</div>

	</div>
  )
}

export default Login
