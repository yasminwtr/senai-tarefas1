let n1 = 50
let n2 = 30
let n3 = 10

if (n1 < n2 && n1 < n3){
    console.log(n1);
    if (n2 < n3){
    console.log(n2);
    console.log(n3);
    } else{
        console.log(n3);
        console.log(n2);
    }
} else if (n2 < n1 && n2 < n3){
    console.log(n2);
    if (n1 < n3){
        console.log(n1);
        console.log(n3);
    } else {
        console.log(n3);
        console.log(n1);
    }
} else if (n3 < n1 && n3 < n2){
    console.log(n3);
    if (n3 < n1){
        console.log(n2);
        console.log(n1);
    } else {
        console.log(n1);
        console.log(n2);
    }
} 