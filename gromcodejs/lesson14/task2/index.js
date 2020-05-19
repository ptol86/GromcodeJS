// 'use strict';

const createMessenger = () => {

    let message = 'Just learn it';
    let sender = 'Gromcode';

    function sendMessage(name) {
        
        console.log(`${name}, ${message}! Your ${sender}`);
    }

    function setMessage(text) {
        message = text;
    }

    function setSender(test) {
        sender = test;
    }

    return {
        sendMessage,
        setMessage,
        setSender,
    }
}

const messenger1 = createMessenger();
messenger1.sendMessage("Bob");
messenger1.sendMessage("Tom");
const messenger2 = createMessenger();
messenger2.setMessage("Hello");
messenger2.setSender("Alex");
messenger2.sendMessage("July");

// export default createMessenger;