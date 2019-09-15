const bgDark = '#140d1c';
const bgLight = '#fdffdf';

document.getElementById('checkbox').addEventListener('click',
    e => {
        document.documentElement.style.setProperty('--c-bg', e.target.checked ? bgLight : bgDark);
    });