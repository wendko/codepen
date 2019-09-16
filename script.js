const draftedPens = [
    'pokemon-badges',
    'async-defer-anim',
    'google',
    'malaysian-states',
    'mamak',
    'merdeka-2019',
    'programming-logos',
    'resizable-lantern',
    'sunflower',
];

const completedPens = [
    'drink-more-water',
    'durian-radio',
    'toggle-day-night',
    'durian-react',
    'durian',
    'tapir',
    'awkward-pikachu',
    'background-gradient',
    'avatar',
    '100-dots',
    'async-defer',
    'KLCC',
    'dancing-macaron',
    'box-shadow-sketch',
    'css-masonry',
    'dad-joke',
    'dev-doctor',
    'emoji-selector',
    'fruit-veggies-spectrum',
    'gameboy-color',
    'gravity-planets',
    'kl-react-centered',
    'kl-react-right',
    'slack',
];

Vue.filter('dekebab', (value) => {
    if (!value) return ''
    return value
        .split('-')
        .map(x => `${x.charAt(0).toUpperCase()}${x.slice(1)}`)
        .join(' ');
});

Vue.filter('link', (name) => {
    const currentUrl = window.location.href;
    const newUrl = currentUrl.match('/index.html') ?
        currentUrl.replace('/index.html', `/pens/${name}/index.html`)
        : `${currentUrl}/pens/${name}`;
    return newUrl;
})

Vue.component('pen-list', {
    props: ['pens'],
    template: `<div id="penList" class="pen-list">
        <a class="pen-item" v-for="pen in pens" v-bind:href="pen.name | link">
            <div>{{ pen.name | dekebab }}</div>
            <span v-if="pen.draft" class="label-draft">draft</span>
        </a>
    </div>`
});

Vue.component('footer-section', {
    template: `<footer class="footer-text">
    Built with
    <a href="https://vuejs.org" target="_blank">Vue.js</a>, 
    <a href="https://sass-lang.com" target="_blank">Sass</a>
    & 
    <a href="https://pugjs.org" target="_blank">Pug</a>
    <br>
    <a href="https://wendko.com">@wendko</a>
    | <a href="https://twitter.com/wendko" target="_blank">twitter</a>
    | <a href="https://github.com/wendko" target="_blank">github</a>
</footer>`
});

new Vue({
    el: '#app',
    data: {
        pens: [
            ...(completedPens.map(x => ({ name: x }))),
            ...(draftedPens.map(x => ({ name: x, draft: true }))),
        ]
    },
});
