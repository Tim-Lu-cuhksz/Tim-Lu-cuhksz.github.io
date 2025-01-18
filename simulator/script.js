// Fetch the DOM elements
const messagesDiv = document.getElementById("messages");
const messageInput = document.getElementById("message-input");
const sendButton = document.getElementById("send-button");

// Function to add a message to the chat
function addMessage(text, role = "user") {
  const messageDiv = document.createElement("div");
  messageDiv.className = `message ${role}`;
  messageDiv.textContent = text;
  messagesDiv.appendChild(messageDiv);

  // Automatically scroll to the latest message
  scrollToLatestMessage();
}

// Function to scroll to the latest message
function scrollToLatestMessage() {
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

// Handle sending a message
sendButton.addEventListener("click", async () => {
  const userMessage = messageInput.value.trim();
  if (!userMessage) return;

  // Display user's message
  addMessage(userMessage, "user");
  messageInput.value = "";

  // Simulate the backend response
  simulateBackendResponse(userMessage);
});

// Simulated backend response function (replace with WebSocket or real API call)
async function simulateBackendResponse(userInput) {
  try {
    // Send user input to the backend
    const response = await fetch('http://127.0.0.1:5000/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userInput }),
    });

    // Parse the JSON response
    const data = await response.json();
    const responses = data.responses;

    // Display each response as a new message block
    responses.forEach((response, index) => {
      setTimeout(() => {
        addMessage(response, "bot");
      }, 5000 * index); // Delay each response
    });
  } catch (error) {
    console.error('Error communicating with the backend:', error);
    addMessage('Error: Could not connect to the backend.', "bot");
  }
}

// Optional: Handle Enter key for sending messages
messageInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    sendButton.click();
  }
});
