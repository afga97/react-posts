import React, { Component, Fragment } from 'react'
import services from '../../config/services';
import Header from '../layouts/Header';
import User from './User';
import Loader from '../loader/Loader';

export class Principal extends Component {

    constructor(props){
        super(props);
        this.state = {
            users: [],
            is_loading: true,
            user_search: ''
        }
    }

    async componentDidMount(){
        const users = await services.getUsers()
        this.setState({
            users: [ ...users.data ]
        }, () => {
            this.setState({
                is_loading: false
            })
        })      
    }

    searchUser = (e) => {
        this.setState({
            user_search: e.target.value
        })
    }

    filterUsers = () => {
        const users = this.state.users.map( (user) => {
            if (user.name !== this.state.user_search) return { ...user, is_search: false };
            return {
                ...user,
                is_search: true
            }
        })
        this.setState({
            users
        })
    }

    render() {
        return (
            <Fragment>
                {this.state.is_loading ? <Loader /> : 
                    <Fragment>
                        <Header searchUser={this.searchUser} filterUsers={this.filterUsers}/>
                        <div className="container-fluid animation_profile">
                            <div className="row">
                                { this.state.users.map( (user) => (
                                    <User key={user.id} user={user}/>
                                ))}
                            </div>
                        </div>
                    </Fragment>
                }
            </Fragment>
        )
    }
}

export default Principal
