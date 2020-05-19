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
const messenger2 = createMessenger();
const messenger3 = createMessenger();

messenger1.sendMessage("Bob");
messenger1.sendMessage("Tom");

messenger2.setMessage("Hello");
messenger2.sendSender("Alex");

messenger3.setSender("Alex");
messenger3.sendMessage("Bob");

export default createMessenger;