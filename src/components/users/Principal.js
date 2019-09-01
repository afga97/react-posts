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
            is_loading: true
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

    render() {
        return (
            <Fragment>
                {this.state.is_loading ? <Loader /> : 
                    <Fragment>
                        <Header/>
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
