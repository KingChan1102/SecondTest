const exp=require('express')
const userApi=exp.Router()
const expressErrorHandler=require('express-async-handler')
const bcryptjs=require("bcryptjs")
const jwt=require("jsonwebtoken")
require("dotenv").config()

userApi.use(exp.json())

const mc=require("mongodb").MongoClient

const databaseUrl=process.env.DATABASE_URL

let userCollectionObj;
let userFavShowObj;
mc.connect(databaseUrl,{useNewUrlParser:true,useUnifiedTopology:true},(err,client)=>{
    if(err){
        console.log("error is ",err)
    }
    else{
        let databaseObj;
        databaseObj=client.db("vnrdb2021")
        userCollectionObj=databaseObj.collection("usercollection")
        userFavShowObj=databaseObj.collection("usershowcollection")
        userFavMovieObj=databaseObj.collection("usermoviecollection")

        console.log("connected to user database")
    }
})

userApi.use(exp.json())



userApi.get("/getUsers",expressErrorHandler(async (req,res,next)=>{
    let userList=await userCollectionObj.find().toArray()
    res.send({message:userList})
}))





userApi.get("/getUsers/:username",async (req,res,next)=>{
    let un=req.params.username
    let userObj= await userCollectionObj.findOne({username:un})
    if(userObj===null){
        res.send({message:"user not esxisted"})
    }
    else{
        res.send({message:userObj})
    }
})



userApi.post("/createuser",async (req,res,next)=>{
    let newUser=req.body
    let existed= await userCollectionObj.findOne({username:newUser.username})
    if(existed!==null){
        res.send({message:"user already existed"})
    }
    else{
        let hashPassword=await bcryptjs.hash(newUser.password,7)
        newUser.password=hashPassword
        await userCollectionObj.insertOne(newUser)
        res.send({message:"user is created"})
    }
})
userApi.put("/updateuser/:username",(req,res,next)=>{
    let modifiedUser=req.body

    userCollectionObj.updateOne({username:modifiedUser.username},{
        $set:{...modifiedUser}
    },(err,success)=>{
        if(err){
            res.send({message:err.message})
        }
        else{
            res.send({message:"User dfetails updated"})
        }
    })
})
userApi.post("/login",expressErrorHandler(async(req,res,next)=>{
    let credentials=req.body
    
   let un=await userCollectionObj.findOne({username:credentials.username})
   if(un===null){
       res.send({message:"username not found"})
   }
   else{
      let result=await bcryptjs.compare(credentials.password,un.password)
      if(result===false){
          res.send({message:"Wrong Password"})
      }
      else{
          let signedToken=jwt.sign({username:credentials.username},'abcdef',{expiresIn:120})
          res.send({message:"Login successful",token:signedToken,username:credentials.username,userObj:un})
      }
   }
}))

userApi.post("/add-to-favs",expressErrorHandler(async (req,res,next)=>{
    let newShowObj=req.body;
    
    let userCartObj=await userFavShowObj.findOne({username:newShowObj.username})
    
    //if not existed
    if(userCartObj===null){
        let shows=[];
        shows.push(newShowObj.show)
    
        let newUserCartObj={username:newShowObj.username,shows}

        await userFavShowObj.insertOne(newUserCartObj)
        res.send({message:"New Show added"})
    }
    else{

        userCartObj.shows.push(newShowObj.show)
        await userFavShowObj.updateOne({username:newShowObj.username},{$set:{...userCartObj}})
        res.send({message:"New Show added"})
    }
    }));

userApi.get("/show-favs/:username",expressErrorHandler(async (req,res,next)=>{
    let un=req.params.username;

    let userFavObj = await userFavShowObj.findOne({username:un})

    if (userFavObj ===null){
        res.send({message: "No shows Yet"})
    }
    else{
        res.send({message:userFavObj})
    }
}))

userApi.put("/delete-favs/:username",expressErrorHandler(async (req,res,next)=>{
    let un=req.params.username;
    let xshowId=req.body.id;
    console.log(xshowId)
    let x=await userFavShowObj.updateOne({username:un},
        {$pull:{shows:{id:xshowId}}},
        {multi:true})
    // console.log(await userFavShowObj.findOne({username:un}))
    res.send({message:"Sucessful deletion"})
}))

userApi.post("/add-to-favm",expressErrorHandler(async (req,res,next)=>{
    let newMovieObj=req.body;
    
    let userCartObj=await userFavMovieObj.findOne({username:newMovieObj.username})
    
    //if not existed
    if(userCartObj===null){
        let movies=[];
        movies.push(newMovieObj.show)
    
        let newUserCartObj={username:newMovieObj.username,movies}

        await userFavMovieObj.insertOne(newUserCartObj)
        res.send({message:"New Movie added"})
    }
    else{

        userCartObj.movies.push(newMovieObj.show)
        await userFavMovieObj.updateOne({username:newMovieObj.username},{$set:{...userCartObj}})
        res.send({message:"New Movie added"})
    }
    }));

    userApi.get("/show-movies/:username",expressErrorHandler(async (req,res,next)=>{
        let un=req.params.username;
    
        let userFavObj = await userFavMovieObj.findOne({username:un})
    
        if (userFavObj ===null){
            res.send({message: "No shows Yet"})
        }
        else{
            res.send({message:userFavObj})
        }
    }))


    userApi.put("/delete-movies/:username",expressErrorHandler(async (req,res,next)=>{
        let un=req.params.username;
        let xshowId=req.body.id;
        console.log(xshowId)
        let x=await userFavMovieObj.updateOne({username:un},
            {$pull:{movies:{id:xshowId}}},
            {multi:true})
        // console.log(await userFavShowObj.findOne({username:un}))
        res.send({message:"Sucessful deletion"})
    }))


userApi.use((err,req,res,next)=>{
    res.send({message:`error is ${err.message}`})
})
module.exports=userApi;