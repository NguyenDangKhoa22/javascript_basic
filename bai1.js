const myNum = [1, 2, 3, 4, 5];

const sumOfArr = (arr = [])=>{
    {
        let sum =0
        arr.forEach(element => {
            sum += element;
        });
        return sum
    }
}
console.log(sumOfArr(myNum));