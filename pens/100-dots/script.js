function transition(dotList) {
    dotList.forEach((dot, index, array) => {
        setTimeout(() => {
            dot.style.opacity = 0;
        }, 10 * index);

        setTimeout(() => {
            dot.style.opacity = 1;
        }, (20 * array.length) + (10 * index));
    });
}

['heart', 'smiley'].forEach(state => {
    const element = document.getElementById(state);

    element.addEventListener('mouseenter', (event) => {
        const instructionsEl = document.getElementById('instructions');
        instructionsEl.style.opacity = 1;
        setTimeout(() => { instructionsEl.style.opacity = 0 }, 2000);
    });

    element.addEventListener('click', (event) => {
        const stateClass = `state-${state}`;
        const dotsEl = document.getElementById('dots');
        const dotList = Array.from(document.getElementsByClassName('dot'));

        transition(dotList);
        setTimeout(() => dotsEl.classList.add(stateClass), 1200);
        setTimeout(() => transition(dotList), 5000);
        setTimeout(() => dotsEl.classList.remove(stateClass), 6200);
    });

});