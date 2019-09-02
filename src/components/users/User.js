import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGlobe, faUser, faEnvelope, faPhone, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import '../../assets/css/animations.css'

library.add(faGlobe, faUser, faEnvelope, faPhone, faUserCircle);


const User = (props) => {
    const info_user = props.user;
    const class_selected = props.user.is_search ? 'selected': '';
    return (
        <Fragment>
            <div className="col-md-4 mb-4">
                <div className={`card h-100 ${class_selected}`}>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="div h-100" style={{ padding: '15px'}}>
                                    <Link 
                                        to={`/profile/user/${info_user.id}`}
                                        className="btn"
                                    ><FontAwesomeIcon  icon="user-circle" size={"3x"}/></Link>
                                </div>
                            </div>
                            <div className="col-md-8">  
                                <h5 className="card-title text-right" style={{ marginTop: '5%' }}> <FontAwesomeIcon  icon="user" /> {info_user.name} - {info_user.username}</h5> <br/>
                                <h6 className="card-subtitle text-muted text-right mb-2"><FontAwesomeIcon  icon="envelope" /> {info_user.email} </h6>
                                <h6 className="card-subtitle text-muted text-right mb-2"><FontAwesomeIcon  icon="phone" /> { info_user.phone } </h6>
                                <p className="card-subtitle text-muted text-right" style={{ marginBottom: '5%' }}><FontAwesomeIcon  icon="globe" /> {info_user.website} </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
export default User;