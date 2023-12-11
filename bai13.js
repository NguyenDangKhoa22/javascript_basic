function reverseFibonacci(num) {
    let array = [0,1];
    for (let i = 2; i < num; i++) {
      array[i] = array[i - 2] + array[i - 1];
    }
    return array;
  }
  
  var num = 5;
  answer = reverseFibonacci(num);
  
  console.log(reverseFibonacci(num));