document.querySelectorAll('input').forEach(el => {
    el.addEventListener('change', (e) => {
        const { id, value, checked, name } = e.target;
        switch (name) {
            case 'first-last-child':
            case 'nth-child-even-odd':
            case 'first-last-of-type':
            case 'nth-of-type-even-odd':
                modifyClassList(`#${name}-container`, `highlight-${value}`, checked);
                break;
            case 'nth-child':
            case 'nth-of-type':
            case 'nth-last-child':
            case 'nth-last-of-type':
                [1, 2, 3, 4, 5].filter(x => x !== +value).forEach(x => {
                    modifyClassList(`#${name}-container`, `highlight-${id}-${x}`, false);
                });
                modifyClassList(`#${name}-container`, `highlight-${id}-${value}`, true);
                break;
            case 'only-child-of-type':
                modifyClassList(`#only-child-container-1`, `highlight-${value}`, checked);
                modifyClassList(`#only-child-container-2`, `highlight-${value}`, checked);
                modifyClassList(`#only-child-container-3`, `highlight-${value}`, checked);
            default:
                break;
        }
    });
});

modifyClassList = (containerId, className, shouldAdd) => {
    if (shouldAdd) {
        document.querySelector(containerId).classList.add(className);
    } else {
        document.querySelector(containerId).classList.remove(className);
    }
}

handleEvenOddChild = (value, isChecked) => {
    if (isChecked) {
        document.querySelector('#first-last-child-container').classList.add(`highlight-${value}`);
    } else {
        document.querySelector('#first-last-child-container').classList.remove(`highlight-${value}`);
    }
}