// callback
// function halo(nama) {
//     alert(`Halo, ${nama}`);
// }

// function tampilanPesan(callback) {
//     const nama = prompt('masukkan Nama');
//     callback(nama);
// }

// tampilanPesan(nama => alert(`Halo, ${nama}`) );

// const mhs = 
// [
//     {
//      "nama": 'Noffrizal',
//      "nim": 'TI102154',
//      "email": 'noffrizal@gmail.com',
//      "jurusan": 'Teknik Informatika',
//      "idDosenWali": 1
//     },
//     {
//         "nama": 'Zaim',
//         "nim": 'TI101154',
//         "email": 'zaim@gmail.com',
//         "jurusan": 'Teknik Mesin',
//         "idDosenWali": 2
//     },
//     {
//         "nama": 'Junior',
//         "nim": 'TI102122',
//         "email": 'junior@gmail.com',
//         "jurusan": 'Teknik Sipil',
//         "idDosenWali": 3
//     }
// ];
// console.log('mulai')

// mhs.forEach(m => {
//     for (let i = 0; i < 10000000; i++) {
//         let date = new Date();
//     }
//     console.log(m.nama)
// });
// console.log('selesai');

// asynchronous Callback
// function getDataMahasiswa(url, success, error) {
//          let xhr = new XMLHttpRequest();

//          xhr.onreadystatechange = function () {
//             if (xhr.readyState === 4)
//             {
//                 if(xhr.status === 200)
//                 {
//                     success(xhr.response);
//                 }
//                 else if(xhr.status === 404)
//                 {
//                    error(); 
//                 }
//             }
//          }

//     xhr.open('get', url);
//     xhr.send();
// }
// console.log('mulai');
// getDataMahasiswa('mahasiswa.json', (result) => {
//     const mhs = JSON.parse(result);
//    mhs.forEach(m => console.log(m.nama));
// }, () => {

// });
// console.log('selesai');

// jquery
console.log('mulai');
$.ajax({
    url: 'mahasiswa.json',
    success: (mhs) => {
        mhs.forEach(m => console.log(m.nama));
    },
    error: (e) => {
        console.log(e.responseText);
    }
})
console.log('selesai');
