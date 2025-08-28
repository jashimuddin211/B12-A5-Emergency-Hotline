// document.querySelectorAll("card-heart").addEventListener("click", function () {
//   const heartCount = document.getElementById("heart-count");
//   let nowCount = parseInt(heartCount.textContent) || 0;
//   nowCount++;
//   heartCount.textContent = nowCount;
//   console.log(nowCount);
// });

let totalCount = 0;
const cardHeart = document.querySelectorAll(".card-heart");
const navHeart = document.getElementById("heart-count");
cardHeart.forEach((button) => {
  button.addEventListener("click", () => {
    totalCount++;
    navHeart.textContent = totalCount;
  });
});
