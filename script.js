// script.js

// Function to toggle the theme
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
}

document.addEventListener('DOMContentLoaded', () => {
    const chatWindow = document.getElementById('chat-window');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');
    const themeToggle = document.getElementById('theme-toggle');

    themeToggle.addEventListener('click', toggleTheme);

    sendButton.addEventListener('click', async () => {
        const userMessage = userInput.value;
        if (userMessage.trim() === '') return;

        // Send user message to ChatGPT API
        const response = await sendMessageToChatG

