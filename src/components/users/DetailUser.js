import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGlobe, faUser, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
library.add(faGlobe, faUser, faEnvelope, faPhone);

const sidebarStyle = {
    backgroundColor: '#CCCCCC'
}

const DetailUser = (props) => {
    return (
        <Fragment>
            <div className="col-md-3 pt-5" id="sidebar-wrapper" style={sidebarStyle}>
                <Link to="/" className="font-weight-bold text-dark" > &lt; Go Back</Link>
                <h1 className="text-center mb-5 mt-2" style={{ backgroundColor: 'black', color: 'white'}}>{props.user.name}</h1>
                <div className="row justify-content-center">
                    <FontAwesomeIcon icon="user" /> <p>{props.user.username}</p>
                </div>
                <div className="row justify-content-center">
                    <FontAwesomeIcon icon="envelope" /> <p>{props.user.email}</p>
                </div>
                <div className="row justify-content-center ">
                    <FontAwesomeIcon icon="phone" /> <p>{props.user.phone}</p>
                </div>
                <div className="row justify-content-center mb-5">
                    <FontAwesomeIcon icon="globe" /> <p>{props.user.website}</p>
                </div>
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h2 className="font-weight-bold">Company</h2>
                        <hr />
                        <div className="row text-center">
                            <div className="col-md-4">
                                <label className="font-weight-bold">Name</label>
                            </div>
                            <div className="col-md-8">
                                {props.user.company.name}
                            </div>
                        </div>
                        <div className="row text-center">
                            <div className="col-md-4">
                                <label className="font-weight-bold">key phrase</label>
                            </div>
                            <div className="col-md-8">
                                {props.user.company.catchPhrase}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-12 text-center">
                        <h2 className="font-weight-bold">Residence</h2>
                        <hr />
                        <div className="row text-center">
                            <div className="col-md-4">
                                <label className="font-weight-bold">City</label>
                            </div>
                            <div className="col-md-8">
                                {props.user.address.city}
                            </div>
                        </div>
                        <div className="row text-center">
                            <div className="col-md-4">
                                <label className="font-weight-bold">Street</label>
                            </div>
                            <div className="col-md-8">
                                {props.user.address.street}
                            </div>
                        </div>
                        <div className="row text-center">
                            <div className="col-md-4">
                                <label className="font-weight-bold">Suite</label>
                            </div>
                            <div className="col-md-8">
                                {props.user.address.suite}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
export default DetailUser;