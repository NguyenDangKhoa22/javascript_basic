const arr = 'radar';

const palindrome = (chuoiNe = [])=>{
    let tach = chuoiNe.split('');
    let arrNew = chuoiNe.split('');
    let check = false;
    tach.reverse();
    console.log(tach);
    console.log(arrNew);
    if(tach.toString() === arrNew.toString()){
        check = true;
    }
    else check = false;
    console.log(check);
}

palindrome(arr);