// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code#exiting_loops_with_break

(function() {
    const output = document.querySelector('#contactsFind p.output');
    const contactList = document.querySelector('#contactsFind p.contactList');
    const input = document.querySelector('#contactsFind input#searchFind');
    const btn = document.querySelector('#contactsFind button.submit');

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
        const found = ctObj.find(ct => ct.name.toLowerCase() === searchName);
        // Assign the result to the output
        output.innerHTML = (found)
                    ? `Contact name: <b>${found.name}</b>, has number: <b>${found.number}</b>.` 
                    : `Contact name: <b>${searchName}</b>, not found!`;
    });
})();