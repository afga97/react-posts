import React, { Fragment } from 'react';
import '../../assets/css/loader.css';

const Loader = () => {
    return (
        <Fragment>
            <div className="gooey">
                <span className="dot"></span>
                <div className="dots">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </Fragment>
    );
}
export default Loader;