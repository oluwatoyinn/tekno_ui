import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getClients} from '../actions/ClientAction'
import { Button,Modal,ModalHeader,ModalBody, ModalFooter } from 'reactstrap';
import {CustomClientForm} from "../components/CustomFormikFormInput"
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit'
import SimpleReactValidator from 'simple-react-validator' 
import axios from 'axios'

const url= "https://tkl-api.herokuapp.com/api/clients"

class Client extends Component {
    constructor(props) {
        super(props)

        this.state = {

            companyName: "",
            address: "",
            state: "",
            city: "",
            website: "",
            email: "",
            contactPerson: "",
            contactNo: "",
            contractValue: "",
            modal:false,
            isEdit:false      
        }
      this.validator = new SimpleReactValidator();

    }

    componentDidMount() {
        this.props.getClients()
    }

    toggle=()=>{
        this.setState({
            modal:!this.state.modal,
            isEdit:false
        })
    }

    handleChange =event=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    handleSubmit =(event)=>{
        event.preventDefault()
        const{
            companyName,
            address,
            state,
            city,
            website,
            email,
            contactPerson,
            contactNo,
            contractValue
        }=this.state

        const newClient= {
            companyName: companyName,
            address:address,
            state:state,
            city:city,
            website:website,
            email:email,
            contactPerson: contactPerson,
            contactNo:contactNo,
            contractValue: contractValue
        }
      axios.post(`${url}`, newClient)
      .then(res=>{
          this.setState({
              modal:false,
          })

          this.props.getClients()  
      })
    }


    deleteRow =(id)=>{
        axios.delete(`${url}/${id}`)
        .then(res=>{
            this.props.getClients()
        })
    }

    // Edit start here

    resetFormData =()=>{
        this.setState({
            companyName: "",
            address: "",
            state: "",
            city: "",
            website: "",
            email: "",
            contactPerson: "",
            contactNo: "",
            contractValue: ""
        })
    }

updateSubmit =(e)=>{
    e.preventDefault()

    const newClient= {
        companyName:this.state.companyName,
        address:this.state.address,
        state:this.state.state,
        city:this.state.city,
        website:this.state.website,
        email:this.state.email,
        contactPerson:this.state.contactPerson,
        contactNo:this.state.contactNo,
        contractValue: this.state.contractValue
    }
    axios.put(`${url}/${this.state.id}`,newClient)
    .then(res=>{
        this.setState({
            modal:false
        })
        this.props.getClients()
        this.resetFormData()
    })
}

    getSingleClient=(id)=>{
        this.setState({
            isEdit:true
        })
        axios.get(`${url}/${id}`)
        .then(res=>{
            this.setState({
                 id:res.data.data.id, 
                 companyName:res.data.data.companyName, 
                 address:res.data.data.address, 
                 state:res.data.data.state, 
                 city:res.data.data.city, 
                 website:res.data.data.website, 
                 email:res.data.data.email, 
                 contactPerson:res.data.data.contactPerson, 
                 contactNo:res.data.data.contactNo, 
                 contractValue:res.data.data.contractValue, 
            })
        })
    }

    toggleUpdate= (id)=>{
        this.setState({
            isEdit:true
        })
        this.toggle()
        this.resetFormData()
        setTimeout(()=>{
            this.getSingleClient(id)
        },1000)
        
    }



    render() {
        const {SearchBar} = Search;
        const {clients} = this.props
        const closeBtn = <button className="close" onClick={this.toggle}>&times;</button>


        const rowStyle = { 
            cursor:'pointer',
        };
        const columns =[
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
                dataField: 'companyName',
                text: 'Company Name'
              }, 
              {
                dataField: 'address',
                text: 'Address'
              }, 
              {
                dataField: 'state',
                text: 'State'
              },
              {
                dataField: 'city',
                text: 'City'
              },
              {
                dataField: 'website',
                text: 'Website'
              },
              {
                  dataField: 'email',
                  text: 'Email'
              },
              {
                  dataField: 'contactPerson',
                  text: 'Contact Person'
              },
              {
                  dataField: 'contactNo',
                  text: 'Contact Number'
              },
              {
                dataField: 'contractValue',
                text: 'Contract Value'
              },
              {
                dataField: 'link',
                text: 'Action',
                formatter: (rowContent, row) => {
                    // console.log(row)
                    return ( 
                        <div className="d-flex">
                        <button className="edit" onClick={()=>this.toggleUpdate(row.id)}><i className="fas fa-edit text-success"></i></button>
                        {/* <button className="del" onClick={e=>this.deleteRow(e, row.id)}><i className="far fa-trash-alt bg-danger"></i></button>  */} 
                        <button className="del" onClick={()=>{if(window.confirm('Delete the Row')){this.deleteRow(row.id)}}} ><i className="far fa-trash-alt bg-danger"></i></button> 
                        </div>  
                    )
                  }
            },
        ]
        return (
            <React.Fragment>
                        <div className="row">
                        <div className="col-md-8">
                            <h5 className="text-left">Client Details</h5>
                        </div>
                        <div className="col-md-4">
                            <button className="btn btn-outline-primary float-right mb-3" onClick={this.toggle} >
                                <i className="fa fa-plus" ></i> Client
                            </button>
                        </div>
                    </div>
                    {/* Pagination and Search Button start here */}
                     <div className="card">
                        <div className="card-body pt-1">
                            <ToolkitProvider
                             keyField="id"
                             caption="List of Ambassador"
                             data={clients}
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
                                                // rowEvents={rowEvents}
                                                hover
                                            />
                                        </div>
                                      )
                                }
                            </ToolkitProvider>
                        </div>
                    </div>
                    {/* MODAL START HERE  */}

                    <Modal 
                            isOpen={this.state.modal} 
                            toggle={this.toggle} 
                            size="xl"
                            backdrop="static"
                            >
                                    <ModalHeader toggle={this.toggle} close={closeBtn}>Add New Client</ModalHeader>
                                    <ModalBody >
                                        <div className="row">
                                            <CustomClientForm
                                                label="Company Name"
                                                labelFor="companyName"
                                                name="companyName"
                                                type="text"
                                                value={this.state.companyName}
                                                onChange={this.handleChange}
                                            />

                                            {/* <CustomClientForm
                                                label="Adress"
                                                labelFor="address"
                                                name="address"
                                                type="text"
                                                value={this.state.address}
                                                onChange={this.handleChange}
                                            /> */}
                                            <legend>Address</legend>
                                            <textarea name="address" 
                                                value={this.state.address} 
                                                onChange={this.handleChange} id="nMA" 
                                                cols="15" rows="4"
                                            />
                                            
                                            {/* <CustomClientForm
                                                label="State"
                                                labelFor="state"
                                                name="state"
                                                type="select"
                                                value={this.state.state}
                                                onChange={this.handleChange}
                                            /> */}
                                           
                                                    <legend>State</legend>
                                                    <select name="state" value={this.state.state} onChange={this.handleChange} id="state">
                                                        <option value="" selected="selected">- Select -</option>
                                                        <option value="Abuja FCT">Abuja FCT</option>
                                                        <option value="Abia">Abia</option>
                                                        <option value="Adamawa">Adamawa</option>
                                                        <option value="Akwa Ibom">Akwa Ibom</option>
                                                        <option value="Anambra">Anambra</option>
                                                        <option value="Bauchi">Bauchi</option>
                                                        <option value="Bayelsa">Bayelsa</option>
                                                        <option value="Benue">Benue</option>
                                                        <option value="Borno">Borno</option>
                                                        <option value="Cross River">Cross River</option>
                                                        <option value="Delta">Delta</option>
                                                        <option value="Ebonyi">Ebonyi</option>
                                                        <option value="Edo">Edo</option>
                                                        <option value="Ekiti">Ekiti</option>
                                                        <option value="Enugu">Enugu</option>
                                                        <option value="Gombe">Gombe</option>
                                                        <option value="Imo">Imo</option>
                                                        <option value="Jigawa">Jigawa</option>
                                                        <option value="Kaduna">Kaduna</option>
                                                        <option value="Kano">Kano</option>
                                                        <option value="Katsina">Katsina</option>
                                                        <option value="Kebbi">Kebbi</option>
                                                        <option value="Kogi">Kogi</option>
                                                        <option value="Kwara">Kwara</option>
                                                        <option value="Lagos">Lagos</option>
                                                        <option value="Nassarawa">Nassarawa</option>
                                                        <option value="Niger">Niger</option>
                                                        <option value="Ogun">Ogun</option>
                                                        <option value="Ondo">Ondo</option>
                                                        <option value="Osun">Osun</option>
                                                        <option value="Oyo">Oyo</option>
                                                        <option value="Plateau">Plateau</option>
                                                        <option value="Rivers">Rivers</option>
                                                        <option value="Sokoto">Sokoto</option>
                                                        <option value="Taraba">Taraba</option>
                                                        <option value="Yobe">Yobe</option>
                                                        <option value="Zamfara">Zamfara</option>
                                                        <option value="Outside Nigeria">Outside Nigeria</option>
                                                    </select>
                                               
                                            <CustomClientForm
                                                label="City"
                                                labelFor="city"
                                                name="city"
                                                type="text"
                                                value={this.state.city}
                                                onChange={this.handleChange}
                                            />

                                            <CustomClientForm
                                                label="Website"
                                                labelFor="website"
                                                name="website"
                                                type="text"
                                                value={this.state.website}
                                                onChange={this.handleChange}
                                            />
                                        
                                            <CustomClientForm
                                                label="Email"
                                                labelFor="email"
                                                name="email"
                                                type="email"
                                                value={this.state.email}
                                                onChange={this.handleChange}
                                            />
                                
                                            <CustomClientForm
                                                label="Contact Person"
                                                labelFor="contactPerson"
                                                name="contactPerson"
                                                type="text"
                                                value={this.state.contactPerson}
                                                onChange={this.handleChange}
                                            />

                                            <CustomClientForm
                                                label="Contact Number"
                                                labelFor="contactNo"
                                                name="contactNo"
                                                type="number"
                                                value={this.state.contactNo}
                                                onChange={this.handleChange}
                                            />
                                            <CustomClientForm
                                                label="Contract Value"
                                                labelFor="contractValue"
                                                name="contractValue"
                                                type="number"
                                                value={this.state.contractValue}
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                        
                                    </ModalBody>
                                    <ModalFooter>

                                        {this.state.isEdit?
                                        <Button className="bg-primary w-100" onClick={this.updateSubmit} >Update Client</Button>
                                        :
                                        <Button  className="bg-primary w-100" onClick={this.handleSubmit} >Add New</Button>
                                        } 
                                        
                                    </ModalFooter>
                            </Modal>
            </React.Fragment>
        )
    }
}

const mapStateToProps =state=>({
    clients : state.ClientReducer.clients
})

export default connect(mapStateToProps,{getClients} ) (Client)
