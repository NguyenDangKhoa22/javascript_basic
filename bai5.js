const minNumberOfArray = (arr = []) =>{
    let number = Math.min(...arr);
    return number;
}   
const maxNumberOfArray = (arr = [])=>{
    let number = Math.max(...arr);
    return number;
}
const arr =[1,3,255,3,36,34,45,22,3,1414,2,36,56,4,52,]
console.log(minNumberOfArray(arr));
console.log(maxNumberOfArray(arr));