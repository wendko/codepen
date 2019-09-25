function startDrag() {
    console.log('startDrag');
    // document.getElementById("test").style.opacity = 0;
}

function endDrag() {
    console.log('endDrag');
}

[
    'template-test',
    'template-test1'
].forEach(x => {
    customElements.define(
        x,
        class extends HTMLElement {
            constructor() {
                super();
                let template = document.getElementById(x);
                let templateContent = template.content;
                const shadowRoot = this
                    .attachShadow({ mode: 'open' })
                    .appendChild(templateContent.cloneNode(true));
            }
        }
    );
})