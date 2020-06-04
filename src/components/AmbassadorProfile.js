import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

export class Department extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
       data:[],
       id:'',
       name:'',
       address:'',
       location:'',
       email:'',
       guarantor:'',
       phone:''
    }
  }

  componentDidMount(){
    
    this.setState({
      id:this.props.match.params.id
    })
    this.getAmb()
}

getAmb =()=> {
    axios.get(` http://127.0.0.1:8000/api/guarantors`)
    .then(res=>{   
        
        this.setState({
            data:res.data.data
        })
    })
}
  
    render() {
      // const myGuarantor 

        return (
            <>
                <div className="row">
                  <div className="col-md-12">
                    <div className="card"> 
                      <div className="card-body">
                        <div className="row">
                          <div className="col-md-12 clearfix mb-2">
                          <div className="float-right">
                                  <Link to="/dashboard"> 
                                      <i className="fas fa-chevron-circle-left" ><span className="mt-3  pr-3"> Go Back</span> </i> 
                                  </Link>
                          </div> 
                          </div>
                          <div className="col-md-12 clearfix mb-2">
                            <h5 className="d-inline">Ambassador Profile</h5>
                            <button className="btn btn-danger d-inline float-right" data-toggle="modal" data-target="#exampleModal">
                              Update Details
                            </button>
                          </div>
                          <div className="divider" />
                          {/* {this.state.data.map(amb=>{
                              return(
                                <div className="row"> */}
                                    <div className="col-md-4 border-right mt-3">
                                    <p className=" text-bold">ACCOUNT DETAILS</p>
                                      <div className="img-centre">
                                        <img src="dist/img/chris.png" height={200} className="img-circle elevation-2" alt="User Image" />
                                      </div>
                                      <div className="inf2">
                                        <h6 className="text-muted">Christabel Ah-Dee-Ah</h6>
                                        <p>Status: <span className="text-success">Stable</span></p>
                                      </div>
                                    <hr />
                                    <div>
                                    <h6>ACCOUNT NUMBER</h6>
                                      <span>2067871311</span>
                                      <p/>
                                      <h6>PHONE NUMBER</h6>
                                      <span>08136784410</span>
                                      <p/>
                                      <h6>EMAIL</h6>
                                      <span>christabel.chinasa@gmail.com</span>
                                      <p />
                                    </div>
                                  </div>

                                  <div className="col-md-4 border-right mt-3">
                                  <p className=" text-bold">GUARANTOR 1: <span>OLAREWAJU JAMES</span></p>
                                      <div className="img-centre">
                                        <img src="dist/img/avatar.png" height={200} className="img-circle elevation-2" alt="User Image" />
                                      </div>
                                      <div className="inf2">
                                        <h6 className="text-muted">Olarewaju James</h6>
                                        <p>Status: <span className="text-success">Employed</span></p>
                                      </div>
                                    <hr />
                                    <div  className="text-center">
                                      <p >HOME ADDRESS: <span >23 Opposite Isolation Center Yaba</span></p>
                                      <p >OCCUPATION/DESIGNATION: <span>First Bank/First Contact</span></p>
                                      <p >EMAIL: <span>olarewaju.james@mymail.com</span></p>
                                      <p >AGE: <span>46</span></p>
                                    </div>
                                  </div>

                                  <div className="col-md-4 border-right mt-3">
                                    <p className="text text-bold">GUARANTOR 2: <span>VICTOR O AJAYI</span></p>
                                      <div className="img-centre">
                                        <img src="dist/img/boss.jpg" height={200} className="img-circle elevation-2" alt="User Image" />
                                      </div>
                                      <div className="inf2">
                                        <h6 className="text-muted">Victor O Ajayi</h6>
                                        <p>Status: <span className="text-success">Business Man</span></p>
                                      </div>
                                    <hr />
                                    <div className="text-center">
                                      <p >HOME ADDRESS: <span >23 Opposite Isolation Center Yaba</span></p>
                                      <p >OCCUPATION/DESIGNATION: <span>First Bank/First Contact</span></p>
                                      <p >EMAIL: <span>olarewaju.james@mymail.com</span></p>
                                      <p >AGE: <span>46</span></p>
                                    </div>
                                  </div>
                              {/* </div>
                              )
                          })}
                             */}

                             {/* Guarantor Table */}

                          
                        </div>
                      </div>
                    </div>
                  </div>
                 
                </div>
            </>
        )
    }
}

export default Department
