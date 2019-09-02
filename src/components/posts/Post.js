import React, { Fragment } from 'react'
import { Link } from "react-router-dom";

const Post = (props) => {
    return (
        <Fragment>
            <div className="col-md-12 animation_profile">
                <div className="card mt-2">
                    <div className="card-body">
                        <blockquote className="blockquote mb-0">
                            <p>"{props.post.body}"</p>
                            <footer className="blockquote-footer">Title <cite title="Source Title">{props.post.title}</cite></footer>
                        </blockquote>
                    </div>
                    {props.show ?
                        <div className="card-footer">
                            <Link
                                to={`/posts/${props.post.id}/comments`}
                                className="btn btn-primary"
                            >View comments</Link>
                            <button className="btn btn-danger float-right">
                                Delete
                            </button>
                            <button className="btn btn-warning float-right mr-1">
                                Edit
                            </button>
                        </div>
                        :
                        <div className="card-footer">
                            <div className="row">
                                <div className="col-md-12">
                                    <Link to={`/profile/user/${props.post.userId}`} className="font-weight-bold text-dark float-left" > &lt; Go Back</Link>
                                    <button type="button" className="btn btn-primary float-right">
                                        Comments { props.allComments}
                                    </button>


                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </Fragment>
    );
}
export default Post;