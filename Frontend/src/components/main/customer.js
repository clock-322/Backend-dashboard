import React from 'react'
import Header from '../common/header'
import SideBar from '../common/sidebar'
import {Link} from 'react-router-dom'

export default class Homepage extends React.Component{
    constructor(){
        super()
        this.state={
          data:[],
          token:'' 
        }
      }




      componentWillMount=()=>{
        //let tokens = this.props.location.state.token
        let localdata=localStorage.getItem('token')
         if(!localdata){
            this.props.history.push('/')
            alert('Please login in first')
        }
        this.setState({token:localdata})
    
    }

   componentDidMount=()=>{
        this.customerData()

    }


    customerData=()=>{
        const url = 'https://localhost:8080/customer/data'
        fetch(url,{method:'GET',headers:{Accept:'application/json','Content-Type':'application.json'}})
        .then((responseJson) => responseJson.json())
        .then((response)=>{
            this.setState({data:response.solve})
        }).catch((error)=>{ 
            alert('Something went wrong please try again')
        })
    }
 

    delete=(custId)=>{
        const url = 'https://localhost:8080/customer/delete'
		fetch(url,{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},
			body:JSON.stringify({
				uid:custId
			})
		}).then((responseJson)=> responseJson.json())
		.then((response)=>{
            alert(response.message)	
		}).then(()=>{
            this.customerData()
        }).catch((error)=>{
			alert(JSON.stringify(error)+'Something went wrong unable to delete please try again')
		})

    }



    render(){
        let customerData = this.state.data
        let allData = customerData.map((dta)=>{
            return(
                <tr>
                    <td>{dta.name}</td>
                    <td>{dta.mobile}</td>
                    <td>{dta.email}</td>
                    <td>{dta.city}</td>
                    <td>{dta.state}</td>
                    <td><button><Link to={`customerUpdate/${dta.userid}`}>Edit</Link></button></td>
                    <td><button onClick={()=> this.delete(dta.userid)}>Delete</button></td>
                    
                </tr>
            ) 
        })
        return(
            <div>
                <div class="container-fluid">
    
    <div class="row"> 
    <SideBar/> 
        <div class="col-10 dashboard_right">
            <div class="add_Member"><h2>Customer Listing</h2></div>
            <div class="dashboard_padding">
            <Header/>
                
          
            <table class="table table-bordered">
                  <thead>
                     <tr>
                     <th scope="col">Name</th>
                     <th scope="col">Email</th>
                    <th scope="col">Mobile</th>
                    <th scope="col">City</th>
                    <th scope="col">State</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>

         </tr>
          </thead>
                  <tbody>
                      
                  <tr>
                    <td>Abhishek</td>
                    <td>123456789</td>
                    <td>Rewari</td>
                    <td>State</td>
                    <td>abhi@gmail.com</td>
                    <td><button><Link to="customerUpdate">Edit</Link></button></td>
                    <td><button>Delete</button></td>
                    
                </tr>
                  {allData}
                 
                  </tbody>
                </table>
                
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