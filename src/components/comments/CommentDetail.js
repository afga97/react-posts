import React, { Fragment } from 'react';

const CommentDetail = (props) => {
    return (
        <Fragment>
            <div className="col-md-12">
                <div className="card mb-4">
                    <div className="card-body">
                        <h5 className="card-title">{ props.comment.name } </h5>
                        <hr />
                        <p className="card-text">{ props.comment.body }</p>     
                        <h6 className="text-muted text-right">{ props.comment.email }</h6>               
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
export default CommentDetail;