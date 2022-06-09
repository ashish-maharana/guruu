/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import Layout from "../Layout";
import Search from "../Search";
import Carousel from 'react-bootstrap/Carousel';


export default function HomePage() {
  return (
      <Layout>
          <div className="dashboard-wrapper">
              {/* Hero section */}
              <div className="container-fluid" id="homepage-hero">
                  <div className="container">
                      <div className="row align-items-center justify-content-around">
                          <div className='col-xl-10'>
                              <div className="row">
                                <div className='col-md-7 pe-5'>
                                    <div className="hero-content">
                                        <h1>Find your ideal Guruu</h1>
                                    </div>
                                </div>
                                <div className='col-md-5'>
                                    <img alt="Online Learning from Guruu" src="images/online-learning.png" className="img-fluid" />
                                </div>
                              </div>
                              <Search />
                          </div>
                      </div>
                  </div>
              </div>

              {/* Meet The Guruu */}
              <div className="meet-the-guruu section-space bg-white">
                  <div className="container">
                      <div className="section-title text-center">
                          <h1>Meet the Guruus</h1>
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
                              </div>
                          </div>
                      </div>
                      <div className="w-100 d-inline-block text-center mt-5">
                          <a href={'/'} className="btn-style1 btn">Find My Teacher</a>
                      </div>
                  </div>
              </div>

              {/* Advantage of Guruu */}  
              <div className="guruu-advantage section-space bg-white">
                  <div className="container">
                      <div className="row justify-content-around">
                          <div className="col-xl-10">
                            <div className="section-title text-center">
                                <h1>The Guruu Advantage</h1>
                            </div>
                            <div className="py-lg-5 py-md-4 ga-row">
                                <div className="row py-5 align-items-center">
                                    <div className="col-12 col-md-6 ga-image">
                                        <img src="images/online-learning.png" alt="" className="img-fluid" />
                                    </div>
                                    <div className="col-12 col-md-6 ga-content">
                                        <h2 className="mb-4">Arena of Learning Opportunities</h2>
                                        <div className="content">
                                            We make learning interactive, fun, accessible, flexible and affordable. Passion to teach meets passion to learn at Guruu.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="py-lg-5 py-md-4 ga-row">
                                <div className="row py-5 align-items-center">
                                    <div className="col-12 col-md-6 ga-image order-md-2">
                                        <img src="images/online-learning.png" alt="" className="img-fluid" />
                                    </div>
                                    <div className="col-12 col-md-6 ga-content order-md-1">
                                        <h2>Eliminating Boundaries</h2>
                                        <div className="content">
                                            We make learning interactive, fun, accessible, flexible and affordable. Passion to teach meets passion to learn at Guruu.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="py-lg-5 py-md-4 ga-row">
                                <div className="row py-5 align-items-center">
                                    <div className="col-12 col-md-6 ga-image">
                                        <img src="images/online-learning.png" alt="" className="img-fluid" />
                                    </div>
                                    <div className="col-12 col-md-6 ga-content">
                                        <h2>One Stop Learning</h2>
                                        <div className="content">
                                            We make learning interactive, fun, accessible, flexible and affordable. Passion to teach meets passion to learn at Guruu.
                                        </div>
                                    </div>
                                </div>
                            </div>
                          </div>
                      </div>
                  </div>
              </div>
              
              {/* Popular Topics */}
              <div className="popular-topics bg-dark py-5">
                  <div className="container">
                    <div className="section-title text-center my-5">
                        <h1 className="text-white">Popular Topics</h1>
                    </div>

                    <div className="topic-cards-outer d-inline-block w-100 py-5">
                        <div className="topic-card" style={{backgroundImage:`url("images/sports.jpg")`}}>
                            <div className="topic-card-inner h-100 d-flex flex-wrap align-items-end">
                                <div className="tc-title w-100"><h3 className="text-white">Sports</h3></div>   
                            </div>
                        </div>
                        <div className="topic-card" style={{backgroundImage:`url("images/playing-guitar.jpg")`}}>
                            <div className="topic-card-inner h-100 d-flex flex-wrap align-items-end">
                                <div className="tc-title w-100"><h3 className="text-white">Guitar</h3></div>
                            </div>
                        </div>
                        <div className="topic-card" style={{backgroundImage:`url("images/woman-photographer.jpg")`}}>
                            <div className="topic-card-inner h-100 d-flex flex-wrap align-items-end">
                                <div className="tc-title w-100"><h3 className="text-white">Photography</h3></div>   
                            </div>
                        </div>
                        <div className="topic-card" style={{backgroundImage:`url("images/woman-cooking.jpg")`}}>
                            <div className="topic-card-inner h-100 d-flex flex-wrap align-items-end">
                                <div className="tc-title w-100"><h3 className="text-white">Cooking</h3></div>   
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
