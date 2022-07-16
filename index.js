function toss() {
  const coin = document.getElementById("coin");
  coin.style.animation = "none";
  if (Math.random() <= 0.5) {
    console.log("Ha salido cara");

    setTimeout(() => {
      coin.style.animation = "flip-heads 3s forwards";
    }, 100);
  } else {
    console.log("Ha salido cruz");
    debugger;
    setTimeout(() => {
      coin.style.animation = "flip-tails 3s forwards";
    }, 100);
  }
}
