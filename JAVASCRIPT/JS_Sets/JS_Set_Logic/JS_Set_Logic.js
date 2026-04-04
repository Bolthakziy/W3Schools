const A = new Set([2, 4, 6, 8, 10]);
const B = new Set([3, 6, 9, 12, 15]);
const C = A.union(B);

document.getElementById("coelho1").innerHTML = A + "<br>";
document.getElementById("coelho2").innerHTML = B + "<br>";
document.getElementById("coelho3").innerHTML = C + "<br>";
