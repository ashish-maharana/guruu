import React from 'react';
import Layout from "../Layout";
import Search from "../Search";
import Carousel from 'react-bootstrap/Carousel';


export default function SearchResult() {
  return (
      <Layout>
          <div className="dashboard-wrapper">
              {/* Hero section */}
              <div className="container-fluid" id="homepage-hero">
                  <div className="container">
                      <div className="row align-items-center justify-content-around">
                          <div className='col-xl-10'>
                              <Search />
                          </div>
                      </div>
                  </div>
              </div>

              <div className="filter-section">
                  <div className="container">
                      <div className="filter-wrap text-center">
                            <div className="filter-label d-inline-block">Filter :</div>
                            <div className="d-inline-block">
                                <div className="rate filter-point">Rate</div>
                                <div className="online-class filter-point">Online Classes</div>
                                <div className="group-class filter-point">Group Classes</div>
                                <div className="response-time filter-point">Response Time</div>
                            </div>
                      </div>
                  </div>
              </div>

              {/* Meet The Guruu */}
              <div className="meet-the-guruu section-space bg-white">
                  <div className="container">
                      <div className="section-title text-center">
                          <h1>2000 Guruus available near you in Delhi</h1>
                      </div>
                      <div className="tutor-grid-view">
                          <div className="row">
                              <div className="col-12 col-md-6 col-lg-3 tutor-profile-info py-3">
                                  <div className="tutor-box px-xl-1">
                                      <div className="tutor-short-info d-flex align-items-end" style={{backgroundImage:`url("images/math-teacher.jpg")`}}>
                                          <div className="tutor-detail w-100">
                                              <div className="name">Rajni Sonkar</div>
                                              <div className="subject text-white">Maths</div>
                                              <div className="rating-review">
                                                  <div className="rating-no d-inline-block me-2">5.0</div>
                                                  <div className="stars d-inline-block me-2"/>
                                                  <div className="review text-white d-inline-block">(13 Review)</div>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="status-rate mt-3 d-flex flex-wrap justify-content-between">
                                          <div className="status online">Online</div>
                                          <div className="fee-rate">
                                              <span>Rs. 400/hr</span><span>1st lesson free</span>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="guruu-intro-txt mt-3 px-1">
                                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                                  </div>
                              </div>
                              <div className="col-12 col-md-6 col-lg-3 tutor-profile-info py-3">
                                  <div className="tutor-box px-xl-1">
                                      <div className="tutor-short-info d-flex align-items-end" style={{backgroundImage:`url("images/chemistry.jpg")`}}>
                                          <div className="tutor-detail w-100">
                                              <div className="name">Rajni Sonkar</div>
                                              <div className="subject text-white">Chemistry</div>
                                              <div className="rating-review">
                                                  <div className="rating-no d-inline-block me-2">5.0</div>
                                                  <div className="stars d-inline-block me-2"/>
                                                  <div className="review text-white d-inline-block">(13 Review)</div>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="status-rate mt-3 d-flex flex-wrap justify-content-between">
                                          <div className="status online">Online</div>
                                          <div className="fee-rate">
                                              <span>Rs. 400/hr</span><span>1st lesson free</span>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="guruu-intro-txt mt-3 px-1">  
                                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                                  </div>
                              </div>
                              <div className="col-12 col-md-6 col-lg-3 tutor-profile-info py-3">
                                  <div className="tutor-box px-xl-1">
                                      <div className="tutor-short-info d-flex align-items-end" style={{backgroundImage:`url("images/yoga-teacher.jpg")`}}>
                                          <div className="tutor-detail w-100">
                                              <div className="name">Rajni Sonkar</div>
                                              <div className="subject text-white">Yoga</div>
                                              <div className="rating-review">
                                                  <div className="rating-no d-inline-block me-2">5.0</div>
                                                  <div className="stars d-inline-block me-2"/>
                                                  <div className="review text-white d-inline-block">(13 Review)</div>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="status-rate mt-3 d-flex flex-wrap justify-content-between">
                                          <div className="status">Offline</div>
                                          <div className="fee-rate">
                                              <span>Rs. 400/hr</span><span>1st lesson free</span>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="guruu-intro-txt mt-3 px-1">  
                                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                                  </div>
                              </div>
                              <div className="col-12 col-md-6 col-lg-3 tutor-profile-info py-3">
                                  <div className="tutor-box px-xl-1">
                                      <div className="tutor-short-info d-flex align-items-end" style={{backgroundImage:`url("images/math-teacher.jpg")`}}>
                                          <div className="tutor-detail w-100">
                                              <div className="name">Rajni Sonkar</div>
                                              <div className="subject text-white">Maths</div>
                                              <div className="rating-review">
                                                  <div className="rating-no d-inline-block me-2">5.0</div>
                                                  <div className="stars d-inline-block me-2"/>
                                                  <div className="review text-white d-inline-block">(13 Review)</div>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="status-rate mt-3 d-flex flex-wrap justify-content-between">
                                          <div className="status online">Online</div>
                                          <div className="fee-rate">
                                              <span>Rs. 400/hr</span><span>1st lesson free</span>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="guruu-intro-txt mt-3 px-1">  
                                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                                  </div>
                              </div>
                              <div className="col-12 col-md-6 col-lg-3 tutor-profile-info py-3">
                                  <div className="tutor-box px-xl-1">
                                      <div className="tutor-short-info d-flex align-items-end" style={{backgroundImage:`url("images/math-teacher.jpg")`}}>
                                          <div className="tutor-detail w-100">
                                              <div className="name">Rajni Sonkar</div>
                                              <div className="subject text-white">Maths</div>
                                              <div className="rating-review">
                                                  <div className="rating-no d-inline-block me-2">5.0</div>
                                                  <div className="stars d-inline-block me-2"/>
                                                  <div className="review text-white d-inline-block">(13 Review)</div>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="status-rate mt-3 d-flex flex-wrap justify-content-between">
                                          <div className="status online">Online</div>
                                          <div className="fee-rate">
                                              <span>Rs. 400/hr</span><span>1st lesson free</span>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="guruu-intro-txt mt-3 px-1">  
                                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                                  </div>
                              </div>
                              <div className="col-12 col-md-6 col-lg-3 tutor-profile-info py-3">
                                  <div className="tutor-box px-xl-1">
                                      <div className="tutor-short-info d-flex align-items-end" style={{backgroundImage:`url("images/math-teacher.jpg")`}}>
                                          <div className="tutor-detail w-100">
                                              <div className="name">Rajni Sonkar</div>
                                              <div className="subject text-white">Maths</div>
                                              <div className="rating-review">
                                                  <div className="rating-no d-inline-block me-2">5.0</div>
                                                  <div className="stars d-inline-block me-2"/>
                                                  <div className="review text-white d-inline-block">(13 Review)</div>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="status-rate mt-3 d-flex flex-wrap justify-content-between">
                                          <div className="status online">Online</div>
                                          <div className="fee-rate">
                                              <span>Rs. 400/hr</span><span>1st lesson free</span>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="guruu-intro-txt mt-3 px-1">  
                                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                                  </div>
                              </div>
                              <div className="col-12 col-md-6 col-lg-3 tutor-profile-info py-3">
                                  <div className="tutor-box px-xl-1">
                                      <div className="tutor-short-info d-flex align-items-end" style={{backgroundImage:`url("images/math-teacher.jpg")`}}>
                                          <div className="tutor-detail w-100">
                                              <div className="name">Rajni Sonkar</div>
                                              <div className="subject text-white">Maths</div>
                                              <div className="rating-review">
                                                  <div className="rating-no d-inline-block me-2">5.0</div>
                                                  <div className="stars d-inline-block me-2"/>
                                                  <div className="review text-white d-inline-block">(13 Review)</div>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="status-rate mt-3 d-flex flex-wrap justify-content-between">
                                          <div className="status online">Online</div>
                                          <div className="fee-rate">
                                              <span>Rs. 400/hr</span><span>1st lesson free</span>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="guruu-intro-txt mt-3 px-1">  
                                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                                  </div>
                              </div>
                              <div className="col-12 col-md-6 col-lg-3 tutor-profile-info py-3">
                                  <div className="tutor-box px-xl-1">
                                      <div className="tutor-short-info d-flex align-items-end" style={{backgroundImage:`url("images/math-teacher.jpg")`}}>
                                          <div className="tutor-detail w-100">
                                              <div className="name">Rajni Sonkar</div>
                                              <div className="subject text-white">Maths</div>
                                              <div className="rating-review">
                                                  <div className="rating-no d-inline-block me-2">5.0</div>
                                                  <div className="stars d-inline-block me-2"/>
                                                  <div className="review text-white d-inline-block">(13 Review)</div>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="status-rate mt-3 d-flex flex-wrap justify-content-between">
                                          <div className="status online">Online</div>
                                          <div className="fee-rate">
                                              <span>Rs. 400/hr</span><span>1st lesson free</span>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="guruu-intro-txt mt-3 px-1">  
                                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                                  </div>
                              </div>
                              <div className="col-12 col-md-6 col-lg-3 tutor-profile-info py-3">
                                  <div className="tutor-box px-xl-1">
                                      <div className="tutor-short-info d-flex align-items-end" style={{backgroundImage:`url("images/math-teacher.jpg")`}}>
                                          <div className="tutor-detail w-100">
                                              <div className="name">Rajni Sonkar</div>
                                              <div className="subject text-white">Maths</div>
                                              <div className="rating-review">
                                                  <div className="rating-no d-inline-block me-2">5.0</div>
                                                  <div className="stars d-inline-block me-2"/>
                                                  <div className="review text-white d-inline-block">(13 Review)</div>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="status-rate mt-3 d-flex flex-wrap justify-content-between">
                                          <div className="status online">Online</div>
                                          <div className="fee-rate">
                                              <span>Rs. 400/hr</span><span>1st lesson free</span>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="guruu-intro-txt mt-3 px-1">  
                                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                                  </div>
                              </div>
                              <div className="col-12 col-md-6 col-lg-3 tutor-profile-info py-3">
                                  <div className="tutor-box px-xl-1">
                                      <div className="tutor-short-info d-flex align-items-end" style={{backgroundImage:`url("images/math-teacher.jpg")`}}>
                                          <div className="tutor-detail w-100">
                                              <div className="name">Rajni Sonkar</div>
                                              <div className="subject text-white">Maths</div>
                                              <div className="rating-review">
                                                  <div className="rating-no d-inline-block me-2">5.0</div>
                                                  <div className="stars d-inline-block me-2"/>
                                                  <div className="review text-white d-inline-block">(13 Review)</div>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="status-rate mt-3 d-flex flex-wrap justify-content-between">
                                          <div className="status online">Online</div>
                                          <div className="fee-rate">
                                              <span>Rs. 400/hr</span><span>1st lesson free</span>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="guruu-intro-txt mt-3 px-1">  
                                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                                  </div>
                              </div>
                              <div className="col-12 col-md-6 col-lg-3 tutor-profile-info py-3">
                                  <div className="tutor-box px-xl-1">
                                      <div className="tutor-short-info d-flex align-items-end" style={{backgroundImage:`url("images/math-teacher.jpg")`}}>
                                          <div className="tutor-detail w-100">
                                              <div className="name">Rajni Sonkar</div>
                                              <div className="subject text-white">Maths</div>
                                              <div className="rating-review">
                                                  <div className="rating-no d-inline-block me-2">5.0</div>
                                                  <div className="stars d-inline-block me-2"/>
                                                  <div className="review text-white d-inline-block">(13 Review)</div>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="status-rate mt-3 d-flex flex-wrap justify-content-between">
                                          <div className="status online">Online</div>
                                          <div className="fee-rate">
                                              <span>Rs. 400/hr</span><span>1st lesson free</span>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="guruu-intro-txt mt-3 px-1">  
                                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                                  </div>
                              </div>
                              <div className="col-12 col-md-6 col-lg-3 tutor-profile-info py-3">
                                  <div className="tutor-box px-xl-1">
                                      <div className="tutor-short-info d-flex align-items-end" style={{backgroundImage:`url("images/math-teacher.jpg")`}}>
                                          <div className="tutor-detail w-100">
                                              <div className="name">Rajni Sonkar</div>
                                              <div className="subject text-white">Maths</div>
                                              <div className="rating-review">
                                                  <div className="rating-no d-inline-block me-2">5.0</div>
                                                  <div className="stars d-inline-block me-2"/>
                                                  <div className="review text-white d-inline-block">(13 Review)</div>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="status-rate mt-3 d-flex flex-wrap justify-content-between">
                                          <div className="status online">Online</div>
                                          <div className="fee-rate">
                                              <span>Rs. 400/hr</span><span>1st lesson free</span>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="guruu-intro-txt mt-3 px-1">  
                                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              {/* Students & Parents Testimonials */}
              <div className="bg-light section-space testimonials-section">
                  <div className="container">
                    <div className="section-title text-center my-5">
                        <h1>Students &amp; Parents sharing their Guruu Experience</h1>
                    </div>
                    <div className="testimonial-slider pt-5">
                        <Carousel indicators={false}>
                            <Carousel.Item>
                                <div className="row">
                                    <div className="col-12 col-md-4 col-lg-4 testimonial-slide-img" style={{backgroundImage: `url('images/student-quote.jpg')`}}>
                                        {/* <i testimonial-slide-contentmg
                                        className="d-block w-100"
                                        src="images/student-quote.jpg"
                                        alt="First slide"
                                        /> */}
                                    </div>
                                    <div className="col-12 col-md-8 col-lg-8 testimonial-slide-content d-flex align-items-center">
                                        <Carousel.Caption>
                                            <div className="para mb-5">
                                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                                            </div>
                                            <div className="testimonial-by">
                                                <div className="name-letter">N</div>
                                                <div className="name-place">
                                                    <div className="name">Nk Ojha</div>
                                                    <div className="place">Bikaner</div>
                                                </div>
                                            </div>
                                        </Carousel.Caption>
                                    </div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="row">
                                    <div className="col-12 col-md-4 col-lg-4 testimonial-slide-img" style={{backgroundImage: `url('images/student-quote.jpg')`}}></div>
                                    <div className="col-12 col-md-8 col-lg-8 testimonial-slide-content d-flex align-items-center">
                                        <Carousel.Caption>
                                            <div className="para mb-5">
                                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                                            </div>
                                            <div className="testimonial-by">
                                                <div className="name-letter">N</div>
                                                <div className="name-place">
                                                    <div className="name">Nk Ojha</div>
                                                    <div className="place">Bikaner</div>
                                                </div>
                                            </div>
                                        </Carousel.Caption>
                                    </div>
                                </div>

                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="row">
                                    <div className="col-12 col-md-4 col-lg-4 testimonial-slide-img" style={{backgroundImage: `url('images/student-quote.jpg')`}}></div>
                                    <div className="col-12 col-md-8 col-lg-8 testimonial-slide-content d-flex align-items-center">
                                        <Carousel.Caption>
                                            <div className="para mb-5">
                                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                                            </div>
                                            <div className="testimonial-by">
                                                <div className="name-letter">N</div>
                                                <div className="name-place">
                                                    <div className="name">Nk Ojha</div>
                                                    <div className="place">Bikaner</div>
                                                </div>
                                            </div>
                                        </Carousel.Caption>
                                    </div>
                                </div>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                  </div>
              </div>

          </div>
      </Layout>


  );
}