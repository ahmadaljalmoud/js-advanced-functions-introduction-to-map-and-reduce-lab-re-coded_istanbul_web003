// Your code here
function mapToNegativize(sourceArray){
    let negative_Array=[];
    for (let i of sourceArray){
        negative_Array.push(i*-1)
    }
    return negative_Array
}

function mapToNoChange(sourceArray){
    return sourceArray
}

function mapToDouble(sourceArray){
    let Double_Array=[];
    for(let each of sourceArray){
        Double_Array.push(each*2)
    }
    return Double_Array
}

function mapToSquare(sourceArray){
    let Square_Array=[];
    for(let element of sourceArray){
        Square_Array.push(element*element)
    }
    return Square_Array
}

function reduceToTotal(sourceArray, startingPoint=0){
    // let value=startingPoint ? startingPoint:0;

    for (let e =0; e<sourceArray.length;e++){
        startingPoint=startingPoint+sourceArray[e];
    }
    return startingPoint;
}

function reduceToAllTrue(sourceArray){
    return sourceArray.every(Boolean)
}
function reduceToAnyTrue(sourceArray){
    return sourceArray.some(Boolean)
}

