import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGlobe, faUser, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

library.add(faGlobe, faUser, faEnvelope, faPhone);

const User = (props) => {
    const info_user = props.user;
    return (
        <Fragment>
            <div className="col-md-4 mb-4">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title"> <FontAwesomeIcon  icon="user" /> {info_user.name} - {info_user.username}</h5>
                        <h6 className="card-subtitle mb-2 text-muted"><FontAwesomeIcon  icon="envelope" /> {info_user.email} - <FontAwesomeIcon  icon="phone" /> { info_user.phone }</h6>
                        <p className="card-text"><FontAwesomeIcon  icon="globe" /> {info_user.website} </p>
                    </div>
                    <div className="card-footer">
                        <div className="row justify-content-center">                            
                            <Link className="btn btn-primary btn-outline"to={`/profile/user/${info_user.id}`}>Profile</Link>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
export default User;