// 'use strict';
let message = 'Just learn it';

let createMessenger = () => {
    
    export default createMessenger;

    function sendMessage(name) {
        
        let sender = 'Gromcode';
    
        console.log(`${name}, ${message}! Your ${sender}`);
    }

    function setMessage(text) {
        message = text;
    }
    function setSender(text) {
        sender = text;
    }
}