"use client";

import React from "react";
import CountUp from "react-countup";

const Counter = () => {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta position-relative">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="counter-stat">
                <i className="icofont icofont-doctor"></i>
                <span className="h3">
                  <CountUp end={1000} duration={3.5} separator="," />
                </span>
                <p>Happy People</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="counter-stat">
                <i className="icofont icofont-flag"></i>
                <span className="h3">
                  <CountUp end={100} duration={3.5} />
                </span>
                +
                <p>Surgery Completed</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="counter-stat">
                <i className="icofont icofont-badge"></i>
                <span className="h3">
                  <CountUp end={40} duration={3.5} />
                </span>
                +
                <p>Achievements</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="counter-stat">
                <i className="icofont icofont-globe"></i>
                <span className="h3">
                  <CountUp end={2} duration={2.5} />
                </span>
                <p>Worldwide Branches</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;
