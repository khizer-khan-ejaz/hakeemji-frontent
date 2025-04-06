"use client"

import React from 'react'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toast = () => {
  return (
	<div>
	  <ToastContainer position="top-right" autoClose={3000} theme="colored" />
	</div>
  )
}

export default Toast
