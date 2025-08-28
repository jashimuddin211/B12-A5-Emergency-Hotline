let totalCount = 0;
const cardHeart = document.querySelectorAll(".card-heart");
const navHeart = document.getElementById("heart-count");
cardHeart.forEach((button) => {
  button.addEventListener("click", () => {
    totalCount++;
    navHeart.textContent = totalCount;
  });
});

// call section

const callBtn = document.querySelectorAll(".call-btn");
callBtn.forEach((button) => {
  button.addEventListener("click", () => {
    const parentCard = button.closest(".card");
    const paragraph = parentCard.querySelector(".card-p");

    const heading = parentCard.querySelector(".card-h");
    const mainAlert =
      "Calling" + " " + paragraph.textContent + " " + heading.textContent;

    const deductionCoin = 20;
    const navConin = document.getElementById("nav-coin");

    let nowCoin = parseInt(navConin.textContent);
    if (nowCoin >= deductionCoin) {
      nowCoin = nowCoin - deductionCoin;
      navConin.textContent = nowCoin;

      alert(mainAlert);
    } else {
      alert("Insufficient coin.");
    }
  });
});
