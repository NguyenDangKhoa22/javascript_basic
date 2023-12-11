function CheckPrimeNumber(numBer){
    let check =  false;
    if(numBer %2 != 0){
        check = true;
    }
    else{
        check = false;
    }
    return check;
}
const c = 77;
if(CheckPrimeNumber(c)){
    console.log("la so nguyen tố");
}else{
    console.log("không là số nguyên tố");
}