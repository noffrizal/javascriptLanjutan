// for of
// array
const mhs = ['noffrizal', 'zaim', 'junior'];
// mhs.forEach(m => {
//     console.log(m)
// });

// for (const m of mhs) {
//     console.log(m);
// }

// string
// const nama = 'noffrizal';

// // for (const n of nama) {
// //     console.log(n);
// // }

// for (const [i,m] of mhs.entries()) {
//     console.log(`${m} adalah mahasiswa ke ${i+1}`);
// }

// nodelist

// const liNama = document.querySelectorAll('.nama');
// console.log(liNama);
// // liNama.forEach(n => console.log(n.innerHTML));
// for (const n of liNama) {
//     console.log(n.innerHTML);
// }

// arguments
// function jumlahkanAngka() {
//     let jumlah = 0;
//     for (const a of arguments) {
        
//         jumlah += a;
//     }
//    console.log(jumlah); 
// }

// jumlahkanAngka(1,2,3,4,5);


// for..in
const mhs1 = {
    nama: 'noffrizal',
    umur: 30,
    email: 'aa@aa.com'
}

for (const m in mhs1) {
   console.log(mhs1[m]);
}