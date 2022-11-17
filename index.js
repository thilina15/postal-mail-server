const express = require('express')
const multer = require('multer')
const upload = multer()
const app = express()

app.use(express.json())



app.post('/mail',upload.none(),(req,res)=>{
    console.log('new email is comming------>>>');
    console.log(req.body);
    console.log('end of email---------------------------------------------');
    res.status(200).send('done')
})

app.get('/',(req,res)=>{
    res.send('server is running----------!')
})


app.listen(4000,()=>{
    console.log("server is running on port 4000");
})