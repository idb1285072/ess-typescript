let principal: number = 4000;
let rate: number = 3.5;
let time: number = 5;

for(let i = 1; i <= time; i++) {
    let interest: number = (principal * rate) / 100;
    principal += interest;
    console.log(`Year ${i}: Interest = ${interest.toFixed(2)}, Total Amount = ${principal.toFixed(2)}`);
}