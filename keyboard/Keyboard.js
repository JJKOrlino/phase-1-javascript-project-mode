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
        const letter = document.createDocumentLetter();
        const keyLayout = [
            "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "<-",
            "q", "w", "e", "r", "t", "y", "u", "i", "o", "p",
            "capsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", "ENTER",
            "done", "z", "x", "c", "v", "b", "n", "m", ",", ".", "?",
            "spacebar"
        ];

        const createIcon = (iconName) => {
            return `<i class="letter-icons">${iconName}</i>`;
        }

        keyLayout.forEach(key => {
            const keyElement = document.createElement("button");
            const lineBreak = ["<-", "p", "ENTER", "?"].indexOf(key) !== -1;

            keyElement.setAttribute("type", "button");
            keyElement.classList.add("keyboardKey");
        });

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