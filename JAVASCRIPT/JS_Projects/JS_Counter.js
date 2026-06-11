let count = 0;

function updateCount() {
  document.getElementById("coelho").innerHTML = count;
}

function increaseCount() {
  if (count > 99) {
    count = 99;
  } else {
    count++;
  }

  updateCount();
}

function decreaseCount() {
  if (count < 0 ) {
    count = 0;
  } else {
    count--;
  }

  updateCount();
}

function resetCount() {
  count = 0;
  updateCount();
}
