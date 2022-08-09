// rest parameter
// function myFunct(...myArgs) {
//     // return ` myArgs = ${myArgs}`;
//     return [...arguments];
// }
// console.log(myFunct(1,2,3,4,5));

// function jumlahkan(...angka) {
//     // let total = 0;
//     // for (const a of angka) {
//     //     total += a;
//     // }

//     // return total;

//     return angka.reduce((a,b) => a+b);
// }

// console.log(jumlahkan(1,2,3,4,5));

// array destructuring
// const kelompok1 = ['noffrizal', 'zaim', 'junior'];
// const [ketua, wakil, ...anggota] = kelompok1;
// console.log(ketua);

// object destructuring
// const team = {
//     pm: 'noffrizal',
//     fe1: 'zaim',
//     fe2: 'junior',
//     be: 'fajar',
//     ux: 'hendra',
//     dops: 'ferry'
// }

// const {pm, ...myTeam} = team;
// console.log(myTeam);

// filter
function filterBy(type, ...values) {
    return values.filter(v => typeof v === type);
}

console.log(filterBy('number', 1,2,'noffrizal',false,10,true,'Doddy'));