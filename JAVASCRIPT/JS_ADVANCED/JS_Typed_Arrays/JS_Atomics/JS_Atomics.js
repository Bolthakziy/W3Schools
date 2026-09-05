if (Window.crossOriginIsolated) {
	buffer = new SharedArrayBuffer(4 * Int32Array.BYTES_PER_ELEMENT);
} else {
	buffer = new ArrayBuffer(4 * INT32Array.BYTES_PER_ELEMENT);
}

const sharedArray = new Int32Array(buffer);

sharedArray[0] = 32;
sharedArray[1] = 64;
sharedArray[2] = 128;
sharedArray[3] = 256;

document.getElementById("coelho").innerHTML = sharedArray;
