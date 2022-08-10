// const xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {
//     if (xhr.status === 200) {
//         if (xhr.readyState === 4) {
//             console.log(JSON.parse(xhr.response));
//         }
        
//     }else{
//         console.log(xhr.responseText);
//     }
// }

// xhr.open('get', 'http://www.omdbapi.com/?apikey=16246680&i=tt2395427');
// xhr.send();

// const movies = fetch('http://www.omdbapi.com/?apikey=16246680&i=tt2395427');
// console.log(movies);

// fetch('http://www.omdbapi.com/?apikey=16246680&i=tt2395427').then(response => response.json()).then(response => console.log(response));

// Promise
// contoh 1
// let ditepati = true;
// const janji1 = new Promise((resolve, reject) => {
//     if (ditepati){
//         resolve('Janji telah ditepati');
//     }else{
//         reject('Ingkar Janji');
//     }
// });

// janji1.then(response => console.log(`OK!! : ${response}`)).catch(response => console.log(`Not OK !! : ${response}`));

// contoh2 
let ditepati = true;
const janji2 = new Promise((resolve, reject) => {
    if (ditepati){
        resolve('Janji telah ditepati');
    }else{
        reject('Ingkar Janji');
    }
});