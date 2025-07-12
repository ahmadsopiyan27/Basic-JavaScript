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

for(let index=1; index<10; index++){
    console.log(index)
}