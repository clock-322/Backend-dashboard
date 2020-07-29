let modules=require('../controller/modules')

modules.router.get('/customer/data',(req,res)=>{
    //res.send('This is get customer data get api')
    modules.custData.custData().then((solve)=>{
        res.json({solve,'message':'You got data successfully'})
    }).catch((error)=>{
        console.log(error+'something went wrong in getting data')
        res.json(error+'Something went wrong from server side please try again')
    })
})

modules.router.post('/customer/add',(req,res)=>{
    let uid = modules.adminData.unique_key()
    let name = req.body.name
    let email = req.body.email
    let mobile = req.body.mobile
    let city = req.body.city
    let state = req.body.state
    modules.custData.addCust(uid,email,name,mobile,city,state).then((solve)=>{
        console.log('data successfully added')
        res.json('You have successfully add new customer')    
    }).catch((error)=>{
        console.log('something went wrong in adding data')
        res.json('Something wend wrong in adding new customer please try againg')
    })
})



modules.router.post('/customer/update',(req,res)=>{
    let uid =  JSON.parse(req.body.uid)
    let name = req.body.name
    let email = req.body.email
    let mobile = req.body.mobile
    let city = req.body.city
    let state = req.body.state
    modules.custData.editCustData(uid,email,name,mobile,city,state).then((solve)=>{
        res.json({solve,'message':'Your data is successfully updated'})
        
    }).catch((error)=>{
        console.log('cannnot update data something went wrong')
        res.json({error,'message':'Something went wrong on updating data please try again'})
    })
})


modules.router.get('/customer/data/:id',(req,res)=>{
        let uid = JSON.parse(req.params.id)
        console.log('This is the passed UID: '+uid)
        modules.custData.singleCustData(uid).then((solve)=>{
            console.log({solve,'message':'you have successfully got you data'})
            res.json({solve,'message':'you have successfully got you data'})
        }).catch((error)=>{
            console.log('something went wrong in getting single customer data')
            res.json({error,'message':'Passed id does not exist please pass correct ID'})
        })
})


modules.router.post('/customer/delete',(req,res)=>{
    let uid = req.body.uid
    console.log(uid+' 88888888888888888888')

    modules.custData.deleteCustData(uid).then((solve)=>{
        console.log({'message':'successfully deleted'})
        res.json({solve,'message':'successfully deleted'})
    }).catch((error)=>{
        console.log(error)
        res.json({error,'message':'Something went wrong, Unable to delete please try again'})
    })
})



module.exports = modules.router