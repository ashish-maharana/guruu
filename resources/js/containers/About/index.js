import React from 'react';
import Layout from "../Layout";

export default function About() {
    return (
        <Layout>
            <div className="py-5 inner-pg">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-4 pe-4">
                            <div className="card profile-card overflow-hidden">
                                <div className="card-header text-center bg-white py-5">
                                    <div className="username-letter mx-auto mb-4">N</div>
                                    <div className="username"><h2 className="fw-bold">Nandkishore Ojha</h2></div>
                                    <div className="location">
                                        <i className="bi bi-geo-alt-fill me-2"></i>
                                        <span>Bikaner</span>
                                    </div>
                                </div>
                                <div className="card-body px-0 pb-0">
                                    <div className="response-time d-flex flex-wrap justify-content-between align-items-center ps-4 pe-5 pb-3">
                                        <div className="text">Response Time</div>
                                        <div className="value">24hr</div>
                                    </div>
                                    <hr/>
                                </div>
                                <div className="px-4 pb-4">
                                    <div className="py-3">
                                        <h4>Classes offered</h4>
                                        <div className="tag-group">
                                            <div className="tag">One on One</div>
                                            <div className="tag">Group</div>
                                        </div>
                                    </div>
                                    <div className="py-3">
                                        <h4>Taught subjects</h4>
                                        <div className="tag-group">
                                            <div className="tag">Maths</div>
                                            <div className="tag">Physics</div>
                                            <div className="tag">Algebra</div>
                                            <div className="tag">Trigonometry</div>
                                            <div className="tag">Geometry</div>
                                        </div>
                                    </div>
                                    <div className="py-3">
                                        <h4>Level</h4>
                                        <div className="tag-group">
                                            <div className="tag">All Levels</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-8">
                            <div className="card about-me-card">
                                <div className="card-body">
                                    <h3 className="card-title mb-4">About Me</h3>
                                    <div className="content">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque blandit accumsan lacus vel varius. Aliquam dapibus lectus sit amet commodo tincidunt. Nulla tincidunt vehicula lorem, ac convallis tellus fringilla eu. Fusce vitae convallis ipsum, id eleifend dui. Etiam orci odio, imperdiet at sodales sed, porta ac felis. Sed dictum massa placerat pulvinar euismod. Proin iaculis, sem id tincidunt mattis, enim tellus semper neque, id placerat magna lectus id magna. Nunc tincidunt erat sed leo eleifend rutrum. Nullam nec orci vel lectus dapibus venenatis vitae eget tellus. Donec eget dolor non est facilisis elementum. Sed ut placerat diam, sed dictum erat. Fusce mattis eget quam auctor viverra. Duis lacinia sollicitudin purus id porttitor. Proin in lobortis purus. Integer luctus volutpat mauris, id placerat nibh sagittis ut. Ut justo lacus, pulvinar eget nunc in, tincidunt condimentum urna.</p>
                                        <p>Vivamus tortor nunc, porttitor in consequat vel, tristique quis odio. Aliquam eu neque tortor. Integer pellentesque laoreet odio egestas laoreet. Morbi tincidunt fringilla rhoncus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus quis eleifend est. Nullam non eros nec ex semper auctor. Nulla eget tincidunt est. Donec sed lectus at arcu mattis dictum sit amet eu sapien. Vestibulum tempus, ligula ullamcorper vehicula facilisis, odio ipsum pulvinar felis, suscipit pharetra mauris nisl vel nulla.</p>
                                        <p>Integer ultricies eros non finibus vestibulum. Aliquam id felis euismod, fringilla urna vitae, fermentum elit. Cras ac rutrum justo. Vestibulum tempus neque velit, eu placerat libero placerat eget. Maecenas convallis felis nunc, sed pretium ante interdum ac. In arcu nibh, suscipit id libero ut, lobortis condimentum nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;</p>
                                    </div>
                                </div>
                            </div>

                            <div className="track-classes pt-5">
                                <div className="title-block d-inline-block w-100 mb-2">
                                    <h4>Tracks</h4>
                                </div>
                                <div className="row">
                                    <div className="col-12 col-md-4">
                                        <div className="card class-card">
                                            <div className="card-header" style={{backgroundImage: `url('images/yoga-teacher.jpg')`}}>
                                                <div className="badge">First Class Free</div>
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
                                                    <div className="start-spots d-flex flex-wrap justify-content-between mb-3">
                                                        <div className="start-in">
                                                            <span className="text">Start in</span>
                                                            <span className="text-data">2d: 7h: 45m</span>
                                                        </div>
                                                        <div className="start-in">
                                                            <span className="text">Spots Available</span>
                                                            <span className="text-data">04</span>
                                                        </div>
                                                    </div>
                                                    <div className="fee-enroll d-flex flex-wrap justify-content-between align-items-center">
                                                        <div className="fee"><i className="bx bx-rupee"></i> 500</div>
                                                        <div className="enroll">
                                                            <button className="enroll-class btn">Enroll Now</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-4">
                                        <div className="card class-card">
                                            <div className="card-header" style={{backgroundImage: `url('images/yoga-teacher.jpg')`}}>
                                                <div className="badge">First Class Free</div>
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
                                                    <div className="start-spots d-flex flex-wrap justify-content-between mb-3">
                                                        <div className="start-in">
                                                            <span className="text">Start in</span>
                                                            <span className="text-data">2d: 7h: 45m</span>
                                                        </div>
                                                        <div className="start-in">
                                                            <span className="text">Spots Available</span>
                                                            <span className="text-data">04</span>
                                                        </div>
                                                    </div>
                                                    <div className="fee-enroll d-flex flex-wrap justify-content-between align-items-center">
                                                        <div className="fee"><i className="bx bx-rupee"></i> 500</div>
                                                        <div className="enroll">
                                                            <button className="enroll-class btn">Enroll Now</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-4">
                                        <div className="card class-card">
                                            <div className="card-header" style={{backgroundImage: `url('images/yoga-teacher.jpg')`}}>
                                                <div className="badge">First Class Free</div>
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
                                                    <div className="start-spots d-flex flex-wrap justify-content-between mb-3">
                                                        <div className="start-in">
                                                            <span className="text">Start in</span>
                                                            <span className="text-data">2d: 7h: 45m</span>
                                                        </div>
                                                        <div className="start-in">
                                                            <span className="text">Spots Available</span>
                                                            <span className="text-data">04</span>
                                                        </div>
                                                    </div>
                                                    <div className="fee-enroll d-flex flex-wrap justify-content-between align-items-center">
                                                        <div className="fee"><i className="bx bx-rupee"></i> 500</div>
                                                        <div className="enroll">
                                                            <button className="enroll-class btn">Enroll Now</button>
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
                </div>
            </div>
        </Layout>
    );
}