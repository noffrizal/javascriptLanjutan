// function Mahasiswa(nama, energi) 
// {  
//     this.nama = nama;
//     this.energi = energi;
// }

// Mahasiswa.prototype.makan = function (porsi) 
// {
//     this.energi += porsi;
//     console.log(`halo ${this.nama}, Selamat Makan`);    
// }

// Mahasiswa.prototype.main = function (jam) 
// {
//     this.energi -= jam;
//     console.log(`halo ${this.nama}, Selamat main`);    
// }

// Mahasiswa.prototype.tidur = function (jam) 
// {
//     this.energi = jam * 2;
//     console.log(`halo ${this.nama}, Selamat tidur`);    
// }

// let mahasiswa1 = new Mahasiswa('Noffrizal', 10);

// versi Class
class Mahasiswa
{
    constructor(nama, energi)
    {
        this.nama = nama;
        this.energi = energi;
    }

    makan(porsi) 
    {
        this.energi += porsi;
        console.log(`halo ${this.nama}, Selamat Makan`);    
    }

    main(jam) 
    {
        this.energi -= jam;
        console.log(`halo ${this.nama}, Selamat main`);    
    }

    tidur(jam) 
    {
        this.energi = jam * 2;
        console.log(`halo ${this.nama}, Selamat tidur`);    
    }

}

let mahasiswa1 = new Mahasiswa('Zaim', 20);