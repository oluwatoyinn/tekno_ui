import React, { Component } from 'react'
import axios from 'axios'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import {Link} from 'react-router-dom'
import {axiosClient} from '../utils/configs'
import SimpleReactValidator from 'simple-react-validator' 
import ApiCalls from '../utils/ApiCalls'
import {getAmbassador,postAmbassador} from '../actions/AmbassadorAction'
import {connect} from 'react-redux'
import {ErrMsg} from "../utils/StyledConstant"
import SweetAlert from 'react-bootstrap-sweetalert'

const url = "/biodata"
// Form V

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

         modal:false,
         isEdit:false,
         alert:null
      }

      this.validator = new SimpleReactValidator();
    }

// Get 
    // componentDidMount() {
    // //   this.getAmbassador()
    //     this.props.getAmbassador()
    // }
    
    // getAmbassador =() =>{
    //     ApiCalls.getAmbassador()
    //     .then(res=>{
    //         this.setState({
    //             data:res.data.sort((a,b)=>a-b).reverse()
    //         })
    //     })
    // }
    
// Post

// Testing API start from here 
componentDidMount(){
    this.getNewAmbassador()
}

getNewAmbassador=()=>{
    axios.get(`http://127.0.0.1:8000/api/ambassadors`)
    .then(res =>{
        this.setState({
            data:res.data.data
        })
    })
}
// Testing API end here 

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

handleSubmit = () =>{
    const ambassador ={
        name:this.state.name,
        address:this.state.address,
        phoneNumber:this.state.phoneNumber,
        email:this.state.email,
        guarantor:this.state.guarantor,
        location:this.state.location
    }

    // await this.props.postAmbassador(ambassador);

    ApiCalls.PostAmbassador(ambassador)
    .then(res =>{

        const displayAlert = () =>(
           <SweetAlert
            confirmBtnText="Okay"
            confirmBtnBsStyle="success"
            onConfirm={() =>this.hideAlert()}
            title="Successfully Added"
           /> 
        );
        this.setState({
            alert:displayAlert(),
            modal:false
        })
        this.props.getAmbassador()
        this.resetFormData()
    })
   
}

// handle testing API post start from here 
handleNewSubmit=(e)=>{
    e.preventDefault();

    const newAmbassador ={
        name:this.state.name,
        address:this.state.address,
        phoneNumber:this.state.phoneNumber,
        email:this.state.email,
        guarantor:this.state.guarantor,
        location:this.state.location
    }
    axios.post(`http://127.0.0.1:8000/api/ambassadors`, newAmbassador)
    .then(res=>{
        this.setState({
            modal:false
        })
    })
    this.getNewAmbassador()
}

// Handle testing API put request start from here

updateNewSubit = (e)=>{
    e.preventDefault();

    const newAmbassador ={
        name:this.state.name,
        address:this.state.address,
        phoneNumber:this.state.phoneNumber,
        email:this.state.email,
        guarantor:this.state.guarantor,
        location:this.state.location
    }
    axios.put(`http://127.0.0.1:8000/api/ambassadors/${this.state.id}`, newAmbassador)
    .then(res=>{
        this.setState({
            modal:false
        })
    })
    this.getNewAmbassador()
}

getSingleNewAmbassador =(id)=>{
    this.setState({
        isEdit:true
    })
    axios.get(`http://127.0.0.1:8000/api/ambassadors/${id}`)
    .then(res=>{
        this.setState({
            id:res.data.data.id,
            name:res.data.data.name,
            address:res.data.data.address,
            phoneNumber:res.data.data.phoneNumber,
            email:res.data.data.email,
            guarantor:res.data.data.guarantor,
            location:res.data.data.location
        })
    })
}

updateNewToggle=(e,id) =>{
    e.preventDefault();
    this.setState({
        modal:true
    })
    setTimeout(()=>{
        this.getSingleNewAmbassador(id)
    },1000)
}

deleteNewRow =(id)=>{
    axios.delete(`http://127.0.0.1:8000/api/ambassadors/${id}`)
    .then(res=>{
        this.setState({})
    })
    this.getNewAmbassador()
}


hideAlert = ()=> {

    this.setState({
    alert: null,
    modal:false
   
    });
   this.props.getAmbassador()
    this.resetFormData()
   
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
        modal:!this.state.modal,
        isEdit:false
    })
    this.validator.hideMessages()
}

//Put post start from here 

updateSubmit =(e)=>{
    e.preventDefault();

    const ambassador ={
        name:this.state.name,
        address:this.state.address,
        phoneNumber:this.state.phoneNumber,
        email:this.state.email,
        guarantor:this.state.guarantor,
        location:this.state.location
    }
    axios.put(`http://localhost:3000/biodata/${this.state.id}`,ambassador)
//    ApiCalls.putAmbassador(`/${this.state.id}`,ambassador)
   .then(res=>{
    const updateAlert = () =>(
        <SweetAlert
         confirmBtnText="Okay"
         confirmBtnBsStyle="success"
         onConfirm={() =>this.hideAlert()}
         title="Ambassador Updated"
        /> 
     );

       this.setState({
           alert:updateAlert(),
           modal:false
       })
       this.props.getAmbassador()
       this.resetFormData()
   })
}

getSingleAmbassador(id){
    axios.get(` http://localhost:3000/biodata/${id}`)
    .then(res=>{
        this.setState({
            id:res.data.id,
            name:res.data.name,
            address:res.data.address,
            phoneNumber:res.data.phoneNumber,
            email:res.data.email,
            guarantor:res.data.guarantor,
            location:res.data.location
        })
    })
}

// updateAmbassador=()=>{
//     const ambassador ={
//         name:this.state.name,
//         address:this.state.address,
//         phoneNumber:this.state.phoneNumber,
//         email:this.state.email,
//         guarantor:this.state.guarantor,
//         location:this.state.location
//     }
//     axios.put(`http://localhost:3000/biodata/${this.state.id}`.id, ambassador)
//     .then(res=>{
//         console.log(res)
//     })
// }

updateToggle = (e,id) => {
    e.preventDefault()
    this.setState({
        modal:true,
        isEdit:true
    })
    this.resetFormData()
    setTimeout(()=>{
        this.getSingleAmbassador(id)
    },1000)  
}

// Delete Post
deleteRow =(id)=>{
    axios.delete(`http://localhost:3000/biodata/${id}`)
    // ApiCalls.deleteAmbassador(`${id}`)
    // axiosClient.delete(`AmbassadorUrl/${id}`)
    .then(res =>{
        const deleteAlert = () =>(
            <SweetAlert
             confirmBtnText="Okay"
             confirmBtnBsStyle="danger"
             onConfirm={() =>this.hideAlert()}
             title="Ambassador Deleted"
            /> 
         );

         this.setState({
             alert:deleteAlert()
         })
        
    })
    this.props.getAmbassador()
}


    render() {

        const {ambassadors} = this.props
     
        // const mydata = ambassadors.map((amb,index)=>{

            const mydata = this.state.data.map((amb,index)=>{
            return(
                <tr className="table table-striped table-hover my-3" key={amb.id}  >
                    <td>{index+1}</td>
                    <td>{amb.name}</td>
                    <td>{amb.address}</td>
                    <td>{amb.email}</td>
                    <td>{amb.phoneNumber}</td>
                    <td>{amb.guarantor}</td>
                    <td>{amb.location}</td>
                    <td>
                    <button className="edit" onClick={e=>this.updateNewToggle(e,amb.id)} ><i className="fas fa-edit text-success"></i></button> {" "}
                    <button className="del" onClick={this.deleteNewRow.bind(this,amb.id)}><i className="far fa-trash-alt bg-danger"></i></button> 
                    </td>
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
            location,
            isEdit
        } = this.state
        
        return (
            <>
            <div className="row shadow-md">
                <div className="col-md-12 clearfix">
                    
                    <div className="row">
                            <div className="col-md-8">
                                <h5 className="d-inline">User Profile</h5>
                            </div>
                            <div className="col-md-4">
                                <button className="btn btn-success float-right mb-2" onClick={this.toggle}>
                                    <i className="fa fa-plus"></i>Ambassador
                                </button>
                            </div>
                            {/* <Link  className="btn btn-default btn-rounded mb-4" data-toggle="modal" data-target="#modalContactForm" onClick={this.toggle}>New Ambassador</Link> */}
                       <div className="col-md-12">
                           <div className="card">
                               <div className="card-body">
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
                                            <th scope="col">Action</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {mydata}
                                    </tbody>
                                    </table>  
                               </div>
                           </div>
                       </div>
                   </div>
                   
                </div>
                  
{/* Modal Start here */}

                
                    
                    <Modal 
                    isOpen={this.state.modal} 
                    toggle={this.toggle} 
                    size="lg"
                    backdrop="static"
                    >
                    <ModalHeader toggle={this.toggle} close={closeBtn}>Add New Ambassador</ModalHeader>
                    <ModalBody >
                        <div className="row">
                        <div className="md-form col-6 mb-3 ">
                            <label data-error="wrong" data-success="right" htmlFor="name">Name</label>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon3"><i className="fas fa-user prefix grey-text" /></span>
                                    </div>
                                    <input 
                                        type="text" 
                                        id="name" 
                                        name="name"
                                        value={name} 
                                        onChange={this.handleChange} 
                                        className="form-control validate" />
                                </div>
                                <ErrMsg className="text-danger">{this.validator.message('name', name, 'required')}</ErrMsg>
                        </div>

                        <div className="md-form col-6 mb-3">
                            <label data-error="wrong" data-success="right" htmlFor="address">Address</label>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon3"><i className="fas fa-address-card"></i></span>
                                    </div>
                                    <input 
                                        type="text" 
                                        id="address" 
                                        name="address" 
                                        value={address} 
                                        onChange={this.handleChange} 
                                        className="md-textarea form-control" />
                                </div>
                            <ErrMsg>{this.validator.message('address', address, 'required')} </ErrMsg>
                        </div>

                        <div className="md-form col-6 mb-3">
                             <label data-error="wrong" data-success="right" htmlFor="email">Email</label>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon3"> <i className="fas fa-envelope prefix grey-text"/> </span>
                                    </div>
                                    <input 
                                        type="email" 
                                        id="email" 
                                        name="email" 
                                        value={email} 
                                        onChange={this.handleChange} 
                                        className="form-control validate" />
                                </div>
                           <ErrMsg>{this.validator.message('email',email, 'required|email')}</ErrMsg> 
                        </div>

                        <div className="md-form col-6 mb-3">
                            <label data-error="wrong" data-success="right" htmlFor="phoneNumber">Phone Number</label>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon3"><i className="fas fa-phone prefix grey-text" /></span>
                                    </div>
                                    <input 
                                        type="number" 
                                        id="phoneNumber" 
                                        name="phoneNumber" 
                                        value={phoneNumber} 
                                        onChange={this.handleChange} 
                                        className="form-control validate" />
                                </div>
                            <ErrMsg>{this.validator.message('phoneNumber',phoneNumber, 'required|numeric')}</ErrMsg>
                        </div>

                        <div className="md-form col-6 mb-3">
                            <label data-error="wrong" data-success="right" htmlFor="guarantor">Guarantor</label>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon3"><i className="fas fa-user prefix grey-text" /></span>
                                    </div>
                                        <input 
                                        type="text" 
                                        id="guarantor" 
                                        name="guarantor" 
                                        value={guarantor} 
                                        onChange={this.handleChange} 
                                        className="form-control validate" />
                                </div>
                            <ErrMsg>{this.validator.message('guarantor', guarantor, 'required')}</ErrMsg>
                        </div>

                        <div className="md-form col-6 mb-3">
                            <label data-error="wrong" data-success="right" htmlFor="location">Location</label>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon3"><i className="fa fa-map-marker prefix grey-text" /></span>
                                    </div>
                                        <input 
                                        type="text" 
                                        id="location" 
                                        name="location" 
                                        value={location} 
                                        onChange={this.handleChange} 
                                        className="form-control validate" />
                                </div>
                            <ErrMsg>{this.validator.message('location',location, 'required')}</ErrMsg>
                        </div>
                        </div>
                        
                    </ModalBody>
                    <ModalFooter>

                        {isEdit?
                        <Button className="bg-primary w-100" onClick={this.updateSubmit}>Update Ambassador</Button>
                        :
                        <Button className="bg-primary w-100" onClick={this.handleNewSubmit}>Add New</Button>
                        }
                        
                    </ModalFooter>
                    </Modal>
              
                    {this.state.alert}
            </div>   
            </>
        )
    }
}



const mapStateToProps = state=>({

    ambassadors:state.AmbassadorReducer.ambassadors,
    errors:state.AmbassadorReducer.errors


})

export default connect(mapStateToProps,{getAmbassador,postAmbassador})(ContractCleaning)
