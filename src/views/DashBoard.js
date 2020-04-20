import React, { Component } from 'react'
import NavBar from './NavBar'
import AsideBar from './AsideBar'
import ContentWrapper from './ContentWrapper'


export class DashBoard extends Component {
    render() {
        return (
            <>
               <NavBar />
               <AsideBar /> 
               <ContentWrapper />
            </>
        )
    }
}

export default DashBoard
