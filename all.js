var btnNews = document.querySelector('.btn.btnNews');
var btnFilpBack = document.querySelector('.btn.btnFilpBack');
var cardMode = document.querySelector('.card-mode');
btnNews.addEventListener('click', function(e) {
  console.log(e);
  cardMode.classList.add("flip");
}, false);
btnFilpBack.addEventListener('click', function(e) {
  console.log(e);
  cardMode.classList.remove("flip");
}, false);