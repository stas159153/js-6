let a = [1, 7, 3, 4, 4, 4, 7, 8, 9, 10];
// if ( a[0] < a[1] ) {
//   console.log(a[1]);
// } else if (a[0] > a[1]) {
//   console.log( a[0] );
// }
for (let i = 0; i < 5; i++) {
  if (a[i] < 5) {
    console.log(a[i]);
  }
}

let b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < b.length; i++) {
  if (b[i] < 8 && b[i] > 5) {
    console.log(b[i]);
  }
}
let c = ["Stas","david"]
let username = prompt("enter your name")

if(username == username){
  c[2] = username
  console.log(c)
}
else{
  console.log(c)
}