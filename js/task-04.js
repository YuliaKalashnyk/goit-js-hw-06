const counter = {
    counterValue: 0,
    increment () {
        this.counterValue += 1;
    },
    decrement () {
        this.counterValue -=1;
    }
}

const displayCounter = document.querySelector('#value');
const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');


incrementBtn.addEventListener('click', function () {
    counter.increment();
    displayCounter.textContent = counter.counterValue;
})

decrementBtn.addEventListener('click', function () {
    counter.decrement();
    displayCounter.textContent = counter.counterValue;
})