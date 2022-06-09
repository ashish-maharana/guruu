import React from 'react';

const Search = () => {
    return (
        <div className="search-your-guruu">
            <form action="">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-10">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-6 search-subject d-flex align-items-center">
                                <i className="bx bx-search"/>
                                <input type="text" className="form-control" placeholder="Choose a subject (E.g. English, Math)" />
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 search-address d-flex align-items-center">
                                <i className="bx bx-map-pin"/>
                                <input type="text" className="form-control" placeholder="Enter your address or city or PIN code" />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-2">
                        <button type="submit" className="btn find-a-teacher w-100">Find a Teacher</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Search;
