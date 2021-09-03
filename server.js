const exp=require('express')
const app=exp()
const path=require('path')
require("dotenv").config()
// app.use(exp.static(__dirname,'./dist/firstApp'))
app.use(exp.static(path.join(__dirname,"./dist/secondApp/")))
app.use(exp.json())

const userApi=require("./APIS/user-api")

app.use('/user',userApi)


const port=process.env.PORT || 8080
app.listen(port,()=>{console.log(`listening to port ${port}`)})