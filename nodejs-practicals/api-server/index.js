const express= require('express');
const {getMinValue}= require(`./util.js`);
const {getMaxValue}= require(`./util.js`);
const {getAVG}= require(`./util.js`);
const {getSortArray}= require(`./util.js`);
const {searchArray}= require(`./util.js`);



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

    const getMax = getMaxValue(num1,num2);
    res.status(getMax.status).json(getMax.data);
    
});

app.get('/number/avg',(req,res)=>{
    const numbersParam = req.query.numbers;
    // console.log(numbersParam.split(',').map(num=>parseFloat(num)));    
    // const numbers = numbersParam.split(',').map(num=>parseFloat(num));
    // const sum = numbers.reduce((partialSum, a) => partialSum + a, 0); 
    // console.log(numbersParam.split(',').map(num=>parseFloat(num)));
    // console.log(sum/numbers.length)
    const ang =getAVG(numbersParam);
    res.status(ang.status).json(ang.data);
})


app.get('/number/sort', (req, res) => {
    const numbersParam = req.query.numbers;
    const sortingType = req.query.type;

    const sortValue =getSortArray(numbersParam, sortingType);
    res.status(sortValue.status).json(sortValue.data);


})
app.get('/number/count', (req, res) => {
    const numbersParam = req.query.numbers;
    const insertVal = req.query.insert;

    const searchValue =searchArray(numbersParam, insertVal);
    res.status(searchValue.status).json(searchValue.data);


})




app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
});


// number/avg ,(req,res) => {});
// number/sort ,(req,res) => {});
// number/filter ,(req,res) => {});