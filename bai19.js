const thayThe = (str)=>{
    let regex = /([^a-z0-9])/g;
    str.replace(" ","-");
    console.log(str);
}
const paragraph = "I think Ruth's dog is cuter than your dog!";
let regex = /([^a-z0-9])/gi;
console.log(paragraph.replace(regex, '-'));