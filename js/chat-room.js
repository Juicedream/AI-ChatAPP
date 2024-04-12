function sendMessage() {
  var userInput = document.getElementById('userInput').value;
  var chatBox = document.getElementById('chatBox');

  // Create a new message element for the user's message
  var userMessageElement = document.createElement('div');
  userMessageElement.classList.add('chat-message', 'user-message');
  var messageBubble = document.createElement('div');
  messageBubble.classList.add('message-bubble');
  messageBubble.textContent = userInput;
  userMessageElement.appendChild(messageBubble);
  chatBox.appendChild(userMessageElement);

  // Generate a response from the computer
  var computerResponse = 
  
  generateComputerResponse(userInput);
  




  // Create a new message element for the computer's response
  var computerMessageElement = document.createElement('div');
  computerMessageElement.classList.add('chat-message', 'computer-message');
  var computerMessageBubble = document.createElement('div');
  computerMessageBubble.classList.add('message-bubble');
  computerMessageBubble.textContent = computerResponse;
  computerMessageElement.appendChild(computerMessageBubble);
  chatBox.appendChild(computerMessageElement);

  // Clear the input field after sending the message
  document.getElementById('userInput').value = '';

  // Scroll to the bottom of the chat box
  chatBox.scrollTop = chatBox.scrollHeight;
}

function generateComputerResponse(userInput) {
  // This is a simple example of how the computer can respond based on the user's input
  // You can replace this with more sophisticated logic or integrate with a chatbot API
  if (userInput.toLowerCase().includes('hello')) {
        return 'Hello! How can I help you?';

  } else if (userInput.toLowerCase().includes('how are you')) {
      return 'I am just a computer program, but thank you for asking!';
  } else {
      return 'I am not sure how to respond to that.';
  }
}
