const ranDom = (a,b)=>{
    min = Math.ceil(a);
    max = Math.floor(b);
    if(a >= b){
        console.log("số sau không lớn hơn số trước");
    }
    else{
        return Math.floor(Math.random()*(max-min)+min);
    }
}
console.log(ranDom(3,1000));