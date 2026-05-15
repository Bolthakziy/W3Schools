let text = "1234C56O789E12L34567H8O90";
const pattern = /[^0-9]/g;
let result = text.match(pattern);

document.getElementById("coelho").innerHTML = result;
