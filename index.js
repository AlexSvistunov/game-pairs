const cards = document.querySelectorAll(".card");
const cardList = document.querySelector(".cards");
let currentOpenedIndexes = [];
let allCards = [];

cards.forEach((card, index) => {
  console.log(card);
  allCards.push(card.dataset.index);
  card.addEventListener("click", () => {
    card.classList.add("card--opened");
    card.textContent = card.dataset.index;

    currentOpenedIndexes.push(index);
    // console.log(currentOpenedIndexes);
    // console.log(allCards);

    if (currentOpenedIndexes.length === 2) {
      if (
        allCards[currentOpenedIndexes[0]] === allCards[currentOpenedIndexes[1]]
      ) {
        const allElements = document.querySelectorAll(".card.card--opened");
        console.log(allElements);
        allElements.forEach((element) => {
          element.classList.remove('card--opened')
          element.classList.add("card--success")

        }
          
        );
        currentOpenedIndexes.splice(0, currentOpenedIndexes.length);
      }

      setTimeout(() => {
        if (
          allCards[currentOpenedIndexes[0]] !==
          allCards[currentOpenedIndexes[1]]
        ) {
          const allElements = document.querySelectorAll(".card.card--opened");
          allElements.forEach((el) => {
            el.classList.remove("card--opened");
            el.textContent = "Скрыто";
            currentOpenedIndexes.splice(0, currentOpenedIndexes.length);
          });
        }
      }, 300);
    }

    const ifAll = Array.from(cards).every(el => el.classList.contains('card--success'))
    if(ifAll) {
      setTimeout(() => {
        alert('THE GAME HAS JUST FINISHED')
        location.reload()
      }, 500)
    }
   
  });
});
