let nav = document.getElementById('navigation');

console.log(nav);
console.log(nav.querySelectorAll('div'))

nav.addEventListener('click', (event) =>{
    nav.querySelectorAll('div').forEach(el => {
        el.classList.remove('active')
    });;
    event.target.classList.add('active');
});


let foto1 = document.getElementById('foto1');
let foto2 = document.getElementById('foto2');
let hidden_foto = document.getElementById('hidden_foto');

hidden_foto.addEventListener('click', () => {
    hidden_foto.classList.toggle('hidden_foto_opacity')
})

foto1.addEventListener('click', () => {
    foto1.classList.toggle('hidefoto')
})

foto2.addEventListener('click', () => {
    foto2.classList.toggle('hidefoto')
})

let small_blocks = document.getElementById('small_blocks');

small_blocks.addEventListener('click', (event) =>{
    small_blocks.querySelectorAll('div').forEach(el => {
        el.classList.remove('active_small_block');
        small_blocks.classList.remove('active_small_block');
    });;
    small_blocks.classList.remove('active_small_block');
    event.target.classList.add('active_small_block');
});

let portfolio_flex = document.getElementById('portfolio_flex');

portfolio_flex.addEventListener('click', (event) =>{
    portfolio_flex.querySelectorAll('img').forEach(el => {
        el.classList.remove('portfolio_active')
    });;
    event.target.classList.add('portfolio_active');
});

let img_array = [...portfolio_flex.querySelectorAll('div')]

let test = () => {
    portfolio_flex.innerHTML = `
    <div class="portfolio_flex_item" id='1'><img src="./assets/${getRandomInt(1, 12)}.jpg"></div>
    <div class="portfolio_flex_item" id='2'><img src="./assets/${getRandomInt(1, 12)}.jpg"></div>
    <div class="portfolio_flex_item" id='3'><img src="./assets/${getRandomInt(1, 12)}.jpg"></div>
    <div class="portfolio_flex_item" id='4'><img src="./assets/${getRandomInt(1, 12)}.jpg"></div>
    <div class="portfolio_flex_item" id='5'><img src="./assets/${getRandomInt(1, 12)}.jpg"></div>
    <div class="portfolio_flex_item" id='6'><img src="./assets/${getRandomInt(1, 12)}.jpg"></div>
    <div class="portfolio_flex_item" id='7'><img src="./assets/${getRandomInt(1, 12)}.jpg"></div>
    <div class="portfolio_flex_item" id='8'><img src="./assets/${getRandomInt(1, 12)}.jpg"></div>
    <div class="portfolio_flex_item" id='9'><img src="./assets/${getRandomInt(1, 12)}.jpg"></div>
    <div class="portfolio_flex_item" id='10'><img src="./assets/${getRandomInt(1, 12)}.jpg"></div>
    <div class="portfolio_flex_item" id='11'><img src="./assets/${getRandomInt(1, 12)}.jpg"></div>
    <div class="portfolio_flex_item" id='12'><img src="./assets/${getRandomInt(1, 12)}.jpg"></div>
   `
}

let artwork = document.getElementById('artwork');
let all= document.getElementById('all');
let web= document.getElementById('web');
let design = document.getElementById('design');

all.addEventListener('click', () => {
    test();
})
artwork.addEventListener('click', () => {
    test();
})
web.addEventListener('click', () => {
    test();
})
design.addEventListener('click', () => {
    test();
})

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

let slide1 = document.getElementById('slide1');
let slide2 = document.getElementById('slide2');
let leftarrow = document.getElementById('leftarrow');
let rightarrow = document.getElementById('rightarrow');
let items = document.querySelectorAll('.item');
let currentItem = 0;
let isEnabled = true;
let main = document.getElementById('main')

function changeCurrentItem(n) {
    currentItem = (n + items.length) % items.length;
}

function hideItem(direction) {
    isEnabled = false;
	items[currentItem].classList.add(direction);
	items[currentItem].addEventListener('animationend', function() {
		this.classList.remove('slide_active', direction);
	});
}

function showItem(direction) {
	items[currentItem].classList.add('next', direction);
	items[currentItem].addEventListener('animationend', function() {
		this.classList.remove('next', direction);
        this.classList.add('slide_active');
        isEnabled = true;
	});
}

function nextItem(n) {
	hideItem('to-left');
	changeCurrentItem(n + 1);
	showItem('from-right');
}

function previousItem(n) {
	hideItem('to-right');
	changeCurrentItem(n - 1);
	showItem('from-left');
}

leftarrow.addEventListener('click', function() {
        previousItem(currentItem);
        main.classList.toggle('new_color');
});

rightarrow.addEventListener('click', function() {
        nextItem(currentItem);
        main.classList.toggle('new_color');
});


let submit_button = document.getElementById('submit');
let closed_button = document.getElementById('closed');
let first = document.getElementById('firsttext');
let second = document.getElementById('email');
let secondtext = document.getElementById('secondtext');
let textarea = document.getElementById('textarea');
let result = document.getElementById('result');
let result2 = document.getElementById('result2');

submit_button.addEventListener('click', () =>{
    event.preventDefault();
    if(secondtext.value == 'Singolo'){
        result.innerHTML = `Тема: Singolo`
    }
    if(secondtext.value.length == 0){
        result.innerHTML = `Без темы`
    }
    if(textarea.value == 'Portfolio project'){
        result2.innerHTML = `Описание: Portfolio project`
    }
    if(textarea.value.length == 0){
        result2.innerHTML = `Без описания`
    }
    else{
        result2.innerHTML = `Описание :${textarea.value.toString()}`;
        result.innerHTML = `Тема :${secondtext.value.toString()}`;
    }
    document.getElementById('message_block').classList.remove('message_hidden');

});

closed_button.addEventListener('click', () =>{
    document.getElementById('message_block').classList.add('message_hidden');
    first.value = '';
    second.value = '';
    secondtext.value = '';
    textarea.value = '';
})

let home = document.getElementById('home_nav');
let services = document.getElementById('services_nav');
let portfolio = document.getElementById('portfolio_nav');
let about = document.getElementById('about_nav');
let contact = document.getElementById('contact_nav');

home.addEventListener('click', () => {
    document.getElementById('top').scrollIntoView({block:"start", behavior: "smooth"});
})
services.addEventListener('click', () => {
    document.getElementById('services').scrollIntoView({block:"center", behavior: "smooth"});
})
portfolio.addEventListener('click', () => {
    document.getElementById('portfolio1').scrollIntoView({block:"center", behavior: "smooth"});
})
about.addEventListener('click', () => {
    document.getElementById('about').scrollIntoView({block:"center", behavior: "smooth"});
})
contact.addEventListener('click', () => {
    document.getElementById('contact').scrollIntoView({block:"center", behavior: "smooth"});
})

