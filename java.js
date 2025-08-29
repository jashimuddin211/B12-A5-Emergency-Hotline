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
const callHistory = document.getElementById("call-history");
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

      const now = new Date();
      const timeString = now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });

      const newHistoryItem = document.createElement("div");
      newHistoryItem.classList.add(
        "flex",
        "justify-between",
        "items-center",
        "py-2",
        "mb-3",
        "bg-[#fafafa]",
        "p-4",
        "rounded-lg"
      );

      const callLabel = paragraph.textContent;
      const callNumber = heading.textContent;

      newHistoryItem.innerHTML = `
          <div>
          <div class="text-sm text-gray-500">${callNumber}</div>
            <div class="font-semibold text-gray-800">${callLabel}</div>
            
          </div>
          <div class="text-sm text-gray-500">${timeString}</div>
        `;

      callHistory.prepend(newHistoryItem);
    } else {
      alert(["Insufficient coin."]);
    }
  });
});

// clear history
document.getElementById("clear-btn").addEventListener("click", function () {
  callHistory.innerText = "";
});
// all copy buttons
const copyButtons = document.querySelectorAll(".primary-btn");

copyButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const navCopy = document.getElementById("copy-head");
    const card = button.closest(".card");

    const h1Text = card.querySelector(".card-h").textContent;
    navigator.clipboard.writeText(h1Text).then(() => {
      alert(`Number copied: ${h1Text}`);
      totalCount++;
      navCopy.textContent = totalCount;
    });
  });
});
