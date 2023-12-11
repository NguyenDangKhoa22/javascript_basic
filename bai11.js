const soNguyenTo = (arr = [])=>{
    let arr1 = [];
    let i=0;
    arr.forEach(element => {
        if(element % 2 !=0){
            arr1[i] = element;
            i++;
        }
    });
    return arr1;
}
const arr=[1,2,3,4,5,6,7,8,9]
console.log(soNguyenTo(arr));