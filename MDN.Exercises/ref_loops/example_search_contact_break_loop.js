// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code#exiting_loops_with_break

(function() {
    const output = document.querySelector('#contactsBreakLoop p.output');
    const contactList = document.querySelector('#contactsBreakLoop p.contactList');
    const input = document.querySelector('#contactsBreakLoop input#searchBreakLoop');
    const btn = document.querySelector('#contactsBreakLoop button.submit');

    const contacts = [
        'Chris:2232322',
        'Sarah:3453456',
        'Bill:7654322',
        'Mary:9998769',
        'Dianne:9384975'
    ];

    // Convert to array of objects `{name: 'value', number: 'value'}`
    const ctObj = contacts.map((ct) => ({ "name": ct.split(':')[0], "number": ct.split(':')[1] }) );

    // Fill the available contacts field
    for (let i = 0; i < ctObj.length; i++) {
        const ctName = `<u>${ctObj[i].name}</u>`;
        if (i === ctObj.length - 1) contactList.innerHTML += `${ctName}.`;
        else if (i === ctObj.length - 2) contactList.innerHTML += `${ctName} and `;
        else contactList.innerHTML += `${ctName}, `;
    }
    
    // Do the search
    btn.addEventListener('click', () => {
        const searchName = input.value.toLowerCase();
        if (!searchName) return;
        input.value = '';
        input.focus();

        // Search the entered name in the available contacts
        let msg = `Contact name: <b>${searchName}</b>, not found!`;
        for (let i = 0; i < ctObj.length; i++) {
            if (searchName === ctObj[i].name.toLocaleLowerCase()) {
                msg = `Contact name: <b>${ctObj[i].name}</b>, has number: <b>${ctObj[i].number}</b>.`;
                break;
            }
        }
        output.innerHTML = msg;
    });
})();