const dropdown = document.querySelector('.dropdown');
const menu = document.querySelector('.dropdown-menu') ;
dropdown.addEventListener('mouseover',function () {
    menu.style.display = 'inline-block';
})
menu.addEventListener('mouseleave',function () {
    menu.style.display = 'none';
})
