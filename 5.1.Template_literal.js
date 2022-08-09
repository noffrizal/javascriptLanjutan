//  template literal string
const nama = 'Noffrizal';
const umur = 30;
// console.log(`Nama saya ${nama}, dan Umur saya ${umur}`);
// console.log(`${alert('Halo!!')}`)
// let x = prompt('Masukkan bilangan');
// console.log(`Ini adalah bilangan ${x % 2 == 0 ? 'Genap' : 'Ganjil'}`)

// html fragment
const mhs = {
    nama : 'Noffrizal Zaim',
    umur : 30,
    nim : 102154,
    email : 'zaimjr@gmail.com'
};

const el =`<div class="mhs">
   <h2>${mhs.nama}</h2> 
   <span class="nim">${mhs.nim}</span>
</div>`;
console.log(el);
