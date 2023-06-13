import { galleryItems } from './gallery-items.js';
// Change code below this line
const listItems = document.querySelector(".gallery");

const listLi = galleryItems.map(el => 

    `<li class="gallery__item">
        <a class="gallery__link" href="${el.original}">
            <img
            class="gallery__image"
            src="${el.preview}"
            alt="${el.description}"
            />
        </a>
    </li>`);

listItems.innerHTML = listLi.join("");


console.log(galleryItems);

var lightbox = new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250 });

console.log(lightbox);