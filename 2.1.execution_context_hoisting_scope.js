// var nama = 'Noffrizal';
// console.log(nama);




// var nama = 'Noffrizal';
// var umur = 30;

// console.log(sayHello());

// function sayHello() {
//     return `Halo, Nama Saya ${nama}, umur saya ${umur}`;
// }


 



function a() {
    console.log("ini A");

    function B() {
        console.log("Ini B");

        function C() {
            console.log("Ini C");
        }
        C();
    }
    B();
}
a();