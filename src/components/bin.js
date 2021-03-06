import React, { Component } from 'react'
import axios from 'axios'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {Link} from 'react-router-dom'
import {axiosClient} from '../utils/configs'
import SimpleReactValidator from 'simple-react-validator' 

const url = "/biodata"
// Form V

class Bin extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         data:[],
         id:'',
         name:'',
         address:'',
         phoneNumber:'',
         email:'',
         guarantor:'',
         location:'',

         modal:false
      }
      this.validator = new SimpleReactValidator();
    }

// Get 
    componentDidMount() {
      this.getAmbassador()
    }
    
    getAmbassador =() =>{
        axiosClient.get(url)
        .then(res=>{
            this.setState({
                data:res.data.sort((a,b)=>a-b).reverse()
            })
        })
    }
    
// Post

validateFinalSubmit =(event)=>{

    event.preventDefault()
    if(this.validator.allValid())
    {
        this.handleSubmit()
    }else
    {
        this.validator.showMessages()
        this.forceUpdate()
    }

}

handleSubmit =() =>{
    const ambassador ={
        name:this.state.name,
        address:this.state.address,
        phoneNumber:this.state.phoneNumber,
        email:this.state.email,
        guarantor:this.state.guarantor,
        location:this.state.location
    }

    axiosClient.post(url, ambassador)
    .then(res =>{
        this.setState({
            modal:false
        })
        this.getAmbassador()
        this.resetFormData()
    })
   
}

resetFormData =()=>{
    this.setState({
        name:"",
        address:"",
        email:"",
        phoneNumber:"",
        guarantor:"",
        location:""
    })
}

handleChange = event =>{
    this.setState({
        [event.target.name] :event.target.value
    })
}

toggle =() =>{
  this.setState({
      modal:!this.state.modal
  })
}


    render() {


        const mydata = this.state.data.map((amb,index)=>{
            return(
                <tr className="table table-striped table-hover" key={amb.id}>
                    <td>{index+1}</td>
                    <td>{amb.name}</td>
                    <td>{amb.address}</td>
                    <td>{amb.email}</td>
                    <td>{amb.phoneNumber}</td>
                    <td>{amb.guarantor}</td>
                    <td>{amb.location}</td>

                </tr>
            )
        })


        const closeBtn = <button className="close" onClick={this.toggle}>&times;</button>;

        const {
            name,
            address,
            email,
            phoneNumber,
            guarantor,
            location
        } = this.state
        return (
            <>
            <div className="row">
                <div className="col-md-12 clearfix mb-2">
                    <h5 className="d-inline">User Profile</h5>
                    <div className="float-right">
                        {/* <Link  className="btn btn-default btn-rounded mb-4" data-toggle="modal" data-target="#modalContactForm" onClick={this.toggle}>New Ambassador</Link> */}
                        <button className="btn btn-default btn-rounded mb-4" onClick={this.toggle}>New Ambassador</button>
                    </div>
                   
                </div>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Address</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone Number</th>
                                <th scope="col">Guarantor</th>
                                <th scope="col">Location</th>

                            </tr>
                        </thead>
                       
                        <tbody>
                            {mydata}
                        </tbody>
                        
                    </table>  
{/* Modal Start here */}

                
                    
                    <Modal 
                    isOpen={this.state.modal} 
                    toggle={this.toggle} 
                    >
                    <ModalHeader toggle={this.toggle} close={closeBtn}>Add New Ambassador</ModalHeader>
                    <ModalBody>
                        <div className="md-form mb-3">
                            <i className="fas fa-user prefix grey-text" />
                            <label data-error="wrong" data-success="right" htmlFor="name">Name</label>
                            <input 
                            type="text" 
                            id="name" 
                            name="name"
                            value={name} 
                            onChange={this.handleChange} 
                            className="form-control validate" />
                            {this.validator.message('name', name, 'required|alpha')}
                        </div>

                        <div className="md-form mb-3">
                            <i className="fas fa-pencil prefix grey-text" />
                            <label data-error="wrong" data-success="right" htmlFor="address">Address</label>
                            <input 
                            type="text" 
                            id="address" 
                            name="address" 
                            value={address} 
                            onChange={this.handleChange} 
                            className="md-textarea form-control" />
                            {this.validator.message('address', address, 'required|alpha')}
                        </div>

                        <div className="md-form mb-3">
                            <i className="fas fa-envelope prefix grey-text" />
                            <label data-error="wrong" data-success="right" htmlFor="email">Email</label>
                            <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            value={email} 
                            onChange={this.handleChange} 
                            className="form-control validate" />
                            {this.validator.message('email',email, 'required|email')}
                        </div>

                        <div className="md-form mb-3">
                            <i className="fas fa-tag prefix grey-text" />
                            <label data-error="wrong" data-success="right" htmlFor="phoneNumber">Phone Number</label>
                            <input 
                            type="number" 
                            id="phoneNumber" 
                            name="phoneNumber" 
                            value={phoneNumber} 
                            onChange={this.handleChange} 
                            className="form-control validate" />
                            {this.validator.message('phoneNumber',phoneNumber, 'required|numeric')}
                        </div>

                        <div className="md-form mb-3">
                            <i className="fas fa-user prefix grey-text" />
                            <label data-error="wrong" data-success="right" htmlFor="guarantor">Guarantor</label>
                            <input 
                            type="text" 
                            id="guarantor" 
                            name="guarantor" 
                            value={guarantor} 
                            onChange={this.handleChange} 
                            className="form-control validate" />
                            {this.validator.message('guarantor', guarantor, 'required|alpha')}
                        </div>

                        <div className="md-form mb-3">
                            <i className="fas fa-user prefix grey-text" />
                            <label data-error="wrong" data-success="right" htmlFor="location">Location</label>
                            <input 
                            type="text" 
                            id="location" 
                            name="location" 
                            value={location} 
                            onChange={this.handleChange} 
                            className="form-control validate" />
                            {this.validator.message('location',location, 'required|alpha')}
                        </div>
                        
                    </ModalBody>
                    <ModalFooter>
                        <Button className="bg-primary w-100" onClick={this.validateFinalSubmit}>Add New</Button>
                    </ModalFooter>
                    </Modal>
              

            </div>   
            </>
        )
    }
}

export default Bin
