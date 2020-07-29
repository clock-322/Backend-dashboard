import React from 'react'
import Header from '../common/header2'
import SideBar from '../common/sidebar'
import {Link} from 'react-router-dom'


export default class UpdateDevice extends React.Component{
    constructor(){
        super()
        this.state={
            data:[],
            customerId:'',
            token:'',
            name:'' ,
            mobile:'',
            email:'',
            city:'',
            states:''
        }
    }


    componentWillMount=()=>{
        //let tokens = this.props.location.state.token
        let cid = this.props.match.params.id
        let localdata=localStorage.getItem('token')
         if(!localdata){
            this.props.history.push('/')
            alert('You are not logged in')
        } 
        this.setState({token:localdata,customerId:cid})
    
    }

    componentDidMount=()=>{
      this.editData()
    }


    editData=()=>{
      let x = this.state.token
        const url = 'https://localhost:8080/customer/data/'+this.state.customerId
        fetch(url,{method:'GET',headers:{Accept:'application/json','Content-Type':'application.json'}})
        .then((responseJson) => responseJson.json())
        .then((response)=>{
            this.setState({
              name:response.solve.name,
              email:response.solve.email,
              mobile:response.solve.mobile,
              city:response.solve.city,
              states:response.solve.state
            })

        }).catch((error)=>{ 
            alert('Something went wrong please try again')
        })
    }

    submit=()=>{
        const url = 'https://localhost:8080/customer/update'
            fetch(url,{method:'POST',headers:{Accept:'application/josn','Content-Type':'application/json'},
            body:JSON.stringify({
              uid:this.state.customerId,
              name:this.state.name,
              email:this.state.email,
              mobile:this.state.mobile,
              city:this.state.city,
              state:this.state.states
            })
        }).then((responseJson)=> responseJson.json())
        .then((response)=>{
            alert(JSON.stringify(response.message))
        }).then(()=>{
            this.props.history.push('/homepage')
        }).catch((error)=>{
            alert('something went wrong please try again')
        })
    }


    render(){
        return(
            <div>
                <div class="container-fluid">
    
    <div class="row"> 
    <SideBar/> 
        <div class="col-10 dashboard_right">
            <div class="add_Member"><h2>Update Customer Detail</h2></div>
            <div class="dashboard_padding">
            <Header/>

            <div>


           
  <div class="form-row">
    <div class="col-md-4 mb-3">
      <label for="validationCustom01">Full name</label>
      <input type="text" class="form-control" id="validationCustom01" placeholder="First name" value={this.state.name} onChange={(e)=> this.setState({name:e.target.value})}  required/>
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>
    <div class="col-md-4 mb-3">
      <label for="validationCustom01">Mobile</label>
      <input type="number" class="form-control" id="validationCustom01" placeholder="First name" value={this.state.mobile} onChange={(e)=> this.setState({mobile:e.target.value})} required/>
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>
    <div class="col-md-4 mb-3">
      <label for="validationCustom02">Email</label>
      <input type="email" class="form-control" id="validationCustom02" placeholder="Last name" value={this.state.email} onChange={(e)=> this.setState({email:e.target.value})} required/>
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>
    
  </div>
  <div class="form-row">
  <div class="col-md-3 mb-3">
      <label for="validationCustom04">City</label>
      <input type="text" class="form-control" id="validationCustom04" placeholder="State" value={this.state.city} onChange={(e)=> this.setState({city:e.target.value})} required/>
      <div class="invalid-feedback">
        Please provide a valid state.
      </div>
    </div>
    <div class="col-md-3 mb-3">
      <label for="validationCustom04">State</label>
      <input type="text" class="form-control" id="validationCustom04" placeholder="State" value={this.state.states} onChange={(e)=> this.setState({states:e.target.value})} required/>
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