import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class Customer extends  Component{
  render(){
       return(
        <>
        <div class="col-2 bg-color">
                <div class="logo"><img src="image/logo.png" alt="test"/></div>
                <ul class="menu">
                    
                    <li><a href="javascript:void()">Customers</a></li>
                    <ul>
                        <li><Link  to="/homepage">Customer Details</Link></li>
                        <li><Link  to="/customerCreate">Create Customer Detail</Link></li>
                    </ul>
                    
                
                </ul>
            </div>
        </>

       )

  }
}


