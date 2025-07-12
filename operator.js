// + - * / %
// == < > <= >= !=
// && (and)  || (or)
// typeof instanceof


// let huruf = 'a'
// console.log(huruf*5) // NaN =

let comparison1= '10'===10
let comparison2= 5<10
// console.log(comparison1 || comparison2)

let type = typeof comparison2
// console.log(type)
let isWeekend = true;
let isHoliday = false;
let canRelax = (isWeekend || isHoliday) && ! false;
console.log(canRelax)