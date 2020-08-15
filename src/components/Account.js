// import React, {useState} from 'react'
// import axios from 'axios'

// const Account = () => {
   
//     const [value, setValue] = useState({
//         name:"",
//         contractValue:"",
//         address:"",
//         manager:
//         {
//             busName:"",
//             phoneNumber:""
//         }
//     })

//     const getLocations=()=>{
//         axios.get(` http://localhost:3000/location`)
//         .then(res=>{
//             setValue({
//                 data:res.location.sort((a,b)=>a-b).reverse()
//             })
//         })
//     }
    
//     return (
//         <div>
            
//         </div>
//     )
// }

// export default Account;

import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import MyLoader from '../components/HumanResources/MyLoader'
import BootstrapTable from 'react-bootstrap-table-next'
import paginationFactory from 'react-bootstrap-table2-paginator'
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit'

class Account extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name:"",
            contractValue:"",
            address:"",
            data:[]
            // manager:
            // {
            //     busName:"",
            //     phoneNumber:""
            // }
        }
    }

    componentDidMount() {
        this.getLocations()
    }
    
    getLocations=()=> {
        axios.get(`http://localhost:3000/data`)
        .then(res=>{
            this.setState({
                data:res.data
            })
        })
    }


    render() {

        const {SearchBar} = Search
        const {isLoading} = this.props

        const mydata = this.state.data.map((location, index)=>{
            return(
                <tr className="table table-striped table-hover my-3" key={location.id}  >
                    <td>{index+1}</td>
                    <td>{location.name}</td>
                    <td>{location.contractValue}</td>
                    <td>{location.address}</td>
                    <td>
                        <button><i className="fas fa-edit text-success"></i></button> {" "}
                        <button><i className="far fa-trash-alt bg-danger"></i></button> 
                    </td>
                </tr>
            )
        })

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
              dataField: 'contractValue',
              text: 'Contract Value'
            }, 
            {
              dataField: 'address',
              text: 'Location Adress'
            }
          ];

          const rowStyle = { 
            cursor:'pointer',
          };

        return isLoading ? < MyLoader msg="Please wait..."/>: (
            <React.Fragment>
                <div className="row">
                            <div className="col-md-12 clearfix mb-2">
                            <div className="float-right">
                                    <Link to="/dashboard"> 
                                        <i className="fas fa-chevron-circle-left" ><span className="mt-3  pr-3"> Go Back</span> </i> 
                                    </Link>
                            </div> 
                            </div>

                            {/* <EditGuarantor /> */}
                            
                    <div className="col-md-8">
                        <h5 className="text-left">Locations and Contract Value</h5>
                    </div>
                </div>
                 {/* Pagination and Search Button start here */}
                 <div className="card">
                        <div className="card-body pt-1">
                            <ToolkitProvider
                             keyField="id"
                             caption="Locations and Contract Value"
                             data={mydata}
                             columns={columns}
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
                    {/* Pagination and Search button ends here */}
                
            </React.Fragment>
        )
    }
}

const mapStateToProps = state =>({

    isLoading:state.GuarantorReducer.isLoading

})

export default connect(mapStateToProps) (Account)


