const myBuffer = new ArrayBuffer(16);
const myView = new DataView(myBuffer);
let len1 = myBuffer.byteLength;
let len2 = myView.byteLength;
let off = myView.byteOffset;

document.getElementById("coelho").innerHTML = "The length of buffer is : " + len1 + " and " + len2 + ", the offset of buffer is " + off;
