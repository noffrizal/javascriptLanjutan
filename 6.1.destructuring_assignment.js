//  destructuring variable / assignment
// destructuring Array

// const perkenalan = ['halo', 'nama', 'saya', 'noffrizal'];

// const[salam, satu, dua , nama] = perkenalan;

// skipping
// const[salam, , , nama] = perkenalan;
// console.log(nama);

// // swap items / tukar
// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);
// [a,b] = [b,a];
// console.log(a);
// console.log(b);

// return value pada function
// function coba() {
//     return [1, 2];
// }

// const [a,b] = coba();
// console.log(a);

// Rest Parameter

// const [a,...values] = [1,2,3,4,5,6];
// console.log(a);
// console.log(values[1]);

// destructuring object
// const mhs = {
//     nama : 'noffrizal',
//     umur : 30,

// }

// const {nama, umur} = mhs;
// console.log(nama);
// console.log(umur);

// assignment tanpa deklarasi objek
// ({nama, umur} = {
//     nama : 'noffrizal',
//     umur : 30,
// });


// console.log(nama);
// console.log(umur);

// assign ke variable baru

// const mhs = {
//     nama : 'noffrizal',
//     umur : 30,
// }

// const {nama: n, umur: u} = mhs;
// console.log(n);
// console.log(u);

// memberikan nilai default
// const mhs = {
//     nama : 'noffrizal',
//     umur : 30,
// }

// const {nama: n, umur: u, email = 'admin@google.com'} = mhs;
// console.log(n);
// console.log(u);
// console.log(email);

// memberi nilai default dan assign ke variable baru
// const mhs = {
//     nama : 'noffrizal',
//     umur : 30,
// }

// const {nama: n, umur: u, email: e = 'admin@google.com'} = mhs;
// console.log(n);
// console.log(u);
// console.log(e);

//rest parameter
// const mhs = {
//     nama : 'noffrizal',
//     umur : 30,
//     email: 'zaimjr@gmail.com'
// }

// const {nama, ...values} = mhs;
// console.log(nama);
// console.log(values.umur);

// mengambil field pada object , setelah dikirim sebagai parameter untuk function

const mhs = {
    id : 123,
    nama : 'noffrizal',
    umur : 30,
    email: 'zaimjr@gmail.com'
}

function getIdMhs({nama}) {
    return nama;
}
console.log(`nama = ${getIdMhs(mhs)}`)
