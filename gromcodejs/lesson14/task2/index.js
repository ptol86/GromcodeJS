// 'use strict';



const createMessenger = () => {

    let message = 'Just learn it';

    function sendMessage(name) {
        
        let sender = 'Gromcode';
    
        console.log(`${name}, ${message}! Your ${sender}`);
    }

    function setMessage(text) {
        message = text;
    }
    function setSender(name) {
        sender = name;
    }
    return {
        sendMessage,
        setMessage,
        setSender,
    }
}

const messenger = createMessenger();
messenger.sendMessage("Bob");
const messenger2 = createMessenger();
messenger.sendMessage("Tom");

export default createMessenger;