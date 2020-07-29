const express=require('express')
const router=express.Router()
const port=process.env.PORT || 8080
const jwt=require('jsonwebtoken')
let sha=require('sha256')

let authData=require('../modules/authModule')
let customerData=require('../modules/customerModule')

let adminData=new authData()
let custData = new customerData()






module.exports={
    adminData:adminData,
    custData:custData,
    express:express,
    router:router,
    port:port,
    sha:sha,
    jwt:jwt
}