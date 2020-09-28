import React, { Component } from 'react'
import {Route, Switch} from 'react-router-dom'
import TestingFormik from '../components/TestingFormik'
import AmbassadorCleaning from '../components/AmbassadorCleaning'
import Leave from '../components/HR/Leave'
import Salary from '../components/HR/Salary'
// import Employees from '../components/HR/Employees'
// import ClassEmployee from "../components/HR/ClassEmployee"
import Employee from '../components/HR/Employees'
// import AmbassadorProfile from '../components/AmbassadorProfile'
import GuarantorProfile from '../guarantors/GuarantorProfile'
import Department from '../components/HR/Department'
import HookClient from '../components/HR/HookClient'



class DisplayContent extends Component {
    render() {
        return (
            <>
                {/* <Route exact path="/dashboard" component={AmbassadorCleaning} /> */}
              <Switch>
                    <Route exact path="/dashboard" component={AmbassadorCleaning} />
                    <Route path="/dashboard/employees" component={Employee}/>
                    <Route path="/dashboard/salary" component={Salary}/>
                    <Route path="/dashboard/leave" component={Leave}/>
                    <Route path="/dashboard/testingformik" component={TestingFormik}/>
                    {/* <Route path="/dashboard/ambassadorprofile/:id" component={AmbassadorProfile} /> */}
                    <Route path="/dashboard/guarantorprofile/:id" component={GuarantorProfile} />
                    <Route path="/dashboard/clients" component={HookClient}/>
                    <Route path="/dashboard/department" component={Department} />
                    {/* <Route path="/sigin" component={SignIn} /> */}
               </Switch>
            </>
        )
    }
}

export default DisplayContent
