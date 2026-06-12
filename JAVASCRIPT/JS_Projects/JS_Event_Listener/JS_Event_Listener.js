document.addEventListener("DOMContentLoaded", function() {
  let count = 1;

  const btnMultiple = document.getElementById("btnMultiple");
  const btnDivider = document.getElementById("btnDivider");
  const btnReset = document.getElementById("btnReset");

  btnMultiple.addEventListener("click", multiplyCount);
  btnDivider.addEventListener("click", divideCount);
  btnReset.addEventListener("click", resetCount);

  function updateCount() {
    document.getElementById("coelho").innerHTML = count;
  }

  function multiplyCount() {
    if (count >= 1024) {
      count = 1024;
    } else {
      count *= 2;
    }

    updateCount();
  }

  function divideCount() {
    if (count <= 1) {
      count = 1;
    } else {
      count /= 2;
    }

    updateCount();
  }

  function resetCount() {
    count = 1;
    updateCount();
  }
});
