import React, { Component } from 'react'
import axios from 'axios'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {axiosClient} from '../utils/configs'
import {Formik } from 'formik'
import * as Yup from 'yup'

const url = "/biodata"

// Form Validation

const validationSchema = Yup.object().shape({
    name: Yup.string().max(15, "must be 15 character or less").required("required"),
    address: Yup.string().min(2).required("required"),
    phoneNumber: Yup.string().min(5, "must have a character").required("must enter your contact"),
    email: Yup.string().email("Invalid email address").required("Enter a valid email address"),
    guarantor: Yup.string().min(20, "must be 20 character or less").required("required"),
    location: Yup.string().min(2).required("required"),

})

// 

class ContractCleaning extends Component {
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
    
                        <Formik initialValues={
                            {   
                                name:"",
                                address:"",
                                email:"",
                                phoneNumber:"",
                                guarantor:"",
                                location:""
                            }}
                            validationSchema={validationSchema}
                            > 
                            {formik=>(
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
                                            className="form-control validate" 
                                            />
                                            {formik.errors.name && formik.touched.name  ? (<div style={{color: 'red'}} >{formik.errors.name}</div>) :null}       
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
                                            className="md-textarea form-control" 
                                          
                                            />
                                            {formik.errors.address && formik.touched.address  ? (<div style={{color: 'red'}} >{formik.errors.address}</div>) :null}
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
                                            className="form-control validate"
                                             />
                                            {formik.errors.email && formik.touched.email  ? (<div style={{color: 'red'}}>{formik.errors.email}</div>) :null}
        
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
                                            className="form-control validate"
                                             />
                                            {formik.errors.phoneNumber && formik.touched.phoneNumber ? (<div style={{color: 'red'}} >{formik.errors.phoneNumber}</div>) : null}       
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
                                            className="form-control validate"
                                             />
                                            {formik.errors.guarantor && formik.touched.guarantor  ? (<div style={{color: 'red'}} >{formik.errors.guarantor}</div>) :null}       
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
                                            className="form-control validate" 
                                             />
                                            {formik.errors.location && formik.touched.location ? (<div style={{color: 'red'}} >{formik.errors.location}</div>) :null}       
                                        </div>


                                    </ModalBody>
                                    <ModalFooter>
                                        <Button className="bg-primary w-100" onClick={this.handleSubmit}>Add New</Button>
                                    </ModalFooter>
                                </Modal>
                            )}               
                        </Formik>  
    
                </div>   
                </>
            )
        }
    }  



export default ContractCleaning
