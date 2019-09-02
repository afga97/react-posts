import React, { Component, Fragment } from 'react'
import Post from '../posts/Post';
import services from '../../config/services';
import Loader from '../loader/Loader';
import '../../assets/css/animations.css'
import ComDetail from './CommentDetail';
export class Comment extends Component {

    constructor(props){
        super(props);
        this.state = {
            post: {},
            comments: [],
            is_loader: true
        }
    }
    
    async componentDidMount() {
        const { id } = this.props.match.params;
        const post = await services.getPost(id)
        const comments = await services.getCommnentsPost(id)
        this.setState({
            post: post.data,
            comments: [...comments.data]
        }, () => {
            this.setState({
                is_loader: false
            })
        })
    }

    render() {
        return (
            <Fragment>
                { this.state.is_loader ? <Loader /> :
                    <Fragment>
                        <Post post={this.state.post} show={false} allComments={this.state.comments.length}/>
                        <div className="container mt-5">
                            <div className="row d-flex justify-content-center">
                                { this.state.comments.map(( comment ) => (
                                    <ComDetail key={comment.id} comment={comment}/>
                                ))}
                            </div>
                        </div>
                    </Fragment>
                }
            </Fragment>
        )
    }
}

export default Comment
