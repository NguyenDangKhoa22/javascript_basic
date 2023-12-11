const Pangram = (str1)=>{
    let str = "qwertyuiopasdfghjklzxcvbnm";
    let resuilt = str1.split('');
    let regex =  /([a-z])/gi;
    let result1 = str.match(regex);
    let check = false
    if(resuilt.toString() == result1.toString()){
         check = true
    }
    else check = false
    return check;
}
const str = 'qwertyuiopasdfghjklzxcvbnm';
if(Pangram(str)){
    console.log("đúng nè");
}else console.log("sai rồi");