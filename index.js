const togglebtn = document.querySelector('.toggle-btn')
const togglebtnIcon = document.querySelector('.toggle-btn i')
const DownMenu = document.querySelector('.down_menu')

togglebtn.onclick = function(){
    DownMenu.classList.toggle('open')
    const isOpen = DownMenu.classList.contains('open')

togglebtnIcon.classList = isOpen
? 'fa-solid fa-xmark'
: 'fa-solid fa-bars'}