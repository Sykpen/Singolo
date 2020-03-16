let nav = document.getElementById('navigation');

nav.addEventListener('click', (event) =>{
    nav.querySelectorAll('div').forEach(el => {
        el.classList.remove('active')
    });;
    event.target.classList.add('active');
});

