import React, { Component } from 'react'

export class Department extends Component {
    render() {
        return (
            <>
                <div className="row">
                  <div className="col-md-12">
                    <div className="card"> 
                      <div className="card-body">
                        <div className="row">
                          <div className="col-md-12 clearfix mb-2">
                            <h5 className="d-inline">User Profile</h5>
                            <button className="btn btn-danger d-inline float-right" data-toggle="modal" data-target="#exampleModal">
                              Update User
                            </button>
                          </div>
                          <div className="divider" />
                          <div className="col-md-3 border-right mt-3">
                            <div className="img-centre">
                              <img src="dist/img/boss.jpg" height={200} className="img-circle elevation-2" alt="User Image" />
                            </div>
                            <div className="inf2">
                              <h6 className="text-muted">Precious Hosahare</h6>
                              <p>Status: <span className="text-success">Active</span></p>
                            </div>
                            <hr />
                            <div>
                              <p>
                              </p><h6>ACCOUNT NUMBER</h6>
                              <span>2067871311</span>
                              <p />
                              <p>
                              </p><h6>PHONE NUMBER</h6>
                              <span>07065643303</span>
                              <p />
                              <p>
                              </p><h6>EMAIL</h6>
                              <span>mymail@gmail.com</span>
                              <p />
                            </div>
                          </div>
                          <div className="col-md-8 mt-2">
                            <h6 className="d-inline ml-3 customer-font">User Profile</h6>
                            <h6 className="float-right d-inline mx-3 customer-font ">Wrong Pin Count: 73</h6>
                            <h6 className="float-right d-inline border-right px-2 customer-font">Wrong Password Count: 73</h6>
                            <hr style={{margin: 0, padding: 0}} />
                            <div className="mt-4">
                              <form>
                                <div className="row">
                                  <div className="col-md-6">
                                    <div className="row">
                                      <div className="col-md-9">
                                        <label htmlFor="phoneNumber">PHONE NUMBER</label>
                                        <input type="text" className="form-control" id="phoneNumber" placeholder={+2347065643303} />
                                      </div>
                                      <div className="col-md-3" style={{marginTop: 40}}>
                                        <span>UPDATE</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="row">
                                      <div className="col-md-9">
                                        <label htmlFor="phoneNumber">USER PASSWORD</label>
                                        <input type="password" className="form-control" id="password" placeholder="********" />
                                      </div>
                                      <div className="col-md-3" style={{marginTop: 40}}>
                                        <span>UPDATE</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </form>
                            </div>
                            <div className="mt-5">
                              <h6>User Preference</h6>
                              <hr />
                              <div className="row">
                                <div className="col-md-12">
                                  <form>
                                    <div className="form-row">
                                      <div className="form-group col-md-4">
                                        <label htmlFor="upgradeType">USER UPGRADE TYPE</label>
                                        <input type="text" className="form-control" placeholder="select upgrade" />
                                      </div>
                                      <div className="form-group col-md-4">
                                        <label htmlFor="inputPassword4">USER IMEI NUMBER</label>
                                        <input type="password" className="form-control" placeholder={27634598087563} />
                                      </div>
                                      <div className="form-group col-md-4">
                                        <label htmlFor="pin">USER PIN</label>
                                        <input type="password" className="form-control" id="pin" placeholder="******" />
                                      </div>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 mb-5">
                    <div className="card">
                      <div className="card-body">
                        <h6 className="d-inline">Customer recent transaction</h6>
                        <button className="btn btn-link float-right">view all</button>
                        <div className="table-responsive">
                          <table className="table table-striped">
                            <thead>
                              <tr>
                                <th>
                                  <div className="icheck-primary">
                                    <input type="checkbox" defaultValue id="check1" />
                                    <label htmlFor="check1" />
                                  </div>
                                </th>
                                <th>Account Number</th>
                                <th>Transaction Type</th>
                                <th>Transaction Status</th>
                                <th>Amount</th>
                                <th>OTP Delivery</th>
                                <th>Date</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr style={{margin: 10}}>
                                <td>
                                  <div className="icheck-primary">
                                    <input type="checkbox" defaultValue id="check1" />
                                    <label htmlFor="check1" />
                                  </div>
                                </td>
                                <td>2067871311</td>
                                <td>Airtime</td>
                                <td>
                                  <span>
                                    <i className="fas fa-circle fa-xs text-success mr-2" />
                                    Successful
                                  </span>
                                </td>
                                <td>₦2500</td>
                                <td>Successful</td>
                                <td>Jun 15, 2020 - 2:54PM</td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="icheck-primary">
                                    <input type="checkbox" defaultValue id="check1" />
                                    <label htmlFor="check1" />
                                  </div>
                                </td>
                                <td>2067871311</td>
                                <td>Airtime</td>
                                <td>
                                  <span>
                                    <i className="fas fa-circle fa-xs text-danger mr-2" />
                                    Successful
                                  </span>
                                </td>
                                <td>₦2500</td>
                                <td>Successful</td>
                                <td>Jun 15, 2020 - 2:54PM</td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="icheck-primary">
                                    <input type="checkbox" defaultValue id="check1" />
                                    <label htmlFor="check1" />
                                  </div>
                                </td>
                                <td>2067871311</td>
                                <td>Airtime</td>
                                <td>
                                  <span>
                                    <i className="fas fa-circle fa-xs text-success mr-2" />
                                    Successful
                                  </span>
                                </td>
                                <td>₦2500</td>
                                <td>Successful</td>
                                <td>Jun 15, 2020 - 2:54PM</td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="icheck-primary">
                                    <input type="checkbox" defaultValue id="check1" />
                                    <label htmlFor="check1" />
                                  </div>
                                </td>
                                <td>2067871311</td>
                                <td>Airtime</td>
                                <td>
                                  <span>
                                    <i className="fas fa-circle fa-xs text-danger mr-2" />
                                    Successful
                                  </span>
                                </td>
                                <td>₦2500</td>
                                <td>Successful</td>
                                <td>Jun 15, 2020 - 2:54PM</td>
                              </tr>
                            </tbody>
                          </table>
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
