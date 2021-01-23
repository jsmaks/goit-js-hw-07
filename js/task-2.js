const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];


// const ulRef = document.querySelector('#ingredients');
// const listRef = ingredients.map(ing => {

//     const liRef = document.createElement('li');
//     liRef.textContent = ing;
//     ulRef.appendChild(liRef);
//     return ulRef;

// });
const createList = elem => {
    const liRef = document.createElement('li');
    liRef.textContent = elem;
    return liRef;
}
const listsEl = ingredients.map(ing => createList(ing));
const ulRef = document.querySelector('#ingredients');

ulRef.append(...listsEl);
