import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Header extends Component{


    logout=()=>{
        localStorage.clear()
    }


    render(){
        return(
            <>
            <br/>
            <div class="users">
        <div class="filter_box">
        <div class="row">
         <div class="col-9"><input type="text" class="form-control" placeholder="Search Your Keyword Here"/></div>
         <div class="col-1"><button type="button" class="btn btn-secondary">Search</button></div>
         <div class="col-1"><Link to="/"><button type="button" class="btn btn-secondary" onClick={this.logout}>LogOut</button></Link></div>
         
         </div>                     
         
        
         </div>
         </div>
        
         <br/>
            
           </>

        )
    }
}