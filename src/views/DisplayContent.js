import React, { Component } from 'react'
import {Route, Switch} from 'react-router-dom'
// import Department from '../components/Department'
import ContractCleaning from '../components/ContractCleaning'
import InternalControl from '../components/InternalControl';
import Account from '../components/Account'
import Clients from '../components/Clients'
import { HumanResources } from '../components/HumanResources';
import TestingFormik from '../components/TestingFormik'
import AmbassadorCleaning from '../components/AmbassadorCleaning'



class DisplayContent extends Component {
    render() {
        return (
            <>
              <Switch>
                    {/* <Route exact path="/" component={Department}/> */}
                    <Route path="/humanresources" component={HumanResources}/>
                    <Route exact path="/" component={AmbassadorCleaning} />
                    <Route path="/account" component={Account}/>
                    <Route path="/internalcontrol" component={InternalControl}/>
                    <Route path="/testingformik" component={TestingFormik}/>
                    <Route path="/clients" component={Clients}/>
               </Switch>
            </>
        )
    }
}

export default DisplayContent
