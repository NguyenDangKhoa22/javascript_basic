const sapXepTuDien = (a ,b)=>{
    const c = [];
    c.sort((a,b)=>{a.localeCompare(b)});
    return c;
}
const a = "neuvilet";
const b = "furina";
console.log(sapXepTuDien(a,b));