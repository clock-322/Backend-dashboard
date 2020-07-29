import React from 'react'
import {Link } from 'react-router-dom'

export default class Login extends React.Component{
    constructor(){
        super()
        this.state={
            email:'',
            password:'',
            token:''
        }
    }



    submit=()=>{
		let url = "https://localhost:8080/login"
		fetch(url,{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},
			body:JSON.stringify({
				email:this.state.email,
				password:this.state.password,
			})
		}).then((responseJson)=> responseJson.json())
		.then((response)=>{
			this.setState({token:response.token})
			alert(response.response)	
		}).then(()=>{
			localStorage.setItem('token',this.state.token)
			this.props.history.push('/homepage')
		}).catch((error)=>{
			alert('Something went wrong please try again')
		})
	}


    render(){
        return(
            <div>
                    <div class="containerx">
            <h1>Sign in</h1>
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
                    <button type="submit" class="btn btn-primary" onClick={this.submit}> Sign in</button><br/>
                    <p ><Link to="/register" id="custom-link">not registered yet ?</Link></p>
                </div>
                </div>
            
            </div>
            </div>
        )
    }
}