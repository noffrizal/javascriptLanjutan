// tagged template
// const nama = "Noffrizal Zaim";
// const umur = 30;

// function coba(strings, ...values) {
//     // let result = '';
//     // strings.forEach( (str, i) => {
//     //     result += `${str}${values[i] || ''}`
//     // });
//     // return result;

//     return strings.reduce((result, str, i) => `${result}${str}${values[i] || ''}`,'')
// }

// const str = coba`Halo, nama saya ${nama}, saya ${umur} tahun.`;
// console.log(str);

// highlight
const nama = "Noffrizal Zaim";
const umur = 30;
const email = 'zaimjr@gmail.com'

function highlight(strings, ...values) {

    return strings.reduce((result, str, i) => `${result}${str}<span class="hl">${values[i] || ''}</span>`,'')
}

const str = highlight`Halo, nama saya ${nama}, saya ${umur} tahun. email saya ${email}`;
document.body.innerHTML= str;
// console.log(str);