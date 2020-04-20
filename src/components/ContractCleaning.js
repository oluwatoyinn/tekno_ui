import React, { Component } from 'react'
import axios from 'axios'
// import {Link} from 'react-router-dom'

class ContractCleaning extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         data:[]
      }
    }



    componentDidMount() {
      this.getAmbassador()
    }
    
    getAmbassador =() =>{
        axios.get(`https://reqres.in/api/users`)
        .then(res=>{
            this.setState({
                data:res.data.data
            })
        })
    }
    
    render() {

        const mydata = this.state.data.map((amb,index)=>{
            return(
                <tr className="table table-striped table-hover" key={amb.id}>
                    <td>{index+1}</td>
                    <td>{amb.first_name}</td>
                    <td>{amb.last_name}</td>
                    <td>{amb.email}</td>
                    <td>{amb.avatar}</td>
                </tr>
            )
        })
        return (
            <>
            <div className="row">
                <div className="col-md-12 clearfix mb-2">
                    <h5 className="d-inline">User Profile</h5>
                    <button className="btn btn-danger d-inline float-right" data-toggle="modal" data-target="#exampleModal">
                    Add Ambassador
                    </button>
                </div>
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">FirstName</th>
                                <th scope="col">LastName</th>
                                <th scope="col">Email</th>
                                <th scope="col">Profile</th>
                            </tr>
                        </thead>
                       
                        <tbody>
                            {mydata}
                        </tbody>
                        
                    </table>           
            </div>   
            </>
        )
    }
}

export default ContractCleaning
