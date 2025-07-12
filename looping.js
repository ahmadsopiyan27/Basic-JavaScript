// if else
// jika  a maka b

// let a = 1;
// if(a<5){
//     console.log('lolos'); //true
// } else {
//     console.log('gak lolos')  //false
// }

let buah = ['angggur', 'apel', 'sirsak', 'pisang'];
switch (buah[0]) {
    case 'anggur':
        console.log('ungu')
        break;
    case 'apel':
        console.log('merah')
        break;    
    case 'sirsak':
        console.log('hijau')
        break;    
    default:
        console.log('banyak warna')
        break;
}

// looping ada 3, for, while, do ... while

for(let index=0; index<3; index++){
    console.log(buah[index])
}

let index2 = 3
// while(index2<=3){
    // console.log(buah[index2])
    // console.log(`buah[${index2}]`)
    // index2++;


do{
    console.log(`buah hari ini adalah ${buah[index2]}`)
    index2++;
}while (index2<=2);

//  for in, for of
//  for in, dipakai  untuk object

let objectBaru = {
    name: 'a',
    class: 1
}
for (const key in objectBaru){
    console.log(`${key}: ${objectBaru[key]}`)
}

for (let menuHariIni of buah) {
    console.log('menuHariIni');
    console.log(menuHariIni);
}

// quiz
let usia = 20
if(usia <=18){
    console.log('anak2')
}else {
    console.log('dewasa')
}