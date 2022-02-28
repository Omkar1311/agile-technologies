import React from 'react'
import { NavLink } from 'react-router-dom'
import './Sidebar.css'
function Sidebar() {
  return (
    <>
      <div className='maincomponents'>
        <div id="mySidenav" className="sidenav">
          <NavLink to='/mainNavigationPage/profilePageUser' activeClassName='navLinkActive' >Profile User Page</NavLink>
          <NavLink to='/mainNavigationPage/profilePageCompany' activeClassName='navLinkActive' >Profile Company Page</NavLink>
          <NavLink to='/mainNavigationPage/customerListPage' activeClassName='navLinkActive' >Customer List Page</NavLink>
          <NavLink to='/mainNavigationPage/agencyOrBrokerPage' activeClassName='navLinkActive' >Agency Or Broker Page</NavLink>
          <NavLink to='/mainNavigationPage/brokerBussinessPage' activeClassName='navLinkActive' > Broker Bussiness Page</NavLink>
        </div>
        <div>          
        </div>
      </div>
    </>
  )
}

export default Sidebar