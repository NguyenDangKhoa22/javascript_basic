const demChuoi=(str)=>{
    let stringTrim =  str.trim();
    let arrStr = stringTrim.split(' ',str.length);
    return arrStr.length;
}
const str ="Khoa khung sfasdfadf sdfadf dfat";
console.log(demChuoi(str));