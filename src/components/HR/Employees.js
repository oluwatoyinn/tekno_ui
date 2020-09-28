import React,{useEffect, useState} from 'react'
import {connect} from "react-redux"
import { Button,Modal,ModalHeader,ModalBody, ModalFooter } from 'reactstrap';
import {getEmployee,postEmployee,deleteEmployee,updateEmployee} from "../../actions/EmployeeAction"
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, {Search} from 'react-bootstrap-table2-toolkit'
import {Form, Formik} from "formik"
import {CustomClassEmployeeForm} from '../../components/CustomFormikFormInput'
import {EmployeeSchema} from "../../utils/ValidationSchema"
import axios from 'axios'
// import url from "../../actions/EmployeeAction"

const url= 'https://tkl-api.herokuapp.com/api/employees'


const Employees=(props)=>{

    const initialState= {
      firstName:'',
      middleName:'',
      lastName:'',
      DOB:'',
      email:'',
      gender:'',
      phoneNumber:'',
      employedDate:'',
    }

    // const [firstName, setFirstName] =useState('')
    // const [middleName, setMiddleName] =useState('')
    // const [lastName, setLastName] =useState('')
    // const [DOB, setDOB] =useState('')
    // const [email, setEmail] =useState('')
    // const [gender,setGender] =useState('')
    // const [phoneNumber, setPhoneNumber] =useState('')
    // const [employedDate, setEmployedDate] =useState('')

    const [emp, setEmp] = useState(initialState)
    const [modal, setModal] = useState(false)
    const [isEdit, setIsEdit] = useState(false)
    // const [isEdit, setIsEdit] = useState(false)

    useEffect(()=>{
        props.getEmployee()
    })

    const toggle =()=>
        setModal(!modal);
        // setIsEdit(false)

    const handleChange=(e)=> {
        const {name, value} = e.target;
    setEmp(emp => ({ ...emp, [name]: value }));
    }

//   const handleChangeFirst = (e) => setFirstName(e.target.value);
//   const handleChangeMiddle = (e) => setMiddleName(e.target.value);
//   const handleChangeLast = (e) => setLastName(e.target.value);
//   const handleChangeDOB = (e) => setDOB(e.target.value);
//   const handleChangeEmail = (e) => setEmail(e.target.value);
//   const handleChangeGender = (e) => setGender(e.target.value);
//   const handleChangeNumber = (e) => setPhoneNumber(e.target.value);
//   const handleChangeDate = (e) => setEmployedDate(e.target.value);
 

    const handleSubmit=(e)=>{
        e.preventDefault()
        // add employee via postEmployee action
        props.postEmployee(emp)
        // close modal
        toggle()
        props.getEmployee()
    }

    //Delete Employee
    const handleDelete =(id)=>{
        props.deleteEmployee(id)
    }

    //Update Employees
    const getSingleEmployee=(id)=>{
        setIsEdit(true)
        axios.get(`${url}/${id}`)
        .then(res=>{
            setEmp({
                id:res.data.data.id,
                firstName:res.data.data.firstName, 
                middleName:res.data.data.middleName, 
                lastName:res.data.data.lastName, 
                DOB:res.data.data.DOB, 
                email:res.data.data.email, 
                gender:res.data.data.gender, 
                phoneNumber:res.data.data.phoneNumber, 
                employedDate:res.data.data.employedDate
            })
        })
    }

    const toggleUpdate=(id)=>{
        setIsEdit(true)
        toggle()
        getSingleEmployee(id)
    }

    const handleUpdate=(e)=>{
        e.preventDefault()

        props.updateEmployee(emp)
        toggle()
        props.getEmployee()
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
        // {
        //     dataField: 'confirmation',
        //     text: 'Confirmation'
        // },
        {
          dataField: 'link',
          text: 'Action',
          formatter: (rowContent, row) => {
              // console.log(row)
              return ( 
                  <div className="d-flex">
                  <button className="edit" onClick={()=>toggleUpdate(row.id)}  ><i className="fas fa-edit text-success"></i></button>
                  {/* <button className="del" onClick={e=>this.deleteRow(e, row.id)}><i className="far fa-trash-alt bg-danger"></i></button>  */} 
                  <button className="del" onClick={()=>handleDelete(row.id)}><i className="far fa-trash-alt bg-danger"></i></button> 
                  </div>  
              )
            }
      },
     
      ];

      const rowStyle = {  cursor:'pointer' }

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
                    // onSubmit={async({setSubmitting})=>{
                    //     const data = {
                    //        emp
                    //     }
                    //     setSubmitting(true)
                    //     postEmployee(data)
                    //     toggle()
                    // }}
                    ValidationSchema={EmployeeSchema}
                >
                    {({values,errors,isSubmitting}) => (
                        <div>
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
                                    <Form  >
                                    <div className="row">
                                        <CustomClassEmployeeForm
                                            label="First Name"
                                            labelFor="firstName"
                                            name="firstName"
                                            type="text"
                                            value={emp.firstName}
                                            onChange={handleChange}
                                        />

                                        <CustomClassEmployeeForm
                                            label="Middle Name"
                                            labelFor="middleName"
                                            name="middleName"
                                            type="text"
                                            value={emp.middleName}
                                            onChange={handleChange}
                                        />

                                        <CustomClassEmployeeForm
                                            label="Last Name"
                                            labelFor="lastName"
                                            name="lastName"
                                            type="text"
                                            value={emp.lastName}
                                            onChange={handleChange}
                                        />

                                        <CustomClassEmployeeForm
                                            label="Email"
                                            labelFor="email"
                                            name="email"
                                            type="email"
                                            value={emp.email}
                                            onChange={handleChange}
                                        />

                                        <CustomClassEmployeeForm
                                            label="Gender"
                                            labelFor="gender"
                                            name="gender"
                                            type="text"
                                            value={emp.gender}
                                            onChange={handleChange}
                                        />
                                    
                                        <CustomClassEmployeeForm
                                            label="DOB"
                                            labelFor="DOB"
                                            name="DOB"
                                            type="date"
                                            value={emp.DOB}
                                            onChange={handleChange}
                                        />

                                        <CustomClassEmployeeForm
                                            label="Phone Number"
                                            labelFor="phoneNumber"
                                            name="phoneNumber"
                                            type="text"
                                            value={emp.phoneNumber}
                                            onChange={handleChange}
                                        />

                                        <CustomClassEmployeeForm
                                            label="Employed Date"
                                            labelFor="employedDate"
                                            name="employedDate"
                                            type="date"
                                            value={emp.employedDate}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    </Form>
                                </ModalBody>
                                <ModalFooter>

                                    {isEdit?
                                    <Button className="bg-primary w-100"onClick={handleUpdate}>Update Employee</Button>
                                        :
                                    <Button type="submit" onClick={handleSubmit} disabled={isSubmitting} className="bg-primary w-100" >Add New</Button>
                                    } 
                                    
                                </ModalFooter>
                        </Modal>
                    </div>
                    )}

                </Formik>
            </React.Fragment>
      
    )
}

const mapStateToProps =state=>({
    employees:state.EmployeeReducer.employees,
    errors:state.EmployeeReducer.errors
})


export default connect(mapStateToProps,
                      {getEmployee,
                      deleteEmployee,
                      updateEmployee, 
                      postEmployee})(Employees)