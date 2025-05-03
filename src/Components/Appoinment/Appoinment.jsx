"use client"

import { convertDateIntoISOFormat } from '@/lib/utils/formatDate'
import { showToast } from '@/lib/utils/toast'
import axios from 'axios'
import React, { useState } from 'react'

const Appoinment = () => {

    const[appoinmentInfo , setAppointmentInfo] = useState({
        name : "",
        phone : "",
        email : "",
        service : "",
        clinicAddress : "",
        date : "",
        message : "",
        time : ""
    })

    const setTheState = (e, field)=>{
        setAppointmentInfo(prev=>{
            return {...prev , [field] : e.target.value}
        })
    }
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

    const handleSubmitAppointment = async()=>{
        try{
            setAppointmentInfo(prev=>{
                return {...prev , date : convertDateIntoISOFormat(prev.date)}
            })

            const res = await axios({
                url : `${backendUrl}/contact/register`,
                method : "post",
                data : appoinmentInfo
            })
            if(!res.data?.success) {
                showToast(res.data?.message , false)
                return 
            }
            setAppointmentInfo({name: "",phone: "",email: "",service: "",clinicAddress: "",date: "",message: "",time: ""})
            showToast(res.data?.message || "Appointment Submit" , true )

        }catch(err){
            console.log("Error in handleSubmitAppointment " , err.message)
            showToast(err.message , false)
        }
    }

 return (
  <>
   <section className="section appoinment" id='appoinment'>
    <div className="container">
     <div className="row align-items-center">
      <div className="col-lg-6">
       <div className="appoinment-content flex justify-center items-center">
        <img src="/images/lastphoto.jpg" alt="" className="img-fluid" />
        <div className="emergency"style={{ background: "#65aaa1" }}>
         <h2 className="text-[20px] md:text-[28px]"><i className="icofont icofont-phone-circle text-lg" ></i>+91 9990062706</h2>
        </div>
       </div>
      </div>
      <div className="col-lg-6 col-md-10 ">
       <div className="appoinment-wrap mt-5 mt-lg-0">
        <h2 className="mb-2 title-color" style={{ color: "#65aaa1" }}>Book appoinment</h2>
        <p className="mb-4">The process of booking an appointment is simple. Just fill out the form below, and we'll get back to you shortly.</p>
        <form id="#" className="appoinment-form" method="post" action="#">
         <div className="row">
          <div className="col-lg-6">
           <div className="form-group">
            <select value={appoinmentInfo.clinicAddress} onChange={(e)=>setTheState(e , "clinicAddress")} className="form-control" id="exampleFormControlSelect1">
             <option>Choose Clinic</option>
             <option>Newyork,USA</option>
             <option>London,UK</option>
            </select>
           </div>
          </div>
          <div className="col-lg-6">
           <div className="form-group">
            <select value={appoinmentInfo.service} onChange={(e)=> setTheState(e , "service")} className="form-control" id="exampleFormControlSelect2">
             <option>Select Services</option>
             <option>Comprehensive Physical Examinations:</option>
             <option>Preventive Care and Wellness</option>
             <option>Chronic Disease Management</option>
             <option>Acute Illness Management</option>
             <option>Medication Management</option>
             <option>Diagnostic Testing</option>
             <option>Telemedicine Consultations</option>
             <option>Nutritional Guidance</option>
             <option>Mental Health Support</option>
            </select>
           </div>
          </div>

          <div className="col-lg-6">
           <div className="form-group">
            <input value={appoinmentInfo.date} onChange={(e)=> setTheState(e , "date")} name="date" id="date" type="text" className="form-control" placeholder="dd-mm-yyyy" />
           </div>
          </div>

          <div className="col-lg-6">
           <div className="form-group">
            <input value={appoinmentInfo.time} onChange={(e)=> setTheState(e , "time")} name="time" id="time" type="text" className="form-control" placeholder="Time" />
           </div>
          </div>
          <div className="col-lg-6">
           <div className="form-group">
            <input value={appoinmentInfo.name} onChange={(e)=> setTheState(e , "name")} name="name" id="name" type="text" className="form-control" placeholder="Full Name" />
           </div>
          </div>

          <div className="col-lg-6">
           <div className="form-group">
            <input value={appoinmentInfo.phone} onChange={(e)=> setTheState(e , "phone")} name="phone" id="phone" type="Number" className="form-control" placeholder="Phone Number" />
           </div>
          </div>
         </div>
         <div className="form-group-2 mb-4">
          <textarea  value={appoinmentInfo.message} onChange={(e)=> setTheState(e , "message")}  name="message" id="message" className="form-control" rows="6" placeholder="Your Message"></textarea>
         </div>

         <a onClick={(e)=> handleSubmitAppointment(e)} className="btn btn-main btn-round-full" href="#"  style={{ background: "#65aaa1", border: "#db4733" }}>Make Appoinment <i className="icofont icofont-simple-right ml-2  "></i></a>
        </form>
       </div>
      </div>
     </div>
    </div>
   </section>
  </>
 )
}

export default Appoinment