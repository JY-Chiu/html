/* ===== show menu =====*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)
    toggle.addEventListener('click', () =>{
        nav.classList.toggle('show-menu')
        toggle.classList.toggle('show-icon')
    })
}
showMenu('nav-toggle','nav-menu')

const navLinks = document.querySelectorAll('.nav_link, .dropdown_link, .dropdown_sublink');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        const nav = document.getElementById('nav-menu');
        const toggle = document.getElementById('nav-toggle');
        nav.classList.remove('show-menu');
        toggle.classList.remove('show-icon');
    });
});