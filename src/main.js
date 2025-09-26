
const cards  = document.querySelectorAll('.card'); //выбираем все элементы с классом card на странице( без All 1 элемент)
for (let card of cards) {
    card.addEventListener("click", ()=>{
    card.classList.toggle("card-show");
});
}
