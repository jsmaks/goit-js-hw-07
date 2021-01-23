
// const listsRefs = document.querySelectorAll('li.item > ul');
// const nameTitles = document.querySelectorAll('li.item > h2');
// console.log(nameTitles);
// console.log(listsRefs);

// listsRefs.forEach(ref => {
//     const arrayLists = ref.querySelectorAll('li');
//     console.log(arrayLists.length);
// });


const listsRef = document.querySelectorAll('li.item');
console.log(`В списке ${listsRef.length} категории.`);

const titlesRef = document.querySelectorAll('h2');
titlesRef.forEach(ref => {
    const siblingElement = ref.nextElementSibling;
    const allList = siblingElement.querySelectorAll('li');

    console.log(`Категория: ${ref.textContent}
    количество элементов: ${allList.length}`);

});