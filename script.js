//! task 1

// function mouseCordinat() {
//   let interval;
//   window.addEventListener('mousemove', (e) => {
//     clearTimeout(interval);

//     interval = setTimeout(() => {
//       console.log('mouse Xcordinat ', e.clientX);
//       console.log('mouse Ycordinat ', e.clientY);
//     }, 300);
//   });
// }

// mouseCordinat();

//! task 2

// async function parseData() {
//   res = await fetch('https://jsonplaceholder.typicode.com/users');

//   data = await res.json();

//   let parseData = data.map((el) => {
//     return (el = {
//       id: el.id,
//       name: el.name,
//       username: el.username,
//       email: el.username,
//     });
//   });
//   console.log(parseData);
// }

// parseData();

//! task 3

// let input = document.querySelector('input');
// let timeOut;
// input.addEventListener('input', (e) => {
//   clearTimeout(timeOut);
//   timeOut = setTimeout(async () => {
//     const resp = await fetch(
//       `https://dummyjson.com/products/search?q=${e.target.value}`
//     );
//     const data = await resp.json();

//     console.log(data);
//   }, 300);
// });
