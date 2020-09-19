import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getSalaries} from '../../actions/SalaryAction'
import { Button,Modal,ModalHeader,ModalBody, ModalFooter } from 'reactstrap';
import {CustomClassEmployeeForm} from "../../components/CustomFormikFormInput"
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit'
import SimpleReactValidator from 'simple-react-validator' 
import axios from 'axios'

const url= "https://tkl-api.herokuapp.com/api/salaries"

class Salary extends Component {
    constructor(props) {
        super(props)

        this.state = {

            name:'',
            salary:'',
            bankName:'',
            accountNumber:'',
            holderName:'',
            taxReduction:'',
            modal:false,
            isEdit:false      
        }
      this.validator = new SimpleReactValidator();
    }

    componentDidMount() {
        this.props.getSalaries()
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
        const newSalary= {
            name:this.state.name,
            salary:this.state.salary,
            bankName:this.state.bankName,
            accountNumber:this.state.accountNumber,
            holderName:this.state.holderName,
            taxReduction:this.state.taxReduction,
        }
      axios.post(`${url}`, newSalary)
      .then(res=>{
          this.setState({
              modal:false,
          })

          this.props.getSalaries()  
      })
    }


    deleteRow =(id)=>{
        axios.delete(`${url}/${id}`)
        .then(res=>{
            this.props.getSalaries()
        })
    }

    // Edit start here

    resetFormData =()=>{
        this.setState({
            name:'',
            salary:'',
            bankName:'',
            accountNumber:'',
            holderName:'',
            taxReduction:''
        })
    }

updateSubmit =(e)=>{
    e.preventDefault()

    const newSalary= {
        name:this.state.name,
        salary:this.state.salary,
        bankName:this.state.bankName,
        accountNumber:this.state.accountNumber,
        holderName:this.state.holderName,
        taxReduction:this.state.taxReduction,
    }
    axios.put(`${url}/${this.state.id}`,newSalary)
    .then(res=>{
        this.setState({
            modal:false
        })
        this.props.getSalaries()
        this.resetFormData()
    })
}

    getSingleSalary=(id)=>{
        this.setState({
            isEdit:true
        })
        axios.get(`${url}/${id}`)
        .then(res=>{
            this.setState({
                 id:res.data.data.id, 
                 name:res.data.data.name, 
                 salary:res.data.data.salary, 
                 bankName:res.data.data.bankName, 
                 accountNumber:res.data.data.accountNumber, 
                 holderName:res.data.data.holderName, 
                 taxReduction:res.data.data.taxReduction,  
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
            this.getSingleSalary(id)
        },1000)
        
    }



    render() {
        const {SearchBar} = Search;
        const {salaries} = this.props
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
                dataField: 'name',
                text: 'Name'
              }, 
              {
                dataField: 'salary',
                text: 'Salary'
              }, 
              {
                dataField: 'bankName',
                text: 'Bank Name'
              },
              {
                dataField: 'accountNumber',
                text: 'Account Number'
              },
              {
                dataField: 'holderName',
                text: 'Holder Name'
              },
              {
                  dataField: 'taxReduction',
                  text: 'Tax Reduction'
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
                            <h5 className="text-left">Salary Details</h5>
                        </div>
                        <div className="col-md-4">
                            <button className="btn btn-outline-primary float-right mb-3" onClick={this.toggle} >
                                <i className="fa fa-plus" ></i> Salary
                            </button>
                        </div>
                    </div>
                    {/* Pagination and Search Button start here */}
                     <div className="card">
                        <div className="card-body pt-1">
                            <ToolkitProvider
                             keyField="id"
                             caption="List of Ambassador"
                             data={salaries}
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
                                    <ModalHeader toggle={this.toggle} close={closeBtn}>Add New Salary</ModalHeader>
                                    <ModalBody >
                                        <div className="row">
                                            <CustomClassEmployeeForm
                                                label="Name"
                                                labelFor="name"
                                                name="name"
                                                type="text"
                                                value={this.state.name}
                                                onChange={this.handleChange}
                                            />

                                            <CustomClassEmployeeForm
                                                label="Salary"
                                                labelFor="salary"
                                                name="salary"
                                                type="number"
                                                value={this.state.salary}
                                                onChange={this.handleChange}
                                            />

                                            <CustomClassEmployeeForm
                                                label="Bank Name"
                                                labelFor="bankName"
                                                name="bankName"
                                                type="text"
                                                value={this.state.bankName}
                                                onChange={this.handleChange}
                                            />

                                            <CustomClassEmployeeForm
                                                label="Account Number"
                                                labelFor="accountNumber"
                                                name="accountNumber"
                                                type="number"
                                                value={this.state.accountNumber}
                                                onChange={this.handleChange}
                                            />

                                            <CustomClassEmployeeForm
                                                label="Holder Name"
                                                labelFor="holdeName"
                                                name="holderName"
                                                type="text"
                                                value={this.state.holderName}
                                                onChange={this.handleChange}
                                            />
                                        
                                            <CustomClassEmployeeForm
                                                label="Tax Reduction"
                                                labelFor="taxReduction"
                                                name="taxReduction"
                                                type="number"
                                                value={this.state.taxReduction}
                                                onChange={this.handleChange}
                                            />

                                        </div>
                                        
                                    </ModalBody>
                                    <ModalFooter>

                                        {this.state.isEdit?
                                        <Button className="bg-primary w-100" onClick={this.updateSubmit} >Update Salary</Button>
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
    salaries : state.SalaryReducer.salaries
})

export default connect(mapStateToProps,{getSalaries} ) (Salary)
