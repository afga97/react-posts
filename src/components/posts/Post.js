import React, { Fragment } from 'react'
import { Link } from "react-router-dom";

const Post = (props) => {
    return (
        <Fragment>
            <div className="col-md-12">
                <div className="card mt-2">
                    <div className="card-body">
                        <blockquote className="blockquote mb-0">
                            <p>"{props.post.body}"</p>
                            <footer className="blockquote-footer">Title <cite title="Source Title">{props.post.title}</cite></footer>
                        </blockquote>
                    </div>
                    <div className="card-footer">
                        <Link
                            to={`/comments/`}
                            className="btn btn-primary"
                        >View comments</Link>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
export default Post;