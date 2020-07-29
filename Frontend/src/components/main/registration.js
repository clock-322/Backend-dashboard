import React from 'react'
import {Link } from 'react-router-dom'

export default class Test extends React.Component{

  constructor(){
    super()
    this.state={
      name:'',
      email:'',
      password:''
    }
  }



  submit=()=>{

		let url = "https://localhost:8080/register"
		fetch(url,{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},
			body:JSON.stringify({
				email:this.state.email,
				name:this.state.name,
				password:this.state.password
			})
		}).then((responseJson)=> responseJson.json())
		.then((response)=>{
			alert(response.response)
		}).then(()=>{
			this.props.history.push('/')
		}).catch((error)=>{
			alert('Something went wrong please try again')
		})
	}




    render(){
        return(
            <div>
                <div class="container-register">
      <h1>REGISTER</h1>
     
        <div class="form-group row">
            <label for="inputEmail3" class="col-sm-2 col-form-label">Full Name</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" id="inputEmail3" placeholder="Full Name" value={this.state.name} onChange={(e)=> this.setState({name:e.target.value})}/>
            </div>
          </div>
        <div class="form-group row">
          <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
          <div class="col-sm-10">
            <input type="email" class="form-control" id="inputEmail3" placeholder="Email" value={this.state.email} onChange={(e)=> this.setState({email:e.target.value})}/>
          </div>
        </div>
        <div class="form-group row">
          <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
          <div class="col-sm-10">
            <input type="password" class="form-control" id="inputPassword3" placeholder="Password" value={this.state.password} onChange={(e)=> this.setState({password:e.target.value})}/>
          </div>
        </div>
        <div class="form-group row">
          <div class="col-sm-10">
            <button type="submit" class="btn btn-primary" onClick={this.submit}>CREATE ACCOUNT</button>
            <p><Link id="custom-register-link" to="/">Already registered</Link></p>
          </div>
        </div>
     
    </div>
            </div>
        )
    }
}