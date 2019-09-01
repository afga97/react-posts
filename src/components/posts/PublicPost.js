import React, { Fragment } from 'react';
import Post from '../posts/Post'

const PublicPost = (props) => {
    return (
        <Fragment>
            <div className="col-md-9 animation_profile">
                <div id="page-content-wrapper">
                    <div className="container-fluid">
                        <div className="row">
                            {props.posts.map((post) => (
                                <Post key={post.id} post={post} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
export default PublicPost;