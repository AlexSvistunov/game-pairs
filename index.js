const cards = document.querySelectorAll(".card");
const cardList = document.querySelector(".cards");
let currentOpenedIndexes = [];
let allCards = [];

const numbers = {
  1: 2,
  2: 2,
  3: 2,
}


const field = [
  {}
]

cards.forEach((card, index) => {

  allCards.push(card.dataset.index);
  card.addEventListener("click", () => {
    card.classList.add("card--opened");
    card.textContent = card.dataset.index;

    currentOpenedIndexes.push(index);

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


// можно с картинками, а не с числами

// Генерация случайного расположения карточек на игровом поле.
// Логику открытия и закрытия карточек при клике.
// Проверку совпадения открытых карточек.
// Отображение времени прохождения игры.
// Отображение количества попыток (пар) игрока.
// Возможность перезапуска игры.
// Добавление звуковых эффектов при открытии и совпадении карточек.
// Создание уровней сложности (например, увеличение количества карточек).
// Добавление анимаций при открытии и закрытии карточек.
// Реализация системы рейтинга для игроков.