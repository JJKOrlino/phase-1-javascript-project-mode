const Keyboard = {
    elements: {
        main: null,
        keysContainer: null,
        key: []
    },

    eventHandlers: {
        input: null,
        close: null
    },

    properties: {
        value: "",
        capsLock: false
    },

    init() {
        //elements
        this.elements.main = document.createElement("div");
        this.elements.keysContainer = document.createElement("div");
        //
        this.elements.main.classList.add("keyboard", "keyboard-hidden");
        this.elements.keysContainer.classList.add("keyboard", "keyboard-hidden");

        this.elements.main.appendChild(this.elements.main);
        this.elements.main.appendChild(this.elements.keysContainer);

    },

    createKeys() {

    },

    triggerEvent(handler) {
        console.log("EventName" + handler name);
    },

    open(values) {

    },

    close() {

    }
};

addEventListener("DOMContentLoaded") => {
    Keyboard.init();
};