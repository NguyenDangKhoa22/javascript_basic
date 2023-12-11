const uocSo = (num)=>{
    let check = false;
    let arr = [];
    let j =0;
    let sum = 0;
    for(let i=1;i<=num;i++){
        if(num%i==0){
            arr[j] = i;
            j++;
        }
    }
    for(let i=0;i<arr.length-1;i++){
        sum += arr[i];
    }
    if(sum == num){
        check = true;
    }
    else{
        check = false;
    }
    return check;
}
console.log(uocSo(28));
