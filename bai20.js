function gcd_two_numbers(x, y) {
    let c = 100000;
    let result ;
    for(let i =1;i<c;i++){
        if(i%x == 0 && i%y == 0){
            result = i;
            break
        }
    }
    return result;
  }
  console.log(gcd_two_numbers(6,7));