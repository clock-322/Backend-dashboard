import React, { Component } from 'react'

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
         <div id="logout2">
            <div class="col-1"><button type="button" class="btn btn-secondary" onClick={this.logout}>LogOut</button></div>
         </div>
         </div>                     
         
        
         </div>
         </div>
        
         <br/>
            
           </>

        )
    }
}