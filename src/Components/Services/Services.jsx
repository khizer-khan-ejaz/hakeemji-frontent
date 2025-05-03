import React from 'react'

const Services = () => {
 return (
  <>
   <section className="section service gray-bg"  id='services'>
    <div className="container">
     <div className="row justify-content-center">
      <div className="col-lg-7 text-center">
       <div className="section-title">
        <h2 style={{ color: "#65aaa1" }}>Services</h2>
        <div style={{ background: "#65aaa1" }} className="divider mx-auto my-4"></div>
        <p>Comprehensive Healthcare Services at Hakeem Naushaad Ali Rana Clinic</p>
       </div>
      </div>
     </div>

     <div className="row">
      <div className="col-lg-4 col-md-6 col-sm-6">
       <div className="service-item mb-4">
        <div className="icon d-flex align-items-center">
        <img src="https://img.icons8.com/ios-filled/50/65aaa1/liver.png" alt="liver" className="w-10 h-10" />


         <h4 className="mt-3 mb-3">Liver care</h4>
        </div>

        <div className="content">
         <p className="mb-4">The liver plays a vital role in detoxifying the body, digesting fats, and storing nutrients. </p>
        </div>
       </div>
      </div>

      <div className="col-lg-4 col-md-6 col-sm-6">
       <div className="service-item mb-4">
        <div className="icon d-flex align-items-center">
         <i className="icofont icofont-stomach text-lg" style={{ color: "#65aaa1" }}></i>


         <h4 className="mt-3 mb-3">Digestive Care</h4>
        </div>
        <div className="content">
         <p className="mb-4"> Digestive care focuses on maintaining a healthy gut to ensure proper digestion and nutrient absorption.</p>
        </div>
       </div>
      </div>

      <div className="col-lg-4 col-md-6 col-sm-6">
       <div className="service-item mb-4">
        <div className="icon d-flex align-items-center">
        <i className="icofont icofont-brain-alt text-lg" style={{ color: "#65aaa1" }}></i>

         <h4 className="mt-3 mb-3">Neuro care</h4>
        </div>
        <div className="content">
         <p className="mb-4">Neuro care focuses on the health of the brain, spinal cord, and nervous system.</p>
        </div>
       </div>
      </div>


      <div className="col-lg-4 col-md-6 col-sm-6">
       <div className="service-item mb-4">
        <div className="icon d-flex align-items-center">
        <i className="icofont icofont-muscle-weight text-lg" style={{ color: "#65aaa1" }}></i>

         <h4 className="mt-3 mb-3">Men health</h4>
        </div>

        <div className="content">
         <p className="mb-4">Men’s health focuses on physical, mental, and emotional well-being throughout all stages of life. Key aspects include regular exercise, a balanced diet, routine health check-ups, stress management, and maintaining healthy lifestyle habits</p>
        </div>
       </div>
      </div>

    
     </div>
    </div>
   </section>
  </>
 )
}

export default Services