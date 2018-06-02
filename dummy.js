function flatten(arr){
    var flatMap = [];
    arr.forEach(function(value){
        console.log(value);
        if(Array.isArray(value)){
            flatMap = flatMap.concat(flatten(value));
        }
        else{
            flatMap.push(value);
        }
    });
    return flatMap;
}
console.log(flatten([1,2,[3,6,6],[[1,2],[[6,4],[6,5]]]]));