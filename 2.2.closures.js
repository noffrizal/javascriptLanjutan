// function init() {
//     let nama = "Noffrizal";

//     function tampilNama() {
//         console.log(nama);
//     }
//     tampilNama();
// }
// init();

// function init() 
// {
//     // let nama = "Noffrizal";

//    return function(nama) 
//     {
//         console.log(nama);
//     }
//     // return tampilNama;
// }
// let panggilNama = init();
// panggilNama('zaim');
// panggilNama('dea');


// function ucapkanSalam(waktu) {
//     return function (nama) {
//         console.log(`Halo ${nama}, selamat ${waktu}, Smoga harimu Menyenangkan`);
//     }
// }

// let selamaPagi = ucapkanSalam('Pagi');
// let selamatSiang = ucapkanSalam('Siang');

// selamatSiang('Noffrizal');
// selamaPagi('Zaim');


let add = (function () {
    let counter = 0;
    
    return function () {
        return ++counter;
    }
})();

counter = 100;

console.log(add());
console.log(add());
console.log(add());


