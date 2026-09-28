function sendMessage() {
  const input = document.getElementById("userInput");
  const chat = document.getElementById("chat");

  const message = input.value.trim();

  if (message === "") {
    return;
  }

  // Show user's message
  const userMessage = document.createElement("div");
  userMessage.className = "message user";
  userMessage.textContent = message;
  chat.appendChild(userMessage);

  input.value = "";

  // Demo response
  setTimeout(() => {
    const botMessage = document.createElement("div");
    botMessage.className = "message bot";

    botMessage.textContent =
      "I'm Zygo! 🤖 My real AI brain will be connected soon.";

    chat.appendChild(botMessage);

    chat.scrollTop = chat.scrollHeight;
  }, 500);
}

// Press Enter to send
document.getElementById("userInput").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    sendMessage();
  }
});
