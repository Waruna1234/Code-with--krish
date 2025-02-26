
function getMinValue(num1, num2){
    if(isNaN(num1)|| isNaN(num2)){
        // return "both valus must be number";
        return{
            status:400,
            data:{
               error: `both valus must be number`,
            },
        };
    }
    return {
        status:200,
        data: {min : num1 > num2 ? num2 : num1},
    };
}

function getMaxValue(num1,num2){
    if(isNaN(num1)||isNaN(num2)){
        return{
            status:400,
            data:{
               error: `both valus must be number`,
            },
        };
    }
    return{
        status:200,
        data: {
            max: num1>num2 ? num1 : num2
        },
    }
}

module.exports = {getMinValue,getMaxValue}
