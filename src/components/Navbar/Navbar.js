import React from "react";
import './navbar.css';
import { Link } from "react-router-dom";
import logo from './logo.png';

export default function Navbar({ handlesetsearch, handlesetcategoryvalue, handleclearfilter }) {

  return (
    <>
      <div className="navbar justify-content-evenly position-relative top-0 d-flex">
        <div className="d-flex align-items-center">
          <img src={logo} alt="logo" className="px-4" />
          <Link onClick={handleclearfilter} to='/' style={{  color: "black", fontFamily: "Lucida handwriting,Time New Roman" }}><h3 className="navbarHeading">Mytalorzone by sahiba</h3></Link>
        </div>
        <div className="d-flex align-items-center border-bottom border-light">
          <input onChange={handlesetsearch} className=" mx-3 bg-transparent border-0 search" id="search" style={{ color:"black", height: "30px", width: "" }} placeholder="Seach items" />
          <h4><i className="bi bi-search"></i></h4>
        </div>
        <div className="d-flex align-items-center">
          <Link to="/checkout/info" style={{ textDecoration: "none", color: "black" }}>
            <h1><i className="bi bi-cart3"></i></h1></Link>
        </div> 
      </div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary d-flex justify-content-eve">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-evenly" style={{ paddingLeft: '1rem', paddingRight: '1rem', width: "100%" }}>
              <li className="nav-item">
                <div className="nav-link fs-5 p-1 px-5 smnvit" onClick={handlesetcategoryvalue} >Ethnic Wear</div>
              </li>
              <li className="nav-item">
                <div className="nav-link fs-5 p-1 px-5 smnvit" aria-current="page" onClick={handlesetcategoryvalue}>Westren wear</div>
              </li>
              <li className="nav-item">
                <div className="nav-link fs-5 p-1 px-5 smnvit" onClick={handlesetcategoryvalue}>Sahiba Exclusives</div>
              </li>
              <li className="nav-item">
                <div className="nav-link fs-5 p-1 px-5 smnvit" onClick={handlesetcategoryvalue}>Winter Collection</div>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </>
  )
}