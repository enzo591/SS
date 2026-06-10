window.addEventListener("keydown", function(e) {
    let keyMap = {
        'w': 'ArrowUp',
        'a': 'ArrowLeft',
        's': 'ArrowDown',
        'd': 'ArrowRight'
    };
    if (keyMap[e.key.toLowerCase()]) {
        let event = new KeyboardEvent("keydown", {
            key: keyMap[e.key.toLowerCase()],
            keyCode: e.keyCode,
            bubbles: true
        });
        document.dispatchEvent(event);
    }
});

