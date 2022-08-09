// Html Fragments
// const mhs = {
//     nama : 'Noffrizal Zaim',
//     umur : 30,
//     nim : 102154,
//     email : 'zaimjr@gmail.com'
// };
// const el =`<div class="mhs">
// <h2>${mhs.nama}</h2> 
// <span class="nim">${mhs.nim}</span>
// </div>`;

// looping
// const mhs = [
//     {
//         nama : 'Noffrizal Zaim',
//         email : 'zaimjr@gmail.com'
//     },
//     {
//         nama : 'Eka Buana',
//         email : 'ekabuana@gmail.com'
//     }

// ];

// const el =`<div class="mhs">
//     ${mhs.map(m => `<ul>
//         <li>${m.nama}</li>
//         <li>${m.email}</li>
//     </ul>`).join('')}
// </div>`;


// conditional
// ternary
// const lagu = {
//     judul : 'Tetap dalam Jiwa',
//     penyanyi : 'Isyana Sarasvati',
//     feat : 'Rayi Putra'
// }

// const el =`<div class="mhs">
// <h2>${lagu.penyanyi}</h2> 
// <span class="nim">${lagu.judul} ${lagu.feat ? `(feat ${lagu.feat})` : ``}</span>
// </div>`;

// nested
// html fragment bersarang

const mhs = {
    nama : 'Noffrizal',
    semester : 5,
    mk : ['RPL', 'SIM', 'UML']
}

function cetakMataKuliah(matakuliah) {
    return `
    <ol>
        ${matakuliah.map(mk => `<li>${mk}</li>`).join('')}
    </ol>
    `;
}

const el = `<div class="mhs">
<h2>${mhs.nama}</h2> 
<span class="nim">Semester : ${mhs.semester}</span>
<h4>Mata Kuliah : </h4>
${cetakMataKuliah(mhs.mk)}
</div>`;

document.body.innerHTML = el;
// console.log(el);
