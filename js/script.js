const allQuotes = [];

// Функция для получения случайного целого числа от min до max
const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
}

// Функция для получения случайной цитаты
const getQuote = () => {
  const randomIndex = getRandomInt(0, allQuotes.length);
  const quote = allQuotes[randomIndex];

  // Обновляем текст цитаты и автора на странице
  document.getElementById('text').innerHTML = quote.text;
  document.getElementById('author').innerHTML = `- ${quote.author}`;
}

// Функция для получения всех цитат из JSON-файла
const getAllQuotes = () => {
  fetch('js/quotes.json')
    .then(response => response.json())
    .then(data => {
      allQuotes.push(...data.quotes);
      getQuote();
    })
    .catch(error => console.error(error));
}

// Загружаем все цитаты при загрузке страницы
window.onload = getAllQuotes;

// Обновляем цитату при нажатии на кнопку


document.addEventListener("DOMContentLoaded", function() {
  document.getElementById('new-quote').addEventListener('click', getQuote);
});
