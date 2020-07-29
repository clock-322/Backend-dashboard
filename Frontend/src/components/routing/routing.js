import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Login from '../main/login'
import Customer from '../main/customer'
import CustomerCreate from '../main/customerCreate'
import CustomerUpdate from '../main/customerUpdate'
import Register from '../main/registration'




import Error from '../main/error'

export default class Routings extends React.Component{
    render(){
        return(
            <>
                <Router>
                    <Switch>
                        <Route exact path='/' component={Login}/>
                        <Route path='/register' component={Register}/>
                        <Route path='/homepage' component={Customer}/>
                        <Route path='/customerCreate' component={CustomerCreate}/>
                        <Route path='/customerUpdate/:id' component={CustomerUpdate}/>
                        <Route component={Error}/>
                    </Switch>
                </Router>

                </>
            )
    }
}