const sidebarTpl = document.createElement("template");

sidebarTpl.innerHTML = `
<style>
.test {
    all: unset;
    background: pink;
    color: white;
    text-align: center;
    position: absolute;
    left: 0;
    top: 0;
    height: 100vh;
    box-shadow: 5px 0px 10px gray;
    z-index: 99;
    padding: 10px;
    font-family: 'Manjari', sans-serif;
}
</style>
<link href="https://fonts.googleapis.com/css?family=Manjari&display=swap" rel="stylesheet">
<input type="checkbox" id="sidebarToggle">
<div class="test">
CSS projects<br/>by wendko
</div>
`;

customElements.define('sidebar-element',
    class extends HTMLElement {
        constructor() {
            super();
            this.attachShadow({ mode: "open" }).appendChild(sidebarTpl.content);
        }
    }
);