// import React from 'react';
import React, { Fragment, useState, useEffect } from 'react';
import Layout from "../Layout";
import { Button,Modal } from 'react-bootstrap';
import Track from '../Track';

class Dashboard extends React.Component{    
    
    // React Bootstrap Model
    constructor(){
        super();
        this.state = {
            showHide : false
        }
    }
    handleModalShowHide() {
        this.setState({ showHide: !this.state.showHide })
    }


    render(){
        
    return (
        <Layout>
            <div className="py-5 inner-pg">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-4 py-3">
                            <div className="card profile-card overflow-hidden mx-1">
                                <div className="card-header text-center bg-white pt-5 pb-4">
                                    <div className="username-letter mx-auto mb-4">
                                        <span>N</span>
                                        <button className="edit-profile-name">
                                            <i className="bi bi-pencil-fill"></i>
                                        </button>
                                    </div>
                                    <div className="username"><h2 className="fw-bold">Nandkishore Ojha</h2></div>
                                    <div className="location">
                                        <i className="bi bi-geo-alt-fill me-2"></i>
                                        <span>Bikaner</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 py-3">
                            <h2 className="card-title">Classes</h2>
                            <div className="timeline">
                                <div className="timeline-outer">
                                    <div className="timeline-wrap">
                                        <h3 className="timeline-title">Next 7 days</h3>
                                        <div className="timeline-card">
                                            <div className="card class-card">
                                                <div className="card-header" style={{backgroundImage: `url('images/yoga-teacher.jpg')`}}>
                                                </div>
                                                <div className="card-body p-3">
                                                    <h6 className="class-title fw-bold">Yoga for beginners</h6>
                                                    <div className="class-by">By Prashant Joshi</div>
                                                    <div className="class-time-date">
                                                        <div className="class-period d-flex flex-wrap mb-2">
                                                            <span className="start me-1">
                                                                2.30 pm
                                                            </span>
                                                            -
                                                            <span className="end ms-1">3.30 pm</span>
                                                            <div className="">
                                                                , <span>Sat 5 feb 2022</span>
                                                            </div>
                                                        </div>
                                                        <div className="clearfix">
                                                            <button className="btn btn-disabled btn-secondary w-100">Start in <strong>2d: 7h: 45m</strong></button>
                                                            <div className="donwload text-center mt-2 color-1">
                                                                <i className="bi bi-download me-2"></i>
                                                                <span>Course Material</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="timeline-wrap">
                                        <h3 className="timeline-title">Today</h3>
                                        <div className="timeline-card">
                                            <div className="card class-card">
                                                <div className="card-header" style={{backgroundImage: `url('images/yoga-teacher.jpg')`}}>
                                                    <div className="badge">In Progress</div>
                                                </div>
                                                <div className="card-body p-3">
                                                    <h6 className="class-title fw-bold">Yoga for beginners</h6>
                                                    <div className="class-by">By Prashant Joshi</div>
                                                    <div className="class-time-date">
                                                        <div className="class-period d-flex flex-wrap mb-2">
                                                            <span className="start me-1">
                                                                2.30 pm
                                                            </span>
                                                            -
                                                            <span className="end ms-1">3.30 pm</span>
                                                            <div className="">
                                                                , <span>Sat 5 feb 2022</span>
                                                            </div>
                                                        </div>
                                                        <div className="clearfix">
                                                            <button className="btn btn-warning w-100">Join Now</button>
                                                            <div className="donwload text-center mt-2 color-1">
                                                                <i className="bi bi-download me-2"></i>
                                                                <span>Course Material</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="timeline-wrap">
                                        <h3 className="timeline-title">Past Classes</h3>
                                        <div className="timeline-card">
                                            <div className="card class-card">
                                                <div className="card-header" style={{backgroundImage: `url('images/yoga-teacher.jpg')`}}>
                                                </div>
                                                <div className="card-body p-3">
                                                    <h6 className="class-title fw-bold">Yoga for beginners</h6>
                                                    <div className="class-by">By Prashant Joshi</div>
                                                    <div className="class-time-date">
                                                        <div className="class-period d-flex flex-wrap mb-2">
                                                            <span className="start me-1">
                                                                2.30 pm
                                                            </span>
                                                            -
                                                            <span className="end ms-1">3.30 pm</span>
                                                            <div className="">
                                                                , <span>Sat 5 feb 2022</span>
                                                            </div>
                                                        </div>
                                                        <div className="">
                                                        <button className="btn btn-warning w-100">Join Now</button>
                                                            <div className="donwload text-center mt-2 color-1">
                                                                <i className="bi bi-download me-2"></i>
                                                                <span>Course Material</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    
                                        <div className="timeline-card">
                                            <div className="card class-card">
                                                <div className="card-header" style={{backgroundImage: `url('images/yoga-teacher.jpg')`}}>
                                                </div>
                                                <div className="card-body p-3">
                                                    <h6 className="class-title fw-bold">Yoga for beginners</h6>
                                                    <div className="class-by">By Prashant Joshi</div>
                                                    <div className="class-time-date">
                                                        <div className="class-period d-flex flex-wrap mb-2">
                                                            <span className="start me-1">
                                                                2.30 pm
                                                            </span>
                                                            -
                                                            <span className="end ms-1">3.30 pm</span>
                                                            <div className="">
                                                                , <span>Sat 5 feb 2022</span>
                                                            </div>
                                                        </div>
                                                        <div className="clearfix">
                                                            <button className="btn btn-primary w-100">Watch</button>
                                                            <div className="donwload text-center mt-2 color-1">
                                                                <i className="bi bi-download me-2"></i>
                                                                <span>Course Material</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-4 py-3 text-end">
                            <div className="d-flex">
                                <button className="btn btn-primary me-4"><small>Calendar View</small></button>
                                <button className="btn btn-warning" onClick={() => this.handleModalShowHide()}><small>Add New Track</small></button>
                            </div>
                            
                            <div className="clearfix">
                                <Modal 
                                    show={this.state.showHide}
                                    // {...props}
                                    size="lg"
                                    aria-labelledby="contained-modal-title-vcenter"
                                    centered
                                    dialogClassName="modal-style1"
                                >
                                    <Modal.Header closeButton onClick={() => this.handleModalShowHide()}>
                                        {/* <Modal.Title>Create A Track</Modal.Title> */}
                                    </Modal.Header>
                                    <Modal.Body>
                                        <h2 className="modal-heading text-center mb-4">Create A Track</h2>
                                        <Track />
                                    </Modal.Body>
                                    {/* <Modal.Footer>
                                    <Button variant="secondary" onClick={() => this.handleModalShowHide()}>
                                        Close
                                    </Button>
                                    <Button variant="primary" onClick={() => this.handleModalShowHide()}>
                                        Save Changes
                                    </Button>
                                    </Modal.Footer> */}
                                </Modal>
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-end">
                        <div className="col-12 col-md-8">
                            <div className="card">
                                <div className="card-body">
                                    <div className="review-rating-point mb-3">
                                        <h3 className="d-inline-block mb-0 fw-bold">Reviews</h3>
                                        <div className="d-inline-block mx-3"><img src="/images/rating.png" /></div>
                                        <div className="d-inline-block rating-point">4.9/5</div>
                                    </div>
                                    <div className="reviews">
                                        <div className="review py-3">
                                            <div className="review-text mb-2">Perfect! Took the 1st free class and it was just amazing, looking forward to many classes asap.</div>
                                            <div className="testimonial-by align-items-center">
                                                <div className="name-letter">N</div>
                                                <div className="name-place">
                                                    <div className="name">Nk Ojha</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="review py-3">
                                            <div className="review-text mb-2">Perfect! Took the 1st free class and it was just amazing, looking forward to many classes asap.</div>
                                            <div className="testimonial-by align-items-center">
                                                <div className="name-letter">N</div>
                                                <div className="name-place">
                                                    <div className="name">Nk Ojha</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="review py-3">
                                            <div className="review-text mb-2">Perfect! Took the 1st free class and it was just amazing, looking forward to many classes asap.</div>
                                            <div className="testimonial-by align-items-center">
                                                <div className="name-letter">N</div>
                                                <div className="name-place">
                                                    <div className="name">Nk Ojha</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
    }
}
export default Dashboard;