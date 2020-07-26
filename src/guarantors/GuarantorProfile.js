import React, { Component } from 'react'
import {getGuarantor} from '../actions/GuarantoAction'
import MyLoader from '../components/HumanResources/MyLoader'
import {connect} from 'react-redux'
import BootstrapTable from 'react-bootstrap-table-next';
import {Link} from 'react-router-dom'
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit'
import EditGuarantor from './EditGuarantor'

class GuarantorProfile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data:[],
            id:'',
            name:'',
            gender:'',
            passport:'',
            age:'',
            phoneNumber:'',
            homeAddress:'',
            officeAddress:'',
            location:'',
            ambassador_id:'' 
        }
    }

    componentDidMount(){
        this.props.getGuarantor()
    }
    render() {

        const {guarantors} = this.props
        const {isLoading} = this.props
        const { SearchBar } = Search;

        
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
              dataField: 'gender',
              text: 'Gender'
            }, 
            {
              dataField: 'passport',
              text: 'Image'
            },
            {
              dataField: 'age',
              text: 'Age'
            },
            {
              dataField: 'phoneNumber',
              text: 'PhoneNumber'
            },
            {
              dataField: 'officeAdress',
              text: 'OfficeAddress'
            },
            {
              dataField: 'occupation',
              text: 'Occupation'
            },
            {
              dataField: 'homeAdress',
              text: 'HomeAddress'
            },
            // {
            //     dataField: 'ambassador_id',
            //     text: 'Ambassador'
            // }
          ];

          
          const rowStyle = { 
            cursor:'pointer',
          };

        return isLoading ? <MyLoader msg="Please wait..."/> : (
            <React.Fragment>
                <div className="row">
                            <div className="col-md-12 clearfix mb-2">
                            <div className="float-right">
                                    <Link to="/dashboard"> 
                                        <i className="fas fa-chevron-circle-left" ><span className="mt-3  pr-3"> Go Back</span> </i> 
                                    </Link>
                            </div> 
                            </div>

                            <EditGuarantor />
                            
                    <div className="col-md-8">
                        <h5 className="text-left">List of Guarantors</h5>
                    </div>
                </div>
                 {/* Pagination and Search Button start here */}
                 <div className="card">
                        <div className="card-body pt-1">
                            <ToolkitProvider
                             keyField="id"
                             caption="List of Ambassador"
                             data={guarantors}
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

    guarantors: state.GuarantorReducer.guarantors,
    isLoading:state.GuarantorReducer.isLoading

})
export default connect(mapStateToProps,{getGuarantor})(GuarantorProfile)
