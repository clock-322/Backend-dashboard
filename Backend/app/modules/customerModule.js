class customerData{
    custData(){
        let prmis = new Promise((resolve,reject)=>{
            const mongo=require('mongodb').MongoClient
             mongo.connect('mongodb+srv://test:*************@test.5llmu.mongodb.net/test?retryWrites=true&w=majority',{useNewUrlParser:true},function(error,data){
                let db=data.db('rdashboard')
                db.collection('customerDetail').find({},function(error,result){
                    let element_data=[]
                  result.forEach(element => {
                    element_data.push(element)
                       
                    },function(){
                        resolve(element_data)
                    }) 
                })
            })
        })
        return prmis
    }

    addCust(uid,email,name,mobile,city,state){
        let prmis=new Promise(function(resolve,reject){
            let mongo=require('mongodb').MongoClient
                mongo.connect('mongodb+srv://test:*************@test.5llmu.mongodb.net/test?retryWrites=true&w=majority',{useNewUrlParser:true},function(error,data){
                    let db=data.db('rdashboard')
                    db.collection('customerDetail').insertOne(
                        {
                            userid:uid,
                            email:email,
                            name:name,
                            mobile:mobile,
                            city:city,
                            state:state
                        },function(error,rslt){
                            if(error){
                                reject(error)
                            }else{
                                resolve(rslt)
                            }
                        })
                })
        
            })
            return prmis
    }


    editCustData(uid,email,name,mobile,city,state){
        let prmis = new Promise((resolve,reject)=>{
            let mongo = require('mongodb').MongoClient
            mongo.connect('mongodb+srv://test:*************@test.5llmu.mongodb.net/test?retryWrites=true&w=majority',(error,data)=>{
                let db = data.db('rdashboard')
                db.collection('customerDetail').updateOne(
                    {
                        'userid':uid
                    },{$set:
                        {
                            email:email,
                            name:name,
                            mobile:mobile,
                            city:city,
                            state:state
                        }
                    },(err,rslt)=>{
                        if(rslt){
                            resolve(rslt)
                        }else{
                            reject(err)
                        }
                    }
                )
            })
        })
        return prmis
    }



    singleCustData(uid){
        let prmis = new Promise((resolve,reject)=>{
            const mongo=require('mongodb').MongoClient
             mongo.connect('mongodb+srv://test:*************@test.5llmu.mongodb.net/test?retryWrites=true&w=majority',{useNewUrlParser:true},function(error,data){
                let db=data.db('rdashboard')
                db.collection('customerDetail').findOne({userid:uid},function(error,result){
                    if(result){
                        resolve(result)
                    }else{
                        reject(error)
                    }
                })
            })
        })
        return prmis
    }



    deleteCustData(uid){
        let prmis = new Promise((resolve,reject)=>{
            const mongo=require('mongodb').MongoClient
             mongo.connect('mongodb+srv://test:*************@test.5llmu.mongodb.net/test?retryWrites=true&w=majority',{useNewUrlParser:true},function(error,data){
                let db=data.db('rdashboard')
                db.collection('customerDetail').deleteOne({
                    'userid':uid  
                },(err,rslt)=>{
                    if(rslt){
                        resolve(rslt)
                    }else{
                        reject(err)
                    }

                })
            })
        })
        return prmis
    }
}

module.exports = customerData