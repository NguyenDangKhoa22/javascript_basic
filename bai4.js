const Decreate = (arr = [])=>{
    arr.sort((a,b)=>a-b);
    return arr;
}
const Ascending = (arr = [])=>{
    arr.sort((a,b)=>b-a);
    return arr;
}
const arr = [3,6,7,4,8,9,2,10,5,1,0];
console.log(Decreate(arr));
console.log(Ascending(arr));