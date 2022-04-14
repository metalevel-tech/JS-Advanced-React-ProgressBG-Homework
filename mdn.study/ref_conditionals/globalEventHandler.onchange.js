// https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onchange
(function() {
    const input = document.querySelector('#onChangeDemo > input');
    const log = document.querySelector('#logOnChangeDemo');

    input.onchange = handleChange;

    function handleChange(event) {
        log.textContent = `The field's value is
            ${event.target.value.length} charter(s) long.`;
    }
})();