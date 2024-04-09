
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function applyGlitchEffect(element) {
  let interval = null;
  let iteration = 0;
  
  // Clear any existing interval to avoid overlaps
  clearInterval(interval);
  
  interval = setInterval(() => {
    element.innerText = element.innerText
      .split("")
      .map((char, index) => {
        // Return the original character if the current iteration has passed this character's index
        if (index < iteration) {
          return element.dataset.value[index];
        }
        // Otherwise, replace it with a random letter
        return letters[Math.floor(Math.random() * letters.length)];
      })
      .join("");
    
    // Increment the iteration in fractional steps to slow down the restoration process
    iteration += 1 / 3;
    
    // Clear the interval and restore the original text once all characters have been processed
    if (iteration >= element.dataset.value.length) {
      clearInterval(interval);
    }
  }, 30);
}

// Apply the glitch effect to all .container elements when the page loads
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll(".glitch").forEach(element => {
    // Store the original text in a data attribute for later retrieval
    element.dataset.value = element.innerText;
    applyGlitchEffect(element);
  });
});
