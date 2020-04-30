import React, { Component } from 'react'
import {Route, Switch} from 'react-router-dom'
import Department from '../components/Department'
import Contract from '../components/ContractCleaning'
import InternalControl from '../components/InternalControl';
import Account from '../components/Account'
import Clients from '../components/Clients'
import { HumanResources } from '../components/HumanResources';
import ContractCleaning from '../components/ContractCleaning';
import TestingFormik from '../components/TestingFormik'
// import Bin from '../components/Bin'



class DisplayContent extends Component {
    render() {
        return (
            <>
              <Switch>
                    <Route exact path="/" component={Department}/>
                    <Route path="/humanresources" component={HumanResources}/>
                    <Route path="/contractcleaning" component={ContractCleaning} />
                    {/* <Route path="/bin" component={Bin}/> */}
                    <Route path="/internalcontrol" component={InternalControl}/>
                    <Route path="/testingformik" component={TestingFormik}/>
                    <Route path="/clients" component={Clients}/>
               </Switch>
            </>
        )
    }
}

export default DisplayContent
