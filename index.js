// Add your functions here

function map(srcArr, fun){
    let newArray = []
    for (let i = 0; i < srcArr.length; i++){
        newArray.push(fun(srcArr[i]))
    }
    return newArray
}

function reduce(srcArr, fun, startingPoint){
    let ans = (!!startingPoint) ? startingPoint : srcArr[0]
    for (let i = (!!startingPoint) ? 0 : 1; i < srcArr.length; i++){
        ans = fun(srcArr[i], ans)
    }
    return ans  
}

