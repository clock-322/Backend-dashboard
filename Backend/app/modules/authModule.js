
//customerDetail
class authData{

    login_check(user_email,user_pass){
    let prmis=new Promise(function(resolve,reject){
    let mongo=require('mongodb').MongoClient
        mongo.connect('mongodb+srv://test:*************@test.5llmu.mongodb.net/test?retryWrites=true&w=majority',{useNewUrlParser:true},function(error,data){
            let db=data.db('rdashboard')
                db.collection('adminData').findOne({email:user_email,password:user_pass},function(error,rslt){
                        if(rslt!=null){
                            resolve(rslt)
                        }else{
                            reject(error)
                        }
                })
        })

    })
    return prmis
    }

    registeration(uid,email,name,password){
        let prmis=new Promise(function(resolve,reject){
            let mongo=require('mongodb').MongoClient
                mongo.connect('mongodb+srv://test:*************@test.5llmu.mongodb.net/test?retryWrites=true&w=majority',{useNewUrlParser:true},function(error,data){
                    let db=data.db('rdashboard')
                    db.collection('adminData').insertOne(
                        {
                            userid:uid,
                            email:email,
                            name:name,
                            password:password,
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


    unique_key(){
        let date=new Date()
        let key=''
        return key=Math.random()+date.getTime()
    }


    verifyToken(req,res,next){
        //Get auth header value
        const bearerHeader=req.headers['authorization']
        //check if bearer is undefined
        if(typeof bearerHeader!='undefined'){
            //split at the space
            const bearer=bearerHeader.split(' ')
            //Get token from array
            const bearerToken=bearer[1]
            //set the token
            req.token=bearerToken
            //Next middleware
            next()
    
        }else{
            //forbidden
            res.sendStatus(403)
        }
    }
    
}
    module.exports=authData