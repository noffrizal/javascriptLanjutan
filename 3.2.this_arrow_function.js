// const mahasiswa = function () {
//     this.nama = "Noffrizal";
//     this.umur = 33;
//     this.sayHello = function () {
//         console.log(`Halo, nama saya ${this.nama}. Saya ${this.umur} Tahun`);
//     }
//     // console.log(this);
// }

// const mahasiswa1 = new mahasiswa();

// Arrow Function
// const mahasiswa = function () {
//     this.nama = "Noffrizal";
//     this.umur = 33;
//     this.sayHello = () => {
//         console.log(`Halo, nama saya ${this.nama}. Saya ${this.umur} Tahun`);
//     }
//     // console.log(this);
// }

// const mahasiswa1 = new mahasiswa();

// objek literal
// const mhs1 = {
//     nama: 'Noffrizal',
//     umur: 30,
//     sayHello: () => {
//         console.log(`Halo, nama saya ${nama}. Saya ${umur} Tahun`);
//     }
// }

const mahasiswa = function () {
        this.nama = "Noffrizal";
        this.umur = 33;
        this.sayHello = () => {
            console.log(`Halo, nama saya ${this.nama}. Saya ${this.umur} Tahun`);
        }

        setInterval(function () {
            console.log(this.umur++);               
        }, 500);
        // console.log(this);
    }
    
const mahasiswa1 = new mahasiswa();