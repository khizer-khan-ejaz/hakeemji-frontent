import React from 'react'

const Gallery = () => {
  return (
    <>
     <h2 style={{ color: "#65aaa1", textAlign: "center" }}>Gallery</h2>
     <div className="divider mb-3" style={{ background: "#65aaa1" ,margin:"0,auto" }}></div>
<div className='container' >
      <div className="grid-container">
  <div className="card">
    <img src="/images/cause-4.jpg" alt="Visit to IIT Delhi" />
    <div className="card-caption">Visit to IIT Delhi, Sonipat Campus</div>
  </div>
  <div className="card">
    <img src="/images/cause-4.jpg" alt="Plantation drive" />
    <div className="card-caption">Plantation drive at Jamia Hamdard</div>
  </div>
  <div className="card">
    <img src="/images/cause-4.jpg" alt="Training of Students" />
    <div className="card-caption">Bedside training of Students</div>
  </div>
  <div className="card">
    <img
      src="/images/cause-4.jpg"
      alt="Clinical demonstration"
    />
    <div className="card-caption">
      Clinical demonstration of Diabetic Foot patient
    </div>
  </div>
  <div className="card">
    <img
      src="/images/cause-5.jpg"
      alt="Diabetic Foot Patient"
    />
    <div className="card-caption">
      Clinical demonstration of Diabetic Foot patient
    </div>
  </div>
  <div className="card">
    <img src="/images/cause-4.jpg" alt="NCISM Workshop" />
    <div className="card-caption">
      NCISM Workshop, with Stakeholders of NCISM
    </div>
  </div>
</div>
</div>
    </>
  )
}

export default Gallery
