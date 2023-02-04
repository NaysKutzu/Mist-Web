const express = require('express');
const app = express();
const path = require('path');
app.use('/html',(req,res,next)=>{
res.sendFile(path.join(__dirname,'index.html');
});
app.listen(3000);
