import React, { Component } from 'react'
import axios from 'axios'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import {axiosClient} from '../utils/configs'
import SimpleReactValidator from 'simple-react-validator' 
import ApiCalls from '../utils/ApiCalls'
import {getAmbassador,postAmbassador} from '../actions/AmbassadorAction'
import {connect} from 'react-redux'
import {ErrMsg} from "../utils/StyledConstant"
import SweetAlert from 'react-bootstrap-sweetalert'
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';

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
    componentDidMount() {
    //   this.getAmbassador()
        this.props.getAmbassador()
    }
    
    // getAmbassador =() =>{
    //     ApiCalls.getAmbassador()
    //     .then(res=>{
    //         this.setState({
    //             data:res.data.sort((a,b)=>a-b).reverse()
    //         })
    //     })
    // }

    
    
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
    this.setState({
        isEdit:true
    })
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

updateToggle = (e,id) => {
    e.preventDefault()
    this.setState({
        isEdit:true
    })
    this.toggle()
    this.resetFormData()
    setTimeout(()=>{
        this.getSingleAmbassador(id)
    },100)
    // this.setState({
    //     address:row.address
    // })

    
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
        
        const { SearchBar } = Search;
        
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

       

        const columns = [
            {
              dataField: 'id',
              text: '#',
              hidden:true
            }, 
            {
              dataField: '#',
              text: '#',
              headerStyle: (colum, colIndex) => {
                  return { width: '80px' };
                },
              formatter: (amb, row, rowIndex, extraData) => (
                 
                      <div>
                          {rowIndex+1}
                      </div>
                ),
            
            }, 
            {
              dataField: 'name',
              text: 'Name'
            }, 
            {
              dataField: 'address',
              text: 'address'
            }, 
            {
              dataField: 'email',
              text: 'Email'
            },
            {
              dataField: 'phoneNumber',
              text: 'Phone Number'
            },
            {
              dataField: 'guarantor',
              text: 'Guarantor'
            },
            {
                dataField: 'location',
                text: 'Location'
            },
            {
                dataField: 'link',
                text: 'Action',
                formatter: (rowContent, row) => {
                    // console.log(row)
                    return ( 
                        <div>
                        <button className="edit" onClick={e=>this.updateToggle(e, row.id)} ><i className="fas fa-edit text-success"></i></button>
                        <button className="del" onClick={this.deleteRow.bind(this, row.id)}><i className="far fa-trash-alt bg-danger"></i></button> 
                        </div>  
                    )
                  }
            },
          ];

 

            const rowStyle = { 
                cursor:'pointer',
            };

            return(
                <React.Fragment>
                    <div className="row">
                        <div className="col-md-8">
                            <h5 className="text-left">List of Ambassador</h5>
                        </div>
                        <div className="col-md-4">
                            <button className="btn btn-outline-primary float-right mb-3" onClick={this.toggle}>
                                <i className="fa fa-plus"></i> Ambassador
                            </button>
                        </div>
                    </div>
                    {/* Pagination and Search Button start here */}
                     <div className="card">
                        <div className="card-body pt-1">
                            <ToolkitProvider
                             keyField="id"
                             caption="List of Ambassador"
                             data={ambassadors}
                             columns={ columns }
                             search
                             >
                                {
                                    props => (
                                        <div className="mt-1"> 
                                                < SearchBar  { ...props.searchProps } />                                           
                                            {/* <hr /> */}
                                            <BootstrapTable
                                                { ...props.baseProps }
                                                pagination={ paginationFactory() }
                                                rowStyle = {rowStyle}
                                                bordered={false}
                                                hover
                                            />
                                        </div>
                                      )
                                }
                            </ToolkitProvider>
                        </div>
                    </div>
                    {/* Pagination and Search button ends here */}

                    {/* Modal start here */}

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
                        <Button className="bg-primary w-100" onClick={this.validateFinalSubmit}>Add New</Button>
                        }
                        
                    </ModalFooter>
                    </Modal>

                    {this.state.alert}
                </React.Fragment>

            )
    }
}

const mapStateToProps = state=>({

    ambassadors:state.AmbassadorReducer.ambassadors,
    errors:state.AmbassadorReducer.errors,
    id:state.AmbassadorReducer.id


})

export default connect(mapStateToProps,{getAmbassador,postAmbassador})(ContractCleaning)
