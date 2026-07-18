const amigos = {
	firstFriend : "Alexandre",
	secondFriend : "Ana",
	thirdFriend : "Daniel",
	forthFriend : "Laura",
	fifthFriend : "Fernando"
};

let texto = "";

for (let x in amigos) {
	texto += amigos[x] + " ";
}

document.getElementById("coelho").innerHTML = texto;
