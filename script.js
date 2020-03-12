const draftedPens = !!window.location.href.match(/draft/g) ? [
    'sakura',
    'pokemon-badges',
    'async-defer-anim',
    'google',
    'malaysian-states',
    'mamak',
    'merdeka-2019',
    'programming-logos',
    'resizable-lantern',
    'sunflower',
] : [];

const completedPens = [
    'nihongo-ref',
    'nihongo-practise',
    'css-named-beach',
    'css-named-colors',
    'snake',
    'cny-lion-2020',
    'inktober-2019',
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

new Vue({
    el: '#app',
    data: {
        pens: [
            ...(completedPens.map(x => ({ name: x }))),
            ...(draftedPens.map(x => ({ name: x, draft: true }))),
        ]
    },
});
