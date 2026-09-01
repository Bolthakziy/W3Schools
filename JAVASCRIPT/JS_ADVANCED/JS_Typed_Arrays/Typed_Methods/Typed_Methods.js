const myArr = Int16Array.from([32, 54, 100, 568, 95, 76, 914]);

document.getElementById("coelho").innerHTML = myArr.some((x) => x < 30);
