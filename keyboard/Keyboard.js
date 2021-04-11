const Keyboard = {
    elements: {
        main: null,
        keysContainer: null,
        keys: []
    },

    eventHandlers: {
        oninput: null,
        onclose: null
    },

    properties: {
        value: "",
        capsLock: false
    },

    init() {
        Keyboard.elements.main = document.createElement("div");
        .elements.keysContainer = document.createElement("div");
        Keyboard.elements.main.classList.add("keyboard", "keyboard--hidden");
        Keyboard.elements.keysContainer.classList.add("keyboard__keys");
        Keyboard.elements.keysContainer.appendChild(Keyboard._createKeys());
        Keyboard.elements.keys = Keyboard.elements.keysContainer.querySelectorAll(".keyboard__key");
        Keyboard.elements.main.appendChild(Keyboard.elements.keysContainer);
        document.body.appendChild(Keyboard.elements.main);

        document.querySelectorAll(".use-keyboard-input").forEach(element => {
            element.addEventListener("focus", () => {
                Keyboard.open(element.value, currentValue => {
                    element.value = currentValue;
                });
            });
        });
    },

    _createKeys() {
        const fragment = document.createDocumentFragment();
        const keyLayout = [
            "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "backspace",
            "q", "w", "e", "r", "t", "y", "u", "i", "o", "p",
            "caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", "enter",
            "done", "z", "x", "c", "v", "b", "n", "m", ",", ".", "?",
            "space"
        ];

        const createIconHTML = (icon_name) => {
            return `<i class="material-icons">${icon_name}</i>`;
        };

        keyLayout.forEach(key => {
            const keyElement = document.createElement("button");
            const insertLineBreak = ["backspace", "p", "enter", "?"].indexOf(key) !== -1;

            keyElement.setAttribute("type", "button");
            keyElement.classList.add("keyboard__key");

            switch (key) {
                case "backspace":
                    keyElement.classList.add("keyboard__key--wide");
                    keyElement.innerHTML = createIconHTML("backspace");

                    keyElement.addEventListener("click", () => {
                        Keyboard.properties.value = Keyboard.properties.value.substring(0, Keyboard.properties.value.length - 1);
                        Keyboard._triggerEvent("oninput");
                    });

                    break;

                case "caps":
                    keyElement.classList.add("keyboard__key--wide", "keyboard__key--activatable");
                    keyElement.innerHTML = createIconHTML("keyboard_capslock");

                    keyElement.addEventListener("click", () => {
                        Keyboard._toggleCapsLock();
                        keyElement.classList.toggle("keyboard__key--active", Keyboard.properties.capsLock);
                    });

                    break;

//     triggerEvent(handler) {
//         console.log("EventName" + handler name);
//     },

//     open(values) {

//     },

//     close() {

//     }
// };

// addEventListener("DOMContentLoaded") => {
//     Keyboard.init();
// };