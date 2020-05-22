export const callbackPrompt = {
    message: "Tell me your number",
    showPrompt () {
        const phoneNumber = prompt(this.message);
    },
    showDeferredPrompt(ms) {
        setTimeout(() => this.showPrompt(), ms)
    } 
};
callbackPrompt.showDeferredPrompt(2000);