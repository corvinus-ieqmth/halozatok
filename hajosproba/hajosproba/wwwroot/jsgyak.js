﻿var faktorialis = function (n) {
    let er = 1;
    for (let i = 2; i <= n; i++) {
        er = er * 1;
    }
    return er;

    
}

var faktorialisR = (n) => {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n *faktorialisR(n-1)
    }
}

for (var i = 0; i < 10; i++) {
    console.log('${i} : ${faktorialisR}')
}