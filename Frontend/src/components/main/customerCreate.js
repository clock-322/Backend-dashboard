import React from 'react'
import Header from '../common/header2'
import SideBar from '../common/sidebar'
import {Link} from 'react-router-dom'


export default class UpdateDevice extends React.Component{
    constructor(){
        super()
        this.state={
            data:[],
            token:'',
            name:'',
            name:'',
            email:'',
            mobile:'',
            city:'',
            states:'' 
        }
    }


    componentWillMount=()=>{
        //let tokens = this.props.location.state.token
        let localdata=localStorage.getItem('token')
         if(!localdata){
            this.props.history.push('/')
            alert('You are not logged in')
        } 
        this.setState({token:localdata})
    
    }

    submit=()=>{
        const url = 'https://localhost:8080/customer/add'
            fetch(url,{method:'POST',headers:{Accept:'application/josn','Content-Type':'application/json'},
            body:JSON.stringify({
                name:this.state.name,
                email:this.state.email,
                mobile:this.state.mobile,
                city:this.state.city,
                state:this.state.state
            })
        }).then((responseJson)=> responseJson.json())
        .then((response)=>{
            alert(JSON.stringify(response))
        }).then(()=>{
            this.props.history.push('/homepage')
        }).catch((error)=>{
            alert('Something went wrong in submission of data please try again')
        })
    }


    render(){
        return(
            <div>
                <div class="container-fluid">
    
    <div class="row"> 
    <SideBar/> 
        <div class="col-10 dashboard_right">
            <div class="add_Member"><h2>Create Customer Detail</h2></div>
            <div class="dashboard_padding">
            <Header/>

            <div>


           
  <div class="form-row">
    <div class="col-md-4 mb-3">
      <label for="validationCustom01">Full name</label>
      <input type="text" class="form-control" id="validationCustom01" placeholder="Full name" value={this.state.name} onChange={(e)=> this.setState({name:e.target.value})} required/>
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>
    <div class="col-md-4 mb-3">
      <label for="validationCustom01">Mobile</label>
      <input type="number" class="form-control" id="validationCustom01" placeholder="Mobile" value={this.state.mobile} onChange={(e)=> this.setState({mobile:e.target.value})} required/>
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>
    <div class="col-md-4 mb-3">
      <label for="validationCustom02">Email</label>
      <input type="email" class="form-control" id="validationCustom02" placeholder="Email" value={this.state.email} onChange={(e)=> this.setState({email:e.target.value})} required/>
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>
    
  </div>
  <div class="form-row">
  <div class="col-md-3 mb-3">
      <label for="validationCustom04">City</label>
      <input type="text" class="form-control" id="validationCustom04" placeholder="City" value={this.state.city} onChange={(e)=> this.setState({city:e.target.value})} required/>
      <div class="invalid-feedback">
        Please provide a valid state.
      </div>
    </div>
    <div class="col-md-3 mb-3">
      <label for="validationCustom04">State</label>
      <input type="text" class="form-control" id="validationCustom04" placeholder="State" value={this.state.state} onChange={(e)=> this.setState({state:e.target.value})} required/>
      <div class="invalid-feedback">
        Please provide a valid state.
      </div>
    </div>
   
  </div>
 
  <button class="btn btn-primary" type="submit" onClick={this.submit}>Submit form</button>


       </div>               
            
      </div>
  </div>
</div> 
</div>
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
</div>
              </div>
            </div>
        )
    }
}