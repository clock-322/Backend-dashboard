

let modules=require('../controller/modules')
let secretKey='03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4'


modules.router.get('/',((req,res)=>{
    res.send('React Dashboard backend is working...')
}))


modules.router.post('/login',(req,res)=>{
    let enc=modules.sha(req.body.password)
    let email=req.body.email
    console.log(email+'\\\\\\\\\\'+enc)
    //5994471abb01112afcc18159f6cc74b4f511b99806da59b3caf5a9c173cacfc5
    modules.adminData.login_check(email,enc).then((solve)=>{
        modules.jwt.sign({solve},secretKey,(error,token)=>{
            if(token){
                res.json({
                    token,'response':'You have successfully logged in',status:1
                })
            }else{
                res.json({
                    error,'response':'Email or password is wrong please try again',status:0
                })
            }
        })
    }).catch((fail)=>{
        console.log(fail)
        res.json(fail+'  failed')
    })
}) 

modules.router.post('/register',(req,res)=>{

    let uid = modules.adminData.unique_key()
    let email = req.body.email
    let enc = modules.sha(req.body.password)
    let name = req.body.name

   
    modules.adminData.registeration(uid,email,name,enc).then((solve)=>{
        res.json({
            'response':'You have successfully registered'
        })
    }).catch((fail)=>{
        res.json({
            'response':'Something went wrong please try again'
        })
    })
})


 
module.exports=modules.router

/* 

{
    "name":"abhishek",
    "mobile":"9991854120",
    "city":"Rewari",
    "state":"haryana",
    "email":"test3@test.com"
}
*/

