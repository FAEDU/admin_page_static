const express=require('express')

const app=express();
app.use(express.static('views'));

app.get('*',(req,res)=>{
    res.sendFile(__dirname+'/views/login.html');
})
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/views/login.html');
})

app.listen(process.env.PORT||3002);