import React, { Fragment } from 'react'

const Header = (props) => {
    return (
        <Fragment>
            <div className="jumbotron jumbotron-fluid animation_up_down">
                <div className="container">
                    <h1 className="text-center">Search user</h1>
                    <hr className="my-4" />
                    <div className="input-group mb-1 ">
                        <input type="text" 
                            className="form-control" 
                            placeholder="User name" 
                            onChange={ (e) => props.searchUser(e) }
                        />
                        <div className="input-group-append">
                            <button 
                                type="button"
                                className="btn btn-outline-secondary"
                                onClick={ () => props.filterUsers() }
                            >Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
export default Header;