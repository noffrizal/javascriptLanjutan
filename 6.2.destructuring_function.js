// destructuring

// function kalkulasi(a,b) {
//     return [a+b,a-b,a*b];
// }

// // const [jumlah, kali] = penjumlahanPerkalian(2,3);
// // console.log(jumlah);
// // console.log(kali);

// const [tambah, kurang, kali, bagi = 'tidak ada'] = kalkulasi(2,3);
// console.log(bagi);

// dengan return objek

// function kalkulasi(a,b) {
//     return {
//         tambah: a+b,
//         kurang: a-b,
//         kali: a*b,
//         bagi: a/b
//     }
// }

// const {bagi, tambah, kali, kurang} = kalkulasi(2,3);
// console.log(kurang);

// destructure function argument
const mhs1 = 
{
    nama: 'noffrizal',
    umur: 30,
    email: 'zaimjr@gmail.com',
    nilai: {
        tugas: 80,
        uts: 85,
        uas: 75
    }
}

// function cetakMhs(nama, umur) {
//     return `Halo, nama saya ${nama}, dan umur saya ${umur}`;
// }

// console.log(cetakMhs(mhs1.nama, mhs1.umur));

function cetakMhs({nama, umur, nilai:{tugas,uts,uas}}) {
    return `Halo, nama saya ${nama}, dan umur saya ${umur}, dan nilai uas saya adalah ${uas}`;
}

console.log(cetakMhs(mhs1));