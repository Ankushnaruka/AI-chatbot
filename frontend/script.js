let send = document.getElementById("sendButton");
let input = document.getElementById("userInput");
let chat = document.getElementById("chatbox");

marked.setOptions({
    gfm: true,
    tables: true,
    breaks: true
});

send.addEventListener("click", async () => {
    let message = input.value;
    if (message.trim() === "") return;

    chat.innerHTML += `<div class="user-message">${message}</div>`;
    input.value = "";
    chat.scrollTop = chat.scrollHeight;//to scroll to the bottom of the chatbox

    try {
        let response = await fetch("/bot", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ message })
        });

        let data = await response.json();
        let renderedResponse = marked.parse(data.response);

        chat.innerHTML += `<div class="bot-message">${renderedResponse}</div><br>`;
        chat.scrollTop = chat.scrollHeight;

    } catch (error) {
        console.error("Error sending message:", error);
        chat.innerHTML += `<div class="bot-message">Sorry, there was an error processing your message.</div>`;
    }
});

input.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        send.click();
    }
});