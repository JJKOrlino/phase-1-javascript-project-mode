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
        Keyboard.elements.keysContainer = document.createElement("div");

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

        const createIconHTML = (icon_label) => {
            return `<i class="material-icons">${icon_label}</i>`;
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
                
                case "enter":
                    keyElement.classList.add("keyboard__key--wide");
                    keyElement.innerHTML = createIconHTML("keyboard_return");

                    keyElement.addEventListener("click", () => {
                        Keyboard.properties.value += "\n";
                        Keyboard._triggerEvent("oninput");
                    });

                    break;

                case "space":
                    keyElement.classList.add("keyboard__key--extra-wide");
                    keyElement.innerHTML = createIconHTML("space_bar");

                    keyElement.addEventListener("click", () => {
                        Keyboard.properties.value += " ";
                        Keyboard._triggerEvent("oninput");
                    });

                    break;

                case "done":
                    keyElement.classList.add("keyboard__key--wide", "keyboard__key--dark");
                    keyElement.innerHTML = createIconHTML("check_circle");

                    keyElement.addEventListener("click", () => {
                        Keyboard.close();
                        Keyboard._triggerEvent("onclose");
                    });

                    break;

                default:
                    keyElement.textContent = key.toLowerCase();
    
                    keyElement.addEventListener("click", () => {
                        Keyboard.properties.value += Keyboard.properties.capsLock ? key.toUpperCase() : key.toLowerCase();
                        Keyboard._triggerEvent("oninput");
                    });
    
                    break;
            }
    
            fragment.appendChild(keyElement);
    
            if (insertLineBreak) {
                fragment.appendChild(document.createElement("br"));
            }
        });

        return fragment;
    },

    _triggerEvent(handlerName) {
        if (typeof Keyboard.eventHandlers[handlerName] == "function") {
            Keyboard.eventHandlers[handlerName](Keyboard.properties.value);
        }
    },

    _toggleCapsLock() {
        Keyboard.properties.capsLock = !Keyboard.properties.capsLock;

        for (const key of Keyboard.elements.keys) {
            if (key.childElementCount === 0) {
                key.textContent = Keyboard.properties.capsLock ? key.textContent.toUpperCase() : key.textContent.toLowerCase();
            }
        }
    },

    open(initialValue, oninput, onclose) {
        Keyboard.properties.value = initialValue || "";
        Keyboard.eventHandlers.oninput = oninput;
        Keyboard.eventHandlers.onclose = onclose;
        Keyboard.elements.main.classList.remove("keyboard--hidden");
    },

    close() {
        Keyboard.properties.value = "";
        Keyboard.eventHandlers.oninput = oninput;
        Keyboard.eventHandlers.onclose = onclose;
        Keyboard.elements.main.classList.add("keyboard--hidden");
    }
};

window.addEventListener("DOMContentLoaded", function () {
    Keyboard.init();
});


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