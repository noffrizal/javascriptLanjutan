// spread operator
// memecah operator menjadi single element
// const mhs = ['noffrizal', 'zaim','junior'];
// console.log(...mhs[0]);

// menggabungkan 2 array
// const mhs = ['noffrizal', 'zaim','junior'];
// const dosen = ['ade','hendra','wanda'];
// const orang = [...mhs,'aji', ...dosen];
// // const orang = mhs.concat(dosen);
// console.log(orang);

// copy array
// const mhs = ['noffrizal', 'zaim','junior'];
// // const mhs1 = mhs;
// // mhs1[0] = 'Fajar';
// const mhs1 = [...mhs];
// mhs1[0] = 'Fajar';
// console.log(mhs);

// const liMhs = document.querySelectorAll('li');
// const mhs = [...liMhs].map(m => m.textContent);
// console.log(mhs);

const nama = document.querySelector('.nama');
const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('');
nama.innerHTML = huruf;
console.log(huruf);
