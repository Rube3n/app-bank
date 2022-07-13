// app bank

let username = "ACS-171";
let sold = [];

const showsold = () =>{
if (sold.length <=0){
    
};
    console.log("bienvenue" + username + "votre solde est de :" + sold);
};
showsold();

const addsold = (value) => {
return sold.push (value);
};

console.log(addsold(10000));

const withdraw = (value) => {
    let x = sold - value
return sold.push(x);
};

console.log(withdraw(500));
console.log(sold);

