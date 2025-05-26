import "./styles.css";
import displayHomePage from "./home";
console.log("works");
displayHomePage();

const home_button = document.getElementById('home');
const menu_button = document.getElementById('menu');
const about_button = document.getElementById('about');
const contact_button = document.getElementById('contact');
const content = document.getElementById('content');

function clear() {
    
    while (content.firstChild) {
        content.removeChild(content.lastChild)
    }
    home_button.className = '';
    menu_button.className = '';
    about_button.className = '';
    contact_button.className = '';

}

home_button.addEventListener('click', ()=> {
    clear()
    home_button.classList.add('selected');
    displayHomePage();
})

menu_button.addEventListener('click', ()=> {
    clear()
    menu_button.classList.add('selected')
})

about_button.addEventListener('click', ()=> {
    clear()
    about_button.classList.add('selected')
})

contact_button.addEventListener('click', ()=> {
    clear()
    contact_button.classList.add('selected')
})


