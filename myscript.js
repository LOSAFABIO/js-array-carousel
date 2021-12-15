const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

let contatore = 0;

const immagineDx = document.querySelector(`.immagini-destra`);

for (let i = 0; i < items.length; i++){
    immagineDx.innerHTML += `<div class="immagine-dx">
    <img src="${items[i]}">
    </div>`;
}


const immaginiSx = document.querySelector(`.immagini-sinistra`);

for (let i = 0; i < items.length; i++){
    immaginiSx.innerHTML += `<div class="immagine-sx img-sx-${i}">
        <img src="${items[i]}">
        <div class="img-text">
            <h1>${title[i]}</h1>
            <p>${text[i]}</p>
        </div>
    </div>`;
}


const next = document.querySelector(`.next`);

next.addEventListener(`click`, function(){
    
    const previousImg = document.querySelector(`.img-sx-` + contatore);
    previousImg.classList.remove(`active`);


    if(contatore == (items.length - 1)){
        contatore = 0
    }else {
    contatore++
    }

    const currentImg = document.querySelector(`.img-sx-` + contatore);
    currentImg.classList.add(`active`);

    console.log(contatore);
    
})


const prev = document.querySelector(`.prev`);

prev.addEventListener(`click`, function(){

    const previousImg = document.querySelector(`.img-sx-` + contatore);
    previousImg.classList.remove(`active`);

    if(contatore == 0){
        contatore = (items.length - 1)
    }else {
    contatore--
    }

    const currentImg = document.querySelector(`.img-sx-` + contatore);
    currentImg.classList.add(`active`);


    console.log(contatore);
    
})

const firstImage = document.querySelector(`.img-sx-0`);
firstImage.classList.add(`active`);


