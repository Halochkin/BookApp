//!! depends on:
//https://cdn.jsdelivr.net/npm/marked/marked.min.js
export class MarkDown extends HTMLElement {

  constructor(){
    super();
    this.attachShadow({mode: "open"});
  }

  async connectedCallback(){
    let src = this.getAttribute("src");
    if (!src)
      this.shadowRoot.innerHTML = "no link in mark-down element";
    // const book = await fetch("https://github.com/orstavik/JoiComponents/tree/master/book")
    // debugger
    const conn = await fetch(src);
    const md = await conn.text();
    const html = marked(md);
    this.shadowRoot.innerHTML = html;
  }
}
customElements.define("mark-down", MarkDown);
