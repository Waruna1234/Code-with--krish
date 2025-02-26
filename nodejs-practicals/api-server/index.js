const express= require('express');
const {getMinValue}= require(`./util.js`);
const {getMaxValue}= require(`./util.js`);

const app = new express();
const port = 3000;
const greeting = {message: 'hello node'};
app.get('/',(req,res)=>{
    res.json(greeting)
})

app.get('/number/min',(req,res)=>{
    const num1= parseFloat(req.query.num1);
    const num2= parseFloat(req.query.num2);

    const getMin = getMinValue(num1,num2);

    // if(isNaN(num1)|| isNaN(num2)){
    //     res.status(400).json({error: `both valus must be number`})
    // }
    // console.log(`compare ${num1} wit ${num2}  num1<num2 ${num1<num2}`);

    // res.json({min: num1 > num2 ? num2 : num1});
    res.status(getMin.status).json(getMin.data);
    
});

app.get('/number/max',(req,res)=>{
    const num1= parseFloat(req.query.num1);
    const num2= parseFloat(req.query.num2);

    const getMin = getMaxValue(num1,num2);
    res.status(getMin.status).json(getMin.data);
    
});

app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
});

// number/max ,(req,res) => {});
// number/avg ,(req,res) => {});
// number/sort ,(req,res) => {});
// number/filter ,(req,res) => {});