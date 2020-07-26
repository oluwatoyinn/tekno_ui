// import React, { Component } from 'react'
// import {getJwt} from './helpers/GetJwt'
// import axios from 'axios'
// import {regUrl} from '../utils/ApiCalls'

class AuthService extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user:undefined     
        }
    }

    componentDidMount(){
        const jwt = getJwt()
        if(!jwt){
            this.props.history.push('/')
        }
        axios.get(`${regUrl}/api/profile`, {headers: {Authorization:`Bearer ${jwt}`}})
        .then(res =>this.setState({
            user:res.data
        })).catch(err =>{
            localStorage.removeItem('local_jwt')
            this.props.history.push('/')
        })
    } 

    render() {
        if(this.state.user===undefined){
            return(
                <div>Loading....</div>
            )
        }
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

export default AuthService
