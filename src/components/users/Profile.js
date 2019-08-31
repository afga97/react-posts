import React, { Component, Fragment } from 'react';
import services from '../../config/services';
import DetailUser from './DetailUser';

const initialProfile = {
    company: {},
    address: {},
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
            ...initialProfile
        }
    }

    async componentDidMount() {
        const { id } = this.props.match.params;
        const user = await services.getUser(id);
        this.setState({
            ...user.data
        })
    }

    render() {

        return (
            <Fragment>
                <div className="d-flex" id="wrapper">
                    <DetailUser user={this.state}/>
                    <div id="page-content-wrapper">
                        <div className="container-fluid">
                            <h1 className="mt-4">Content</h1>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Profile