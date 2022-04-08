import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";

import Login from "./Login";

function Home(){
    return (   

    <div className="home-banner margin-bottom-0" style={{background: '#28b661 url(https://via.placeholder.com/1920x900) no-repeat'}} data-overlay={4}>
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-xl-11 col-lg-12 col-md-12 col-sm-12 col-12">
        <div className="banner_caption text-center mb-5">
          <h1 className="banner_title ft-bold mb-1">The Most Exciting Jobs</h1>
          <p className="fs-md ft-medium">Your Dream Jobs is Waiting</p>
        </div>
        <form className="bg-white rounded p-1">
          <div className="row no-gutters">
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
              <div className="form-group mb-0 position-relative">
                <input type="text" className="form-control lg left-ico" placeholder="Job Title, Keyword or Company" />
                <i className="bnc-ico lni lni-search-alt" />
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
              <div className="form-group mb-0 position-relative">
                <input type="text" className="form-control lg left-ico" placeholder="Location or Zip Code" />
                <i className="bnc-ico lni lni-target" />
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
              <div className="form-group mb-0 position-relative">
                <select className="custom-select lg b-0">
                  <option value={1}>Choose Categories</option>
                  <option value={2}>Information Technology</option>
                  <option value={3}>Cloud Computing</option>
                  <option value={4}>Engineering Services</option>
                  <option value={5}>Healthcare/Pharma</option>
                  <option value={6}>Telecom/ Internet</option>
                  <option value={7}>Finance/Insurance</option>
                </select>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12">
              <div className="form-group mb-0 position-relative">
                <button className="btn full-width custom-height-lg theme-bg text-white fs-md" type="button">Find Job</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>

            
            
)
}



export default Home;