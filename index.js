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

leftarrow.addEventListener('click', () => {
    slide1.classList.toggle('slide1hide')
    slide2.classList.toggle('slide2hide')
});

rightarrow.addEventListener('click', () => {
    slide1.classList.toggle('slide1hide')
    slide2.classList.toggle('slide2hide')
});

let submit_button = document.getElementById('submit');
let closed_button = document.getElementById('closed');
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
    secondtext.value = '';
    textarea.value = '';
})