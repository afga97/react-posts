import React, { Component, Fragment } from 'react';
import services from '../../config/services';
import DetailUser from './DetailUser';
import Loader from '../loader/Loader';
import '../../assets/css/animations.css'
import Post from '../posts/Post';

const initialProfile = {
    company: {},
    address: {},
    posts: [],
    name: '',
    username:'',
    email: '',
    phone: '',
    website: ''
}

export class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ...initialProfile,
            'is_loading': true
        }
    }

    async componentDidMount() {
        const { id } = this.props.match.params;
        const user = await services.getUser(id);
        const posts = await services.getPosts(id);

        this.setState({
            ...user.data,
            posts: [...posts.data]
        }, () => {
            this.setState({
                is_loading: false
            })
        })
    }

    render() {
        return (
            <Fragment>
                { this.state.is_loading ? <Loader /> : 
                    <div className="d-flex animation_up_down">
                        <DetailUser user={this.state}/>
                        <div className="col-md-9 animation_profile">
                            <div id="page-content-wrapper">
                                <div className="container-fluid"> 
                                    <div className="row">
                                        { this.state.posts.map( (post) => (
                                            <Post key={post.id} post={post}/>                            
                                        ))}
                                    </div>  
                                </div>
                            </div>
                        </div>                    
                    </div>
                }
            </Fragment>
        )
    }
}

export default Profile