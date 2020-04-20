import React, { Component } from 'react'
import {Form, Col} from 'react-bootstrap'
import {Route, Switch} from 'react-router-dom'
import Department from '../components/Department'
import ContractCleaning from '../components/ContractCleaning'
import InternalControl from '../components/InternalControl';
import Account from '../components/Account'
import Clients from '../components/Clients'
import { HumanResources } from '../components/HumanResources';


class DisplayContent extends Component {
    render() {
        return (
            <>
              <Switch>
                    <Route exact path="/" component={Department}/>
                    <Route path="/humanresources" component={HumanResources}/>
                    <Route path="/contractcleaning" component={ContractCleaning} />
                    <Route path="/internalcontrol" component={InternalControl}/>
                    <Route path="/account" component={Account}/>
                    <Route path="/clients" component={Clients}/>
               </Switch>
            </>
        )
    }
}

export default DisplayContent
