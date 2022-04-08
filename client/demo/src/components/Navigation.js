import React from "react";
import Login from "./Login";
import AuthService from "../services/auth.service";
import { Link } from "react-router-dom";

function navigation() {

  let currentUser = AuthService.getCurrentUser();

  const logOut = ()=>{
    AuthService.logout();
  }


    return (
      <div>
        <div className="header header-light dark-text">
  <div className="container">
    <nav id="navigation" className="navigation navigation-landscape">
      <div className="nav-header">
        <a className="nav-brand" href="#">
          <Link to={'/'}><img src="http://konsultsoft.com/images/logo.png" className="logo" alt /></Link>
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
            </ul>
          </li>
          <li><a href="javascript:void(0);">Find Job</a>
            <ul className="nav-dropdown nav-submenu">
              <li><a href="job-search-v1.html">Job Search V1</a></li>
              <li><a href="javascript:void(0);">Map Styles</a>
                <ul className="nav-dropdown nav-submenu">
                  <li><a href="job-half-map.html">Search On Map V1</a></li>
                </ul>
              </li>
              <li><a href="javascript:void(0);">Single Job</a>
                <ul className="nav-dropdown nav-submenu">
                  <li><a href="single-job-1.html">Single Job V1</a></li>
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
            { currentUser ? <a href="/"  onClick= {logOut} >
              <i className="lni lni-user mr-2" />Logout
            </a> : <a href="#" data-toggle="modal" data-target="#login" className="ft-medium" >
              <i className="lni lni-user mr-2" />Login
            </a>
            } 
            
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
<Login />
</div>
    )
}

export default navigation;