import React from 'react'
import SweetAlert from 'react-bootstrap-sweetalert'



export const updateAlert = () =>(
    <SweetAlert
     confirmBtnText="Okay"
     confirmBtnBsStyle="success"
     onConfirm={() =>this.hideAlert()}
     title="Ambassador Updated"
    /> 
 );

export const hideAlert = ()=> {

    this.setState({
    alert: null,
    modal:false

    });
this.props.getAmbassador()
    this.resetFormData()

}