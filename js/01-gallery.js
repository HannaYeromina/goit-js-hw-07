import { galleryItems } from './gallery-items.js';
// Change code below this line
const listItems = document.querySelector(".gallery");

const listLi = galleryItems.map(el => 

    `<li class="gallery__item">
        <a class="gallery__link" href="${el.original}">
            <img
            class="gallery__image"
            src="${el.preview}"
            data-source="${el.original}"
            alt="${el.description}"
            />
        </a>
    </li>`);

listItems.innerHTML = listLi.join("");

listItems.addEventListener("click", (event) => {
    event.preventDefault();
    
    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`)

    instance.show();
}
)






