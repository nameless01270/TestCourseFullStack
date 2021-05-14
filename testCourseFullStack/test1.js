
let a = prompt("so phan tu mang a: ");
let b = prompt("So phan tu mang b: ");
let A = [];
let B = [];
let C = [];

//Nhap mang A
for (let i = 0; i < a; i++) {
    A[i] = prompt("phan tu thu " + (i + 1) + " cua A la");  
}
for (let i = 0; i < a; i++) {
    if (Number(A[i]) % 1 === 0) {
        A[i] = Number(A[i]);
    }
}
console.log(A);

//Nhap mang B
for (let i = 0; i < b; i++) {
    B[i] = prompt("phan tu thu " + (i + 1) + " cua B la");
}
for (let i = 0; i < b; i++) {
    if (Number(B[i]) % 1 === 0) {
        B[i] = Number(B[i]);
    }
}
console.log(B);

//Gop 2 mang A va B thanh 1 mang C
let a0 = Number(a);
let b0 = Number(b);
let c = a0 + b0;
for (let i = 0; i < c; i++) {
    if (i < a) {
        C[i] = A[i];
    }
    else {
        C[i] = B[i - a];
    }
}

//Xoa cac phan tu trung nhau
function unique(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i]) ) {
        newArr.push(arr[i]);
      }
    }
    return newArr;
  }
console.log(unique(C));
