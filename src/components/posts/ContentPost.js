import React, { Component, Fragment } from 'react'
import services from '../../config/services'

import '../../assets/css/animations.css'
import PublicPost from './PublicPost';

export class ContentPost extends Component {

    constructor(props){
        super(props);
        this.state = {
            posts: []
        }
    }

    async componentDidMount() {
        const { id } = this.props.id;
        const posts = await services.getPosts(id);
        this.setState({
            posts: [...posts.data]
        })
    }

    render() {
        return (
            <Fragment>
                <PublicPost posts={ this.state.posts }/>
            </Fragment>
        )
    }
}

export default ContentPost
