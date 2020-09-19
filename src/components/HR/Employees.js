import React,{useEffect, useState} from 'react'
import {connect} from "react-redux"
import { Button,Modal,ModalHeader,ModalBody, ModalFooter } from 'reactstrap';
import {getEmployee,postEmployee} from "../../actions/EmployeeAction"
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, {Search} from 'react-bootstrap-table2-toolkit'
import {Form, Formik} from "formik"
import {CustomEmployeeForm} from '../../components/CustomFormikFormInput'
import {EmployeeSchema} from "../../utils/ValidationSchema"
// import { useReducer } from 'react';
// import { useEffect } from "react"

const Employees=(props,{postEmployee})=>{

    const initialState={
      firstName:'',
      middleName:'',
      lastName:'',
      DOB:'',
      email:'',
      gender:'',
      phoneNumber:'',
      employedDate:'',
      modal:false
    }

    const [emp, setEmp] = useState(initialState)
    const [modal, setModal] = useState(false)
    // const [isEdit, setIsEdit] = useState(false)

    useEffect(()=>{
        props.getEmployee()
    })

    const toggle =()=>setModal(!modal)

    const handleChange=(e)=> {
        const {name, value} = e.target;
    setEmp(emp => ({ ...emp, [name]: value }));
    }
    
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
                  <button className="edit"  ><i className="fas fa-edit text-success"></i></button>
                  {/* <button className="del" onClick={e=>this.deleteRow(e, row.id)}><i className="far fa-trash-alt bg-danger"></i></button>  */} 
                  <button className="del"><i className="far fa-trash-alt bg-danger"></i></button> 
                  </div>  
              )
            }
      },
     
      ];

      const rowStyle = { 
        cursor:'pointer',
      }

    const {employees} = props
    // const {errors} = props
    const {SearchBar} = Search
    const closeBtn = <button className="close" onClick={toggle}>&times;</button>
    
   

    return (
            <React.Fragment>
                <Formik initialValues={{
                        firstName:'',
                        middleName:'',
                        lastName:'',
                        DOB:'',
                        email:'',
                        gender:'',
                        phoneNumber:'',
                        employedDate:''
                    }}
                    onSubmit={async(data,{setSubmitting})=>{
                        setSubmitting(true)
                        postEmployee(data)
                    }}
                    ValidationSchema={EmployeeSchema}
                >
                    {({values,errors,isSubmitting}) => (
                        <Form>
                            <div className="row">
                                <div className="col-md-8">
                                    <h5 className="text-left">Teknokleen Employee Details</h5>
                                </div>
                                <div className="col-md-4">
                                    <button className="btn btn-outline-primary float-right mb-3" onClick={toggle} >
                                        <i className="fa fa-plus" ></i> Employees
                                    </button>
                                </div>
                            </div>
                        {/* Pagination and Search Button start here */}
                        <div className="card">
                                <div className="card-body pt-1">
                                    <ToolkitProvider
                                    keyField="id"
                                    caption="Employees Details"
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
                            isOpen={modal} 
                            toggle={toggle} 
                            size="lg"
                            backdrop="static"
                            >
                                    <ModalHeader toggle={toggle} close={closeBtn}>Add New Employee</ModalHeader>
                                    <ModalBody >
                                        <div className="row">
                                            <CustomEmployeeForm
                                                label="First Name"
                                                labelFor="firstName"
                                                name="firstName"
                                                type="text"
                                            />

                                            <CustomEmployeeForm
                                                label="Middle Name"
                                                labelFor="middleName"
                                                name="middleName"
                                                type="text"
                                            />

                                            <CustomEmployeeForm
                                                label="Last Name"
                                                labelFor="lastName"
                                                name="lastName"
                                                type="text"
                                            />

                                            <CustomEmployeeForm
                                                label="Email"
                                                labelFor="email"
                                                name="email"
                                                type="email"
                                            />

                                            <CustomEmployeeForm
                                                label="Gender"
                                                labelFor="gender"
                                                name="gender"
                                                type="text"
                                            />
                                        
                                            <CustomEmployeeForm
                                                label="DOB"
                                                labelFor="DOB"
                                                name="DOB"
                                                type="date"
                                            />

                                            <CustomEmployeeForm
                                                label="Phone Number"
                                                labelFor="phoneNumber"
                                                name="phoneNumber"
                                                type="text"
                                            />

                                            <CustomEmployeeForm
                                                label="Employed Date"
                                                labelFor="employedDate"
                                                name="employedDate"
                                                type="date"
                                            />
                                        </div>
                                        
                                    </ModalBody>
                                    <ModalFooter>

                                        {/* {isEdit?
                                        <Button className="bg-primary w-100" >Update Employee</Button>
                                        : */}
                                        <Button type="submit" disabled={isSubmitting} className="bg-primary w-100" >Add New</Button>
                                        {/* } */}
                                        
                                    </ModalFooter>
                            </Modal>
                        </Form>
                    )}

                </Formik>
            </React.Fragment>
      
    )
}

const mapStateToProps =state=>({
    employees:state.EmployeeReducer.employees,
    errors:state.EmployeeReducer.errors
})


export default connect(mapStateToProps,{getEmployee})(Employees)