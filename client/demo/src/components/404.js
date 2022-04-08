import React from "react";

function errorHandler(){
    return (
        <div>
  {/* ============================================================== */}
  {/* Preloader - style you can find in spinners.css */}
  {/* ============================================================== */}
  <div className="preloader" />
  {/* ============================================================== */}
  {/* Main wrapper - style you can find in pages.scss */}
  {/* ============================================================== */}
  <div id="main-wrapper">
    {/* ============================================================== */}
    {/* Top header  */}
    {/* ============================================================== */}
    {/* Start Navigation */}
    <div className="header header-light dark-text">
      <div className="container">
        <nav id="navigation" className="navigation navigation-landscape">
          <div className="nav-header">
            <a className="nav-brand" href="#">
              <img src="./assets/img/logo.png" className="logo" alt />
            </a>
            <div className="nav-toggle" />
            <div className="mobile_nav">
              <ul>
                <li>
                  <a href="#" data-toggle="modal" data-target="#login" className="theme-cl fs-lg">
                    <i className="lni lni-user" />
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0);" data-toggle="modal" data-target="#login" className="crs_yuo12 w-auto text-white theme-bg">
                    <span className="embos_45"><i className="fas fa-plus-circle mr-1 mr-1" />Post Job</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="nav-menus-wrapper" style={{transitionProperty: 'none'}}>
            <ul className="nav-menu">
              <li><a href="#">Home</a>
                <ul className="nav-dropdown nav-submenu">
                  <li><a href="index.html">Home 1</a></li>
                  <li><a href="home-2.html">Home 2</a></li>
                  <li><a href="home-3.html">Home 3</a></li>
                  <li><a href="home-4.html">Home 4</a></li>
                  <li><a href="home-5.html">Home 5</a></li>
                  <li><a href="home-6.html">Home 6</a></li>
                  <li><a href="home-7.html">Home 7</a></li>
                  <li><a href="home-8.html">Home 8</a></li>
                </ul>
              </li>
              <li><a href="javascript:void(0);">Find Job</a>
                <ul className="nav-dropdown nav-submenu">
                  <li><a href="job-search-v1.html">Job Search V1</a></li>
                  <li><a href="job-search-v2.html">Job Search V2</a></li>
                  <li><a href="job-search-v3.html">Job Search V3</a></li>
                  <li><a href="job-list-v1.html">Job Search V4</a></li>
                  <li><a href="job-list-v2.html">Job Search V5</a></li>
                  <li><a href="job-list-v3.html">Job Search V6</a></li>
                  <li><a href="javascript:void(0);">Map Styles</a>
                    <ul className="nav-dropdown nav-submenu">
                      <li><a href="job-half-map.html">Search On Map V1</a></li>
                      <li><a href="job-half-map-v2.html">Search On Map V2</a></li>
                      <li><a href="job-search-map-v1.html">Search On Map V3</a></li>
                      <li><a href="job-search-map-v2.html">Search On Map V4</a></li>
                    </ul>
                  </li>
                  <li><a href="javascript:void(0);">Single Job</a>
                    <ul className="nav-dropdown nav-submenu">
                      <li><a href="single-job-1.html">Single Job V1</a></li>
                      <li><a href="single-job-2.html">Single Job V2</a></li>
                      <li><a href="single-job-3.html">Single Job V3</a></li>
                      <li><a href="single-job-4.html">Single Job V4</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li><a href="javascript:void(0);">Candidates</a>
                <ul className="nav-dropdown nav-submenu">
                  <li><a href="browse-jobs.html">Browse Jobs</a></li>
                  <li><a href="browse-resumes.html">Browse Resumes</a></li>
                  <li><a href="browse-category.html">Browse Categories</a></li>
                  <li><a href="candidate-detail.html">Candidate Detail</a></li>
                  <li><a href="candidate-dashboard.html">Candidate Dashboard</a></li>
                </ul>
              </li>
              <li><a href="javascript:void(0);">Employers</a>
                <ul className="nav-dropdown nav-submenu">
                  <li><a href="browse-employers.html">Browse Employers V1</a></li>
                  <li><a href="browse-employers-list.html">Browse Employers V2</a></li>
                  <li><a href="employer-detail.html">Employer Detail</a></li>
                  <li><a href="employer-dashboard.html">Employer Dashboard</a></li>
                </ul>
              </li>
              <li><a href="javascript:void(0);">Pages</a>
                <ul className="nav-dropdown nav-submenu">
                  <li><a href="blog.html">Blog Style</a></li>
                  <li><a href="about-us.html">About Us</a></li>
                  <li><a href="contact.html">Contact</a></li>
                  <li><a href="404.html">404 Page</a></li>
                  <li><a href="privacy.html">Privacy Policy</a></li>
                  <li><a href="faq.html">FAQs</a></li>
                  <li><a href="docs.html">Docs</a></li>
                </ul>
              </li>
            </ul>
            <ul className="nav-menu nav-menu-social align-to-right">
              <li>
                <a href="#" data-toggle="modal" data-target="#login" className="ft-medium">
                  <i className="lni lni-user mr-2" />Sign In
                </a>
              </li>
              <li className="add-listing theme-bg">
                <a href="dashboard-post-job.html">
                  <i className="lni lni-circle-plus mr-1" /> Post a Job
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
    {/* End Navigation */}
    <div className="clearfix" />
    {/* ============================================================== */}
    {/* Top header  */}
    {/* ============================================================== */}
    {/* ======================= Top Breadcrubms ======================== */}
    <div className="gray py-3">
      <div className="container">
        <div className="row">
          <div className="colxl-12 col-lg-12 col-md-12">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item"><a href="#">Page</a></li>
                <li className="breadcrumb-item active" aria-current="page">Error Page</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
    {/* ======================= Top Breadcrubms ======================== */}
    {/* ======================= Product Detail ======================== */}
    <section className="middle">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8 col-xl-6 text-center">
            {/* Icon */}
            <div className="p-4 d-inline-flex align-items-center justify-content-center circle bg-light-danger text-danger mx-auto mb-4"><i className="ti-face-smile fs-lg" /></div>
            {/* Heading */}
            <h2 className="mb-2 ft-bold">404. Page not found.</h2>
            {/* Text */}
            <p className="ft-regular fs-md mb-5">Sorry, we couldn't find the page you where looking for. We suggest that you return to home page.</p>
            {/* Button */}
            <a className="btn btn-dark" href="index.html">Go To Home Page</a>
          </div>
        </div>
      </div>
    </section>
    {/* ======================= Product Detail End ======================== */}
    {/* ======================= Newsletter Start ============================ */}
    <section className="space bg-cover" style={{background: '#03343b url(./assets/img/landing-bg.png) no-repeat'}}>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <div className="sec_title position-relative text-center mb-5">
              <h6 className="text-light mb-0">Subscribr Now</h6>
              <h2 className="ft-bold text-light">Get All New Job Notification</h2>
            </div>
          </div>
        </div>
        <div className="row align-items-center justify-content-center">
          <div className="col-xl-7 col-lg-10 col-md-12 col-sm-12 col-12">
            <form className="bg-white rounded p-1">
              <div className="row no-gutters">
                <div className="col-xl-9 col-lg-9 col-md-8 col-sm-8 col-8">
                  <div className="form-group mb-0 position-relative">
                    <input type="text" className="form-control lg left-ico" placeholder="Enter Your Email Address" />
                    <i className="bnc-ico lni lni-envelope" />
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-4">
                  <div className="form-group mb-0 position-relative">
                    <button className="btn full-width custom-height-lg theme-bg text-light fs-md" type="button">Subscribe</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    {/* ======================= Newsletter Start ============================ */}
    {/* ============================ Footer Start ================================== */}
    <footer className="light-footer skin-light-footer style-2">
      <div className="footer-middle">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
              <div className="footer_widget">
                <img src="./assets/img/logo.png" className="img-footer small mb-2" alt />
                <div className="address mt-2">
                  3298 Grant Street Longview, New Texox<br />United Kingdom 75601	
                </div>
                <div className="address mt-3">
                  1-202-555-0106<br />support@workplex.com
                </div>
                <div className="address mt-2">
                  <ul className="list-inline">
                    <li className="list-inline-item"><a href="#" className="theme-cl"><i className="lni lni-facebook-filled" /></a></li>
                    <li className="list-inline-item"><a href="#" className="theme-cl"><i className="lni lni-twitter-filled" /></a></li>
                    <li className="list-inline-item"><a href="#" className="theme-cl"><i className="lni lni-youtube" /></a></li>
                    <li className="list-inline-item"><a href="#" className="theme-cl"><i className="lni lni-instagram-filled" /></a></li>
                    <li className="list-inline-item"><a href="#" className="theme-cl"><i className="lni lni-linkedin-original" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12">
              <div className="footer_widget">
                <h4 className="widget_title">For Employers</h4>
                <ul className="footer-menu">
                  <li><a href="#">Explore Candidates</a></li>
                  <li><a href="#">Job Pricing</a></li>
                  <li><a href="#">Submit Job</a></li>
                  <li><a href="#">Shortlisted</a></li>
                  <li><a href="#">Dashboard</a></li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12">
              <div className="footer_widget">
                <h4 className="widget_title">For Candidates</h4>
                <ul className="footer-menu">
                  <li><a href="#">Explore All Jobs</a></li>
                  <li><a href="#">Browse Categories</a></li>
                  <li><a href="#">Saved Jobs</a></li>
                  <li><a href="#">Dashboard</a></li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12">
              <div className="footer_widget">
                <h4 className="widget_title">About Company</h4>
                <ul className="footer-menu">
                  <li><a href="#">Who We'r?</a></li>
                  <li><a href="#">Our Mission</a></li>
                  <li><a href="#">Our team</a></li>
                  <li><a href="#">Packages</a></li>
                  <li><a href="#">Dashboard</a></li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12">
              <div className="footer_widget">
                <h4 className="widget_title">Helpful Topics</h4>
                <ul className="footer-menu">
                  <li><a href="#">Site Map</a></li>
                  <li><a href="#">Security</a></li>
                  <li><a href="#">Contact</a></li>
                  <li><a href="#">FAQ's Page</a></li>
                  <li><a href="#">Privacy</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom br-top">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12 col-md-12 text-center">
              <p className="mb-0">© 2022 Workplex. Designd By <a href="https://themezhub.com">ThemezHub</a>.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
    {/* ============================ Footer End ================================== */}
    {/* Log In Modal */}
    <div className="modal fade" id="login" tabIndex={-1} role="dialog" aria-labelledby="loginmodal" aria-hidden="true">
      <div className="modal-dialog modal-xl login-pop-form" role="document">
        <div className="modal-content" id="loginmodal">
          <div className="modal-headers">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span className="ti-close" />
            </button>
          </div>
          <div className="modal-body p-5">
            <div className="text-center mb-4">
              <h2 className="m-0 ft-regular">Login</h2>
            </div>
            <form>				
              <div className="form-group">
                <label>User Name</label>
                <input type="text" className="form-control" placeholder="Username*" />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Password*" />
              </div>
              <div className="form-group">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="flex-1">
                    <input id="dd" className="checkbox-custom" name="dd" type="checkbox" />
                    <label htmlFor="dd" className="checkbox-custom-label">Remember Me</label>
                  </div>	
                  <div className="eltio_k2">
                    <a href="#" className="theme-cl">Lost Your Password?</a>
                  </div>	
                </div>
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-md full-width theme-bg text-light fs-md ft-medium">Login</button>
              </div>
              <div className="form-group text-center mb-0">
                <p className="extra">Not a member?<a href="#et-register-wrap" className="text-dark"> Register</a></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    {/* End Modal */}
    <a id="back2Top" className="top-scroll" title="Back to top" href="#"><i className="ti-arrow-up" /></a>
  </div>
  {/* ============================================================== */}
  {/* End Wrapper */}
  {/* ============================================================== */}
  {/* ============================================================== */}
  {/* All Jquery */}
  {/* ============================================================== */}
  {/* ============================================================== */}
  {/* This page plugins */}
  {/* ============================================================== */}
</div>

    )
}

export default errorHandler;