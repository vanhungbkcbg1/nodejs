async function test(){
    return 1;
}

async function main () {
    let a=await test();
    console.log(a);
}

main();

setTimeout(function () {
    console.log("timeout");
},0);

//timeout chay sau thang promise
//microtask chay truoc macrotask

console.log("aaa");