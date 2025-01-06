const removeFromArray = function(arr, value) {
    
//goes throught the array
for(let i = value.length - 1; i >= 0; i--){

    arr.splice(value[i], 1); // removes the array at the index and only remones 
}
return arr;  
     
};

console.log(removeFromArray([1,2,3,4],[1,2]));
// Do not edit below this line
module.exports = removeFromArray;
