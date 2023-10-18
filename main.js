(function() {
    let tmp = document.createElement('template');
    tmp.innerHTML = 
    `<button type = "button" id = "newBtn"> Test Button</button>`;


    class TestFunction extends HTMLElements{
        constructor(){
            super();
            this.init();
        }

        init(){
            let shadowRoot = this.attachShadow({mode: open});
            shadowRoot.appendChild(tmp.content.cloneNode(true));
            this.addEventListner("click", event => {
                var event = new Event("onClick");
                this.fireChanged();
                this.dispatchEvent(event);
            }); 
        }

        fireChanged(){
            console.log("Onclick Triggered");
        }
    }


    customElements.define('test-button', TestFunction);




})();



// https://kandpalpranav.github.io/CustomWidget/Webcomponent.js