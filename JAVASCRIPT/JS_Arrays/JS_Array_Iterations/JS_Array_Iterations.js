const arr = [1, 2, 3, 4, 5, 6, 7];
const newArr = arr.flatMap(x => [x, x * 3]);

document.getElementById("coelho").innerHTML = newArr;
