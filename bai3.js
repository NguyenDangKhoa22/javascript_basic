const chuoiNe ="Hello world";

function ReverseString(str){
    let strTach = str.split("");
    let newString ="";
    for(let i = strTach.length-1;i>=0;i--){
        newString+=strTach[i];
    }
    return newString;
}
console.log(ReverseString(chuoiNe))