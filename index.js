const n  = 20;
let arr = new Array(n+ 1).fill(false);
// using sieve of erosthomes alogoritham.

for(let p = 2; p*p<=n; p++){
    if(arr[p] == true){
        arr[p] = false;
    }
    for(let i = p*p; i<=n; i+=p){
        arr[i] = true;
    }
}

for(let i =0; i<=n; i++ ){
    if(arr[i] == true){
        console.log(`${i} \n`)
    }
}