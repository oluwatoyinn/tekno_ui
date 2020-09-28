import React,{useEffect, useState} from 'react'
import {connect} from "react-redux"
import {getClients} from '../../actions/ClientAction'
import { Button,Modal,ModalHeader,ModalBody, ModalFooter } from 'reactstrap';
// import {CustomClientForm} from "../components/CustomFormikFormInput"
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit'
// import SimpleReactValidator from 'simple-react-validator' 
import {CustomClientForm} from '../../components/CustomFormikFormInput'
import axios from 'axios'

const Hookclient=(props) =>{


    const [modal, setModal] = useState(false)

    const toggle=()=>{
        setModal(!modal)
    }
    useEffect(()=>{
        props.getClients()
    })

    const closeBtn = <button className="close" onClick={toggle}>&times;</button>
    const {clients} = props
    const {SearchBar} = Search
    const rowStyle = { cursor:'pointer'}
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
                    <button className="edit" ><i className="fas fa-edit text-success"></i></button>
                    <button className="del" ><i className="far fa-trash-alt bg-danger"></i></button> 
                    </div>  
                )
              }
        },
    ]
    return (
        <React.Fragment>
            <div>
                <div className="row">
                    <div className="col-md-8">
                        <h5 className="text-left">Teknokleen Client Details</h5>
                    </div>
                    <div className="col-md-4">
                        <button className="btn btn-outline-primary float-right mb-3" onClick={toggle} >
                            <i className="fa fa-plus" ></i> Client
                        </button>
                    </div>
                </div>
                 {/* Pagination and Search Button start here */}
                 <div className="card">
                        <div className="card-body pt-1">
                            <ToolkitProvider
                             keyField="id"
                             caption="Clients List"
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
                    {/* Modal start here  */}
                    <Modal 
                            isOpen={modal} 
                            toggle={toggle} 
                            size="lg"
                            backdrop="static"
                            >
                                    <ModalHeader toggle={toggle} close={closeBtn}>Add New Client</ModalHeader>
                                    <ModalBody >
                                        <div className="container">
                                        <div className="row">
                                            <div className="col-6">
                                                <CustomClientForm className="w-100 mb-3"
                                                    label="Company Name"
                                                    labelFor="companyName"
                                                    name="companyName"
                                                    type="text"
                                                    // value={this.state.companyName}
                                                    // onChange={this.handleChange}
                                                />
                                            </div>
                                            <div className="col-3 ">
                                                <CustomClientForm className="w-100"
                                                    label="City"
                                                    labelFor="city"
                                                    name="city"
                                                    type="text"
                                                    // value={this.state.city}
                                                    // onChange={this.handleChange}
                                                />
                                            </div>
                                            <div className="col-3">
                                                <h2 className="state-h2">State</h2>
                                                    <select name="state" id="state" className="w-100">
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
                                            </div>
                                           
                                            
                                            <div className="col-6">
                                                <CustomClientForm className="w-100 mb-3"
                                                    label="Website"
                                                    labelFor="website"
                                                    name="website"
                                                    type="text"
                                                    // value={this.state.website}
                                                    // onChange={this.handleChange}
                                                />
                                            </div>
                                            <div className="col-6"> 
                                                <CustomClientForm className="w-100"
                                                    label="Email"
                                                    labelFor="email"
                                                    name="email"
                                                    type="email"
                                                    // value={this.state.email}
                                                    // onChange={this.handleChange}
                                                />
                                            </div>
                                            <div className="col-12 ">
                                                <legend>Address</legend>
                                                    <textarea className="w-100 mb-2" name="address" 
                                                        // value={this.state.address} 
                                                        // onChange={this.handleChange} 
                                                        id="nMA" 
                                                        cols="10" rows="2"
                                                    />
                                            </div>
                                            
                                            <div className="col-6">
                                                <CustomClientForm className="w-100"
                                                label="Contact Person"
                                                labelFor="contactPerson"
                                                name="contactPerson"
                                                type="text"
                                                // value={this.state.contactPerson}
                                                // onChange={this.handleChange}
                                                />
                                            </div>
                                            <div className="col-3">
                                                <CustomClientForm className="w-100"
                                                label="Contact Number"
                                                labelFor="contactNo"
                                                name="contactNo"
                                                type="number"
                                                // value={this.state.contactNo}
                                                // onChange={this.handleChange}
                                                />
                                            </div>
                                            <div className="col-3">
                                                <CustomClientForm  className="w-100"
                                                label="Contract Value"
                                                labelFor="contractValue"
                                                name="contractValue"
                                                type="number"
                                                // value={this.state.contractValue}
                                                // onChange={this.handleChange}
                                                />
                                            </div>
                                            
                                        </div>
                                        </div>
                                    </ModalBody>
                                    <ModalFooter>

                                        {/* {this.state.isEdit?
                                        <Button className="bg-primary w-100"  >Update Client</Button>
                                        : */}
                                        <Button  className="bg-primary w-100"  >Add New</Button>
                                        
                                        
                                    </ModalFooter>
                            </Modal>
            </div>
            
        </React.Fragment>
    )
}

const mapStateToProps=state=>({
    clients:state.ClientReducer.clients
})

export default connect(mapStateToProps, {getClients}) (Hookclient)