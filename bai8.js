function TinhGiaiThua(n) {
    if (n<=0) {
        return 1;
    }
    return n * TinhGiaiThua(n - 1);
}

console.log(TinhGiaiThua(5));