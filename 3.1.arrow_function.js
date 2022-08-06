// function expression
// const tampilNama = function (nama) {
//     return `Halo ${nama}`;
// }

// console.log(tampilNama('Zaim'));

// Arrow function
// const tampilNama = (nama) => { 
//     return `Halo, ${nama}`; 
// }

// console.log(tampilNama('Noffrizal'));

// const tampilNama = (nama, waktu) => 
// {
//     return `Selamat ${waktu}, ${nama}`;
// }

// console.log(tampilNama('Noffrizal Zaim', 'Pagi'));

// implisit return
// const tampilNama = nama => `Halo, ${nama}`;

// console.log(tampilNama('Noffrizal'));

let mahasiswa = ['Agung Febrian', 'Indra Salman', 'Noffrizal Zaim'];
// let jumlahHuruf = mahasiswa.map(nama => nama.length);
// console.log(jumlahHuruf);

// objek di arrow function
let jumlahHuruf = mahasiswa.map(nama => ({nama: nama, jlhHuruf: nama.length}));
console.table(jumlahHuruf);