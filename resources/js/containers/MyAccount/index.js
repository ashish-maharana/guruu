import React from 'react';
import Layout from "../Layout";

export default function MyAccount() {
    return (
        <Layout>
            <div className="py-5 inner-pg">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-4 py-3">
                            <div className="card profile-card overflow-hidden h-100 mx-1">
                                <div className="card-header text-center bg-white pt-5 pb-4">
                                    <div className="username-letter mx-auto mb-4">
                                        <span>N</span>
                                        <button className="edit-profile-name">
                                            <i className="bi bi-pencil-fill"></i>
                                        </button>
                                    </div>
                                    <div className="username"><h2 className="fw-bold">Nandkishore Ojha</h2></div>
                                </div>
                                <div className="card-body px-0 pb-0 py-4">
                                    <div className="profile-information d-flex flex-wrap justify-content-between align-items-center ps-4 pe-5 pb-3">
                                        <div className="pi-l-content">
                                            <i className="bi bi-phone-fill color-2 me-2"></i>
                                            <span>+91 1234567890</span>
                                        </div>
                                        <div className="pi-r-content text-center">
                                            <i className="bi bi-check-circle-fill color-3"></i>
                                        </div>
                                    </div>
                                    <div className="profile-information d-flex flex-wrap justify-content-between align-items-center ps-4 pe-5 pb-3">
                                        <div className="pi-l-content">
                                            <i className="bi bi-envelope-fill color-2 me-2"></i>
                                            <span className="color-3">nk@broadweb.com.au</span>
                                        </div>
                                        <div className="pi-r-content text-end">
                                            <button className="btn btn-sm btn-outline-style1">Confirm</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 py-3">
                            <div className="card h-100 mx-1">
                                <div className="card-body">
                                    <h4 className="card-title">General Information</h4>
                                    <div className="">
                                        <form>
                                            <div className="form-group">
                                                <label htmlFor="dob">
                                                    Date of Birth
                                                </label>
                                                <input type="text" id="dob" className="form-control" placeholder="dd-mm-yy" />
                                            </div> 
                                            
                                            <div className="form-group">
                                                <select className="form-control">
                                                    <option>Female</option>
                                                    <option>Male</option>
                                                </select>
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="skill">
                                                    Skills
                                                </label>
                                                <input type="text" id="skill" className="form-control" placeholder="choose your skill" defaultValue="Yoga" />
                                                <div className="tag-group mt-2">
                                                    <div className="tag tag-remove">Maths <button className="btn-transparent remove"><i className="bi bi-x-lg"></i></button></div>
                                                    <div className="tag tag-remove">Physics <button className="btn-transparent remove"><i className="bi bi-x-lg"></i></button></div>
                                                    <div className="tag tag-remove">Algebra <button className="btn-transparent remove"><i className="bi bi-x-lg"></i></button></div>
                                                    <div className="tag tag-remove">Trigonometry <button className="btn-transparent remove"><i className="bi bi-x-lg"></i></button></div>
                                                    <div className="tag tag-remove">Geometry <button className="btn-transparent remove"><i className="bi bi-x-lg"></i></button></div>
                                                </div>
                                            </div> 
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 py-3">
                            <div className="card account-about-me-card h-100 mx-1">
                                <div className="card-body">
                                    <h3 className="card-title mb-4">About Me</h3>
                                    <div className="content">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque blandit accumsan lacus vel varius. Aliquam dapibus lectus sit amet commodo tincidunt. Nulla tincidunt vehicula lorem, ac convallis tellus fringilla eu. Fusce vitae convallis ipsum, id eleifend dui. Etiam orci odio, imperdiet at sodales sed, porta ac felis.</p>
                                        <p>Vivamus tortor nunc, porttitor in consequat vel, tristique quis odio. Aliquam eu neque tortor. Integer pellentesque laoreet odio egestas laoreet.</p>
                                        <p>Integer ultricies eros non finibus vestibulum. Aliquam id felis euismod, fringilla urna vitae, fermentum elit. Cras ac rutrum justo. Vestibulum tempus neque velit, eu placerat libero placerat eget.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-12 col-md-4 py-3">
                            <div className="card h-100 mx-1">
                                <div className="card-body">
                                    <h4 className="card-title">Your Location</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}