
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

function getAVG(numbersParam){
    if(!numbersParam){
        return{
            status:400,
            data:{
               error: `Please insert numbers`,
            },
        };

    }

    const numbers = numbersParam.split(',').map(num=>parseFloat(num));
    for(let num of numbers){
        if(isNaN(num)){
            return{
                status:400,
                data:{
                   error: `valus must be number`,
                },
            };
    }
}
    const sum = numbers.reduce((getSum, a) => getSum + a, 0); 

    return{
        status:200,
        data: {
            avg: sum/numbers.length,
        },
    }

}
function getSortArray(numbersParam,sortingType){
    if(!numbersParam || !sortingType){
        return{
            status:400,
            data:{
               error: `Please insert values`,
            },
        };
    }
    if(sortingType==='dec'){
        const decSorting = decSort(numbersParam);
        return decSorting;
    }
    if(sortingType==='asc'){
    const ascSorting = ascSort(numbersParam);
        return ascSorting;
    }
    return{
        status:400,
        data:{
           error: `Please insert correct sorting type`,
        },
    };

}

function decSort(numbersParam){
    if(!numbersParam){
        return{
            status:400,
            data:{
               error: `Please insert numbers`,
            },
        };

    }

    const numbers = numbersParam.split(',').map(num=>parseFloat(num));
    for(let num of numbers){
        if(isNaN(num)){
            return{
                status:400,
                data:{
                   error: `valus must be number`,
                },
            };
        }
    }
    const sortArr = numbers.sort((a, b) => b - a);
    return{
        status:200,
        data: {
            dec: sortArr,
        },
    }



}
function ascSort(numbersParam){
    if(!numbersParam){
        return{
            status:400,
            data:{
               error: `Please insert numbers`,
            },
        };

    }

    const numbers = numbersParam.split(',').map(num=>parseFloat(num));
    for(let num of numbers){
        if(isNaN(num)){
            return{
                status:400,
                data:{
                   error: `valus must be number`,
                },
            };
        }
    }
    const sortArr = numbers.sort((a, b) => a - b);
    return{
        status:200,
        data: {
            asc: sortArr,
        },
    }

}


function searchArray(numbersParam, insertVal){
    let count =0;
    if(!numbersParam || !insertVal){
        return{
            status:400,
            data:{
               error: `Please insert values`,
            },
        };
    }
    const numbers = numbersParam.split(',');
    for(let num of numbers){
        if(num===insertVal){
            count++
        }
    }
    return{
        status:200,
        data: {
            sum: count,
        },}

}

module.exports = {getMinValue,getMaxValue,getAVG,getSortArray,searchArray}
