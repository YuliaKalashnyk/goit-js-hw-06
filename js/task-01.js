const categories = document.querySelectorAll('.item');
console.dir(`Number of categories: ${categories.length}`);

const itemEl = document.querySelectorAll('h2');
itemEl.forEach (function (number) {
    console.log(`Category: ${number.textContent}`);
    console.log(`Elements: ${number.nextElementSibling.children.length}`)

});
