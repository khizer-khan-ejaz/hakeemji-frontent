"use client"

import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Gallery = () => {
  const [galleries, setGalleries] = useState([])
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

  // Check if user is logged in
  const checkUserAuthentication = () => {
    // Check for auth token in localStorage or cookies
    const token = localStorage.getItem('authToken') || getCookie('authToken')
    setIsLoggedIn(!!token)
  }
  
  // Helper function to get cookies if you're using cookies for auth
  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
  }

  const fetchGalleries = async() => {
    try {
      const res = await axios({
        url: `${backendUrl}/gallery`,
        method: "get"
      })
      setGalleries(res.data?.data);
    } catch(err) {
      console.log("Error in fetchGallery", err.message);
    }
  }
  
  const handleDeleteVideo = async(id) => {
    if (!isLoggedIn) {
      alert("Please login to delete videos");
      return;
    }
    
    try {
      await axios({
        url: `${backendUrl}/gallery/${id}`,
        method: "delete",
        headers: {
          Authorization: `Bearer ${localStorage.getItem('authToken') || getCookie('authToken')}`
        }
      });
      
      // Refresh galleries after deletion
      fetchGalleries();
    } catch(err) {
      console.log("Error deleting video", err.message);
    }
  }

  useEffect(() => {
    checkUserAuthentication();
    fetchGalleries();
  }, [])

  return (
    <>
      <h2 style={{ color: "#65aaa1", textAlign: "center" }}>Gallery</h2>
      <div className="divider mb-3" style={{ background: "#65aaa1", margin: "0 auto" }}></div>
      <div className='container'>
        <div className="grid-container">
          {galleries.length > 0 && galleries.slice(0, 10).map((gallery, index) => {
            return (
              <div key={index} className="card">
                <img src={gallery.galleryImageUrl} alt="gallery-image" />
                <div className="card-caption">{gallery.des}</div>
                <div className="card-actions">
                  {isLoggedIn ? (
                    <button 
                      onClick={() => handleDeleteVideo(gallery.id)}
                      className="delete-btn"
                    >
                      Delete
                    </button>
                  ) : (
                    <button 
                      onClick={() => alert("Please login to delete videos")}
                      className="delete-btn disabled"
                    >
                      Delete
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  )
}

export default Gallery