// Module pattern: 
// The Module pattern encapsulates "privacy" state and organization using closures.
// Provides a way of wrapping public methods, private methods and variables
// Only a public API is returned, keeping everything else within the closure private

const myModule = (function () {
    // Private members
    const config = {
        encoding: 'UTF8',
        maxLength: 4096
    };
    const logDateTime = () => new Date();

    // API (as: something which provides an interface)
    const showConfig = function () {
        for (key in config) {
            console.log(`${key}: ${config[key]}`);
        }
    }
    const changeConfig = function (key, value) {
        config[key] = value;
        console.log(`Config was changed at ${logDateTime()}`);
    }

    // Return the API functions as object
    return {
        showConfig,
        changeConfig
    }
})();

myModule.showConfig();
myModule.changeConfig('maxLength', 1024);
myModule.showConfig();

// encoding: UTF8
// maxLength: 4096

// Config was changed at Wed Apr 13 2022 15:00:24 GMT+0300 (Eastern European Summer Time)

// encoding: UTF8
// maxLength: 1024