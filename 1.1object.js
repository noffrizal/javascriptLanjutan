// membuat object pada javascript

// 1. membuat object literal
// let mahasiswa = {
//     nama: 'Noffrizal',
//     energi: 10,
//     makan: function (porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`Selamat datang ${this.nama}, selamat Makan.`)
//     }
// }

// let mahasiswa2 = {
//     nama: 'Zaim',
//     energi: 10,
//     makan: function (porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`Selamat datang ${this.nama}, selamat Makan.`)
//     }
// }

// 2. Function Delclaration
const  methodMahasiswa = 
{
    makan: function (porsi) 
    {
        this.energi += porsi;
        console.log(`halo ${this.nama}, Selamat Makan`);
    },

    main: function (jam) 
    {
        this.energi -= jam;
        console.log(`halo ${this.nama}, Selamat Bermain`);
    },

    tidur: function (jam) 
    {
        this.energi += jam * 2;
        console.log(`Halo ${this.nama}, Selamat Tidur`);
    }
}

function Mahasiswa(nama, energi) 
{
    let mahasiswa = Object.create(methodMahasiswa);
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;
    

    return mahasiswa;
}

let mahasiswa1 = Mahasiswa('Noffrizal', 10);
let mahasiswa2 = Mahasiswa('Zaim', 30);


// 3. Constructor Function
// keyword New
// function Mahasiswa(nama, energi) 
// {
//    this.nama = nama;
//    this.energi = energi;

//    this.makan = function (porsi) 
//     {
//         this.energi += porsi;
//         console.log(`halo ${this.nama}, Selamat Makan`);
//     }

//    this.main = function (jam) 
//     {
//         this.energi -= jam;
//         console.log(`halo ${this.nama}, selamat bermain`);
//     }

// }

// let mahasiswa1 = new Mahasiswa('Noffrizal', 20);

// 4. Object Create