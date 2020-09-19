import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getEmployee} from '../../actions/EmployeeAction'
import { Button,Modal,ModalHeader,ModalBody, ModalFooter } from 'reactstrap';
import {CustomClassEmployeeForm} from "../../components/CustomFormikFormInput"
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit'
import SimpleReactValidator from 'simple-react-validator' 
import axios from 'axios'

const url= "https://tkl-api.herokuapp.com/api/employees"

class ClassEmployee extends Component {
    constructor(props) {
        super(props)

        this.state = {

            firstName:'',
            middleName:'',
            lastName:'',
            DOB:'',
            email:'',
            gender:'',
            phoneNumber:'',
            employedDate:'',
            modal:false,
            isEdit:false      
        }
      this.validator = new SimpleReactValidator();

    }

    componentDidMount() {
        this.props.getEmployee()
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
        const newEmployee= {
            firstName:this.state.firstName,
            middleName:this.state.middleName,
            lastName:this.state.lastName,
            DOB:this.state.DOB,
            email:this.state.email,
            gender:this.state.gender,
            phoneNumber:this.state.phoneNumber,
            employedDate:this.state.employedDate
        }
      axios.post(`${url}`, newEmployee)
      .then(res=>{
          this.setState({
              modal:false,
          })

          this.props.getEmployee()  
      })
    }


    deleteRow =(id)=>{
        axios.delete(`${url}/${id}`)
        .then(res=>{
            this.props.getEmployee()
        })
    }

    // Edit start here

    resetFormData =()=>{
        this.setState({
            firstName:'',
            middleName:'',
            lastName:'',
            DOB:'',
            email:'',
            gender:'',
            phoneNumber:'',
            employedDate:''
        })
    }

updateSubmit =(e)=>{
    e.preventDefault()

    const newEmployee= {
        firstName:this.state.firstName,
        middleName:this.state.middleName,
        lastName:this.state.lastName,
        DOB:this.state.DOB,
        email:this.state.email,
        gender:this.state.gender,
        phoneNumber:this.state.phoneNumber,
        employedDate:this.state.employedDate
    }
    axios.put(`${url}/${this.state.id}`,newEmployee)
    .then(res=>{
        this.setState({
            modal:false
        })
        this.props.getEmployee()
        this.resetFormData()
    })
}

    getSingleEmployee=(id)=>{
        this.setState({
            isEdit:true
        })
        axios.get(`${url}/${id}`)
        .then(res=>{
            this.setState({
                 id:res.data.data.id, 
                 firstName:res.data.data.firstName, 
                 middleName:res.data.data.middleName, 
                 lastName:res.data.data.lastName, 
                 DOB:res.data.data.DOB, 
                 email:res.data.data.email, 
                 gender:res.data.data.gender, 
                 phoneNumber:res.data.data.phoneNumber, 
                 employedDate:res.data.data.employedDate, 
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
            this.getSingleEmployee(id)
        },1000)
        
    }



    render() {
        const {SearchBar} = Search;
        const {employees} = this.props
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
                dataField: 'firstName',
                text: 'FirstName'
              }, 
              {
                dataField: 'middleName',
                text: 'Middle Name'
              }, 
              {
                dataField: 'lastName',
                text: 'Last Name'
              },
              {
                dataField: 'email',
                text: 'Email'
              },
              {
                dataField: 'gender',
                text: 'Gender'
              },
              {
                  dataField: 'DOB',
                  text: 'DOB'
              },
              {
                  dataField: 'phoneNumber',
                  text: 'PhoneNumber'
              },
              {
                  dataField: 'employedDate',
                  text: 'Date Employed'
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
                            <h5 className="text-left">Employees Details</h5>
                        </div>
                        <div className="col-md-4">
                            <button className="btn btn-outline-primary float-right mb-3" onClick={this.toggle} >
                                <i className="fa fa-plus" ></i> Employee
                            </button>
                        </div>
                    </div>
                    {/* Pagination and Search Button start here */}
                     <div className="card">
                        <div className="card-body pt-1">
                            <ToolkitProvider
                             keyField="id"
                             caption="List of Ambassador"
                             data={employees}
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
                            size="lg"
                            backdrop="static"
                            >
                                    <ModalHeader toggle={this.toggle} close={closeBtn}>Add New Employee</ModalHeader>
                                    <ModalBody >
                                        <div className="row">
                                            <CustomClassEmployeeForm
                                                label="First Name"
                                                labelFor="firstName"
                                                name="firstName"
                                                type="text"
                                                value={this.state.firstName}
                                                onChange={this.handleChange}
                                            />

                                            <CustomClassEmployeeForm
                                                label="Middle Name"
                                                labelFor="middleName"
                                                name="middleName"
                                                type="text"
                                                value={this.state.middleName}
                                                onChange={this.handleChange}
                                            />

                                            <CustomClassEmployeeForm
                                                label="Last Name"
                                                labelFor="lastName"
                                                name="lastName"
                                                type="text"
                                                value={this.state.lastName}
                                                onChange={this.handleChange}
                                            />

                                            <CustomClassEmployeeForm
                                                label="Email"
                                                labelFor="email"
                                                name="email"
                                                type="email"
                                                value={this.state.email}
                                                onChange={this.handleChange}
                                            />

                                            <CustomClassEmployeeForm
                                                label="Gender"
                                                labelFor="gender"
                                                name="gender"
                                                type="text"
                                                value={this.state.gender}
                                                onChange={this.handleChange}
                                            />
                                        
                                            <CustomClassEmployeeForm
                                                label="DOB"
                                                labelFor="DOB"
                                                name="DOB"
                                                type="date"
                                                value={this.state.DOB}
                                                onChange={this.handleChange}
                                            />

                                            <CustomClassEmployeeForm
                                                label="Phone Number"
                                                labelFor="phoneNumber"
                                                name="phoneNumber"
                                                type="text"
                                                value={this.state.phoneNumber}
                                                onChange={this.handleChange}
                                            />

                                            <CustomClassEmployeeForm
                                                label="Employed Date"
                                                labelFor="employedDate"
                                                name="employedDate"
                                                type="date"
                                                value={this.state.employedDate}
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                        
                                    </ModalBody>
                                    <ModalFooter>

                                        {this.state.isEdit?
                                        <Button className="bg-primary w-100" onClick={this.updateSubmit} >Update Employee</Button>
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
    employees : state.EmployeeReducer.employees
})

export default connect(mapStateToProps,{getEmployee} ) (ClassEmployee)
