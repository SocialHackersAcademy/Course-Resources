function add(a,b){ 
    a+b; 
}

console.assert (add(5,5)===10, "5,5 does not work");

function add(a,b){ 
    return a+b; 
}

console.assert (add(5,5)===10, "5,5 does not work");