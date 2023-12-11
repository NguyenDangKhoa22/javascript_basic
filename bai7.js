const mangChung  = (arr1=[],arr2=[])=>{
    let arr3 = arr1.concat(arr2);
    let result = arr3.filter((value,index,seft)=>{
        return seft.indexOf(value)===index;
    })
    return result;
}
const arr1 = [1,2,3,4,5,6,7,8,9,10];
const arr2 = [2,3,2,3,6,7,8,123,53];
console.log(mangChung(arr1,arr2));