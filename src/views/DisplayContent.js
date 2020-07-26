import React, { Component } from 'react'
import {Route, Switch} from 'react-router-dom'
// import Department from '../components/Department'
// import ContractCleaning from '../components/ContractCleaning'
import InternalControl from '../components/InternalControl';
import Account from '../components/Account'
import Clients from '../components/Clients'
import { HumanResources } from '../components/HumanResources';
import TestingFormik from '../components/TestingFormik'
import AmbassadorCleaning from '../components/AmbassadorCleaning'
// import AmbassadorProfile from '../components/AmbassadorProfile'
import GuarantorProfile from '../guarantors/GuarantorProfile'
// import SignIn from '../authentication/SignIn'
// import SignUp from '../authentication/SignUp';




class DisplayContent extends Component {
    render() {
        return (
            <>
              <Switch>
                    <Route exact path="/dashboard" component={AmbassadorCleaning} />
                    <Route path="/dashboard/humanresources" component={HumanResources}/>
                    <Route path="/dashboard/account" component={Account}/>
                    <Route path="/dashboard/internalcontrol" component={InternalControl}/>
                    <Route path="/dashboard/testingformik" component={TestingFormik}/>
                    {/* <Route path="/dashboard/ambassadorprofile/:id" component={AmbassadorProfile} /> */}
                    <Route path="/dashboard/guarantorprofile/:id" component={GuarantorProfile} />
                    <Route path="/dashboard/clients" component={Clients}/>
                    {/* <Route path="/sigin" component={SignIn} /> */}
               </Switch>
            </>
        )
    }
}

export default DisplayContent
