function sendMessage() {
    const input = document.getElementById("user-input");
    const chatBox = document.getElementById("chat-box");

    let message = input.value.trim();

    if (message === "") return;

    chatBox.innerHTML += `<div class="user-message">${message}</div>`;

    let msg = message.toLowerCase();
    let reply = "";

    if (msg.includes("hi") || msg.includes("hello")) {
        reply = "Hello! How can I help you today?";
    }
    else if (msg.includes("how are you")) {
        reply = "I'm doing great! Thank you for asking.";
    }
    else if (msg.includes("what is ai")) {
        reply = "Artificial Intelligence (AI) enables computers to perform tasks that usually require human intelligence.";
    }
    else if (msg.includes("what is html")) {
        reply = "HTML stands for HyperText Markup Language. It is used to create web pages.";
    }
    else if (msg.includes("what is css")) {
        reply = "CSS stands for Cascading Style Sheets. It is used to design web pages.";
    }
    else if (msg.includes("what is javascript")) {
        reply = "JavaScript is a programming language that adds interactivity to websites.";
    }
    else if (msg.includes("what is codealpha")) {
        reply = "CodeAlpha provides internship opportunities and practical project experience for students.";
    }
    else if (msg.includes("who created you")) {
        reply = "I was created by CH. Sahitya for the CodeAlpha AI Internship.";
    }
    else if (msg.includes("thank")) {
        reply = "You're welcome! 😊";
    }
    else if (msg.includes("bye")) {
        reply = "Goodbye! Have a nice day!";
    }
    else {
        reply = "Sorry, I don't know the answer to that question. Please ask another question.";
    }

    setTimeout(() => {
        chatBox.innerHTML += `<div class="bot-message">${reply}</div>`;
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 500);

    input.value = "";
}