import React, { Component, Fragment } from 'react'
import Header from '../layouts/Header';
import User from './User';
import services from '../../config/services';

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
        })        
    }

    render() {
        return (
            <Fragment>
                <Header />
                <div className="container-fluid">
                    <div className="row">
                        { this.state.users.map( (user) => (
                            <User key={user.id} user={user}/>
                        ))}
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Principal
