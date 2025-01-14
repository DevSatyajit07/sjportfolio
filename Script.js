// Auto-typing effect function
function typeWriter(element, text, i = 0, speed = 100) {
  if (i < text.length) {
      element.innerHTML += text.charAt(i); // Add one character at a time
      i++;
      setTimeout(() => typeWriter(element, text, i, speed), speed);
  } else {
      setTimeout(() => {
          element.innerHTML = ""; // Clear the text
          typeWriter(element, text); // Start typing again
      }, 1000); // Wait 1 second before restarting the typing
  }
}

// Wait for the document to load, then start typing
document.addEventListener('DOMContentLoaded', () => {
  const hiText = "Hi This is Satyajit"; // First part: "Hi"
  const descText = "I am a Web Developer and a Programmer"; // Second part: description

  const hiElement = document.querySelector('.hi-text'); // Element for "Hi"
  const descElement = document.querySelector('.desc-text'); // Element for description

  // Type "Hi" first, then "I am a Web Developer and Programmer"
  typeWriter(hiElement, hiText, 0, 100); // Start typing "Hi"
  
  // After "Hi" is finished typing, start typing the description
  setTimeout(() => typeWriter(descElement, descText, 0, 100), hiText.length * 100 + 500);
});
