import React from 'react'

const Features = () => {
 return (
  <>
   <section className="features">
    <div className="container">
     <div className="row">
      <div className="col-lg-12">
       <div className="feature-block d-lg-flex">
        <div className="feature-item mb-5 mb-lg-0">
         <div className="feature-icon mb-4">
         <i className="icofont icofont-surgeon-alt" style={{ color: "#65aaa1" }}></i>

         </div>
         
         <h4 className="mb-3">Clinic Address </h4>
         <p className="mb-4">Hamdard Wellness, Hamdard Building, 2A/3 - Asaf Ali Road, New Delhi, India, 110002</p>
         <a href="/contact" className="btn btn-main btn-round-full" style={{ background: "#65aaa1",  border:"#65aaa1"}}>Make a appoinment</a>
        </div>

        <div className="feature-item mb-5 mb-lg-0">
         <div className="feature-icon mb-4">
          <i className="icofont icofont-ui-clock" style={{ color: "#65aaa1" }}></i>
         </div>
         <span>Timing schedule</span>
         <h4 className="mb-3">Working Hours</h4>
         <ul className="w-hours list-unstyled">
          <li className="d-flex justify-content-between">Mon - Sat : <span>10:30 - 19:00</span></li>
         
          <li className="d-flex justify-content-between">Lunch Timing <span>14:00 - 15:00   </span></li>

         </ul>
        </div>

        <div className="feature-item mb-5 mb-lg-0">
         <div className="feature-icon mb-4">
          <i className="icofont icofont-support" style={{ color: "#65aaa1" }}></i>
         </div>
         <span>Contact number for appoinment</span>
         <h4 className="mb-3">01123239801</h4>
         <p></p>
        </div>
       </div>
      </div>
     </div>
    </div>
   </section>
  </>
 )
}

export default Features
