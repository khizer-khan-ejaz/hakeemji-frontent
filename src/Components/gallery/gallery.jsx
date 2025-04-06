"use client"

import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Gallery = () => {

  const[galleries , setGalleries] = useState([])

  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

  const fetchGalleries = async()=>{
    try{
      const res = await axios({
        url : `${backendUrl}/gallery`,
        method : "get"
      })
      setGalleries(res.data?.data);
    }catch(err){
      console.log("Error in fetchGallery " , err.message);
    }
  }

  console.log("gallery " , galleries)

  useEffect(()=>{
    fetchGalleries();
  },[])

  return (
    <>
      <h2 style={{ color: "#65aaa1", textAlign: "center" }}>Gallery</h2>
      <div className="divider mb-3" style={{ background: "#65aaa1", margin: "0,auto" }}></div>
      <div className='container' >
        <div className="grid-container">
          {galleries.length > 0 && galleries.slice(0,10).map((gallery , index)=>{
            return <div key={index} className="card">
             <img src={gallery.galleryImageUrl} alt="gallery-image" />
             <div className="card-caption"> {gallery.des} </div>
           </div>
          })}
        </div>
      </div>
    </>
  )
}

export default Gallery
