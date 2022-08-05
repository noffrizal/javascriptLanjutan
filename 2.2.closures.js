// function init() {
//     let nama = "Noffrizal";

//     function tampilNama() {
//         console.log(nama);
//     }
//     tampilNama();
// }
// init();

function init() 
{
    let nama = "Noffrizal";

    function tampilNama() 
    {
        console.log(nama);
    }
    return tampilNama;
}
let panggilNama = init();
panggilNama();