import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getGuarantor} from '../actions/GuarantoAction'
import {getAmbassador} from '../actions/AmbassadorAction'
// import { Row } from 'reactstrap'


class EditGuarantor extends Component {
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
            occupation:'',
            location:'',
            ambassador_id:''        
        }
    }
    componentDidMount(){
        this.props.getGuarantor()
    }
    
    getGuarantor=() =>{
        const {ambassadors} = this.props
        const {guarantors} = this.props

        let ambGuarantor = []
        ambassadors.forEach( ambGua =>{
            const singleAmbGua = {...ambGua }
            ambGuarantor = [...guarantors,singleAmbGua]
        })
        this.setState(()=> {
            return {data: ambGuarantor}
        })
    }
    

    getAmbGuarantor =(id) =>{
        const ambGuarantor = this.props.ambassadors.find( ambassador_id =>ambassador_id.id ===id)
        return ambGuarantor
    }
    handleAmbGuarantor =(id) =>{
        const ambGuarantor =this.getAmbGuarantor(id)
        this.setState(()=> {
            return { ambassadors: ambGuarantor}
        })
    }


    render() {
        // const {guarantors} = this.props
        // const {ambassadors} = this.props

        const {
            // id,
            // name,
            // gender,
            // passport,
            age,
            phoneNumber,
            homeAddress,
            // occupation,
            // officeAddress,
            // location,
            // ambassador_id 
        } =this.state
        return (
            <React.Fragment>
                      <div className="col-md-12">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row px-2">
                                        <div className="col-6">
                                            <h5 className="font-weight-bold">User Profile</h5>
                                        </div>
                                        <div className="col-6">
                                            <button className="btn btn-sm btn-success thin d-block ml-auto">Update </button>
                                        </div>
                                    </div>
                                        <hr className="mx-2 my-2" />
                                    <div className="row px-2 my-4">
                                        <div className="col-3 px-4 text-center border border-left-0 border-top-0 border-bottom-0">
                                            <div className="image px-5">
                                                <img src="dist/img/user2-160x160.jpg" alt="profile" className="img-fluid img-circle border border-purple border-2x" />
                                            </div>
                                            <h5 className="font-weight-bold mt-2 mb-0"> Chris James </h5>
                                        </div>
                                    <div className="col-9 px-4">
                                        <div className="row mb-1 mt-4">
                                            <div className="col-6">
                                                <h5>Guarantor Profile</h5>
                                            </div>
                                            <div className="col-6 text-right">
                                                <span className="mr-2">Ambassador Name <span className="text-purple"> Thomas Chuks </span></span>
                                            </div>
                                        </div>
                                        <hr className="mt_2" />

                                            <form  >
                                                <div className="form-row">
                                                    <div className="col-4 pr-4 form-group">
                                                        <label htmlFor="upgrade" className="text-grey font-weight-normal mb-0 text-sm">PHONE NUMBER</label>
                                                        <input type="text" value={phoneNumber} className="form-control form-control-sm"  />
                                                    </div>
                                                    <div className="col-4 px-2 form-group">
                                                        <label htmlFor="imei" className="text-grey font-weight-normal mb-0 text-sm">HOME ADDRESS</label>
                                                        <input type="text" value={homeAddress} className="form-control form-control-sm"  />
                                                    </div>
                                                    <div className="col-4 pl-4 form-group">
                                                        <label htmlFor="pin" className="text-grey font-weight-normal mb-0 text-sm">AGE</label>
                                                        <input type="password" value={age} className="form-control form-control-sm"  />
                                                    </div>
                                                </div>
                                                <div className="form-row">
                                                    <div className="col-4 pr-4 form-group">
                                                        <label htmlFor="upgrade" className="text-grey font-weight-normal mb-0 text-sm">PHONE NUMBER</label>
                                                        <input type="text" value={phoneNumber} className="form-control form-control-sm"  />
                                                    </div>
                                                    <div className="col-4 px-2 form-group">
                                                        <label htmlFor="imei" className="text-grey font-weight-normal mb-0 text-sm">HOME ADDRESS</label>
                                                        <input type="text" value={homeAddress} className="form-control form-control-sm"  />
                                                    </div>
                                                    <div className="col-4 pl-4 form-group">
                                                        <label htmlFor="pin" className="text-grey font-weight-normal mb-0 text-sm">AGE</label>
                                                        <input type="password" value={age} className="form-control form-control-sm"  />
                                                    </div>
                                                </div>
                                        {/* <button type="submit" class="btn btn-success btn-sm d-block ml-auto">Save Changes</button> */}
                                            </form>
                                    </div>
                                    </div>
                                </div>
                                {/* /.card */}
                                </div>
                        </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state =>({

    guarantors: state.GuarantorReducer.guarantors,
    ambassadors:state.AmbassadorReducer.ambassadors

    // isLoading:state.GuarantorReducer.isLoading

})
export default connect(mapStateToProps, {getGuarantor,getAmbassador}) (EditGuarantor)
