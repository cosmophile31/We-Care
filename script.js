
// select all the elements
const chatOutput = document.querySelector('.chat-output');
const chatInput = document.querySelector('.chat-input');
const sendButton = document.querySelector('.send-button');

// add event listener to send button
sendButton.addEventListener('click', (e) => {
    e.preventDefault();
    const inputText = chatInput.value;
    chatInput.value = '';
    userResponse(inputText);
    botResponse(`You said: ${inputText}`);
});

// add event listener to input field
chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        const inputText = chatInput.value;
        chatInput.value = '';
        userResponse(inputText);
        botResponse(`You said: ${inputText}`);
    }
});

// disable the button when the input is empty
chatInput.addEventListener('input', () => {
    if (chatInput.value === '') {
        sendButton.disabled = true;
    } else {
        sendButton.disabled = false;
    }
});

// scroll to the bottom of the chat output
const scrollToBottom = () => {
    chatOutput.scrollTop = chatOutput.scrollHeight;
};

// call the function when the page is loaded
window.addEventListener('load', scrollToBottom);

// call the function when a new message is added
chatOutput.addEventListener('DOMSubtreeModified', scrollToBottom);
