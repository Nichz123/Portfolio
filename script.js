
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
    iteration += element.innerHTML.length / 100;
    
    // Clear the interval and restore the original text once all characters have been processed
    if (iteration >= element.dataset.value.length) {
      clearInterval(interval);
    }
  }, 15);
}

// Apply the glitch effect to all .container elements when the page loads
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll(".glitch").forEach(element => {
    // Store the original text in a data attribute for later retrieval
    element.dataset.value = element.innerText;
    applyGlitchEffect(element);
  });
});


// Get all elements with the class 'editableText'
const editableTextElements = document.getElementsByClassName("editableText");

// Characters to cycle through
const newChar = ['.', '-', '#', 'T', 'R', 'I', 'C'];

// Iterate over all editableText elements
Array.from(editableTextElements).forEach(editableText => {
  // Split text into spans for each character, excluding spaces
  editableText.innerHTML = editableText.textContent.split('').map(char =>
    char === ' '? char : `<span class="editable">${char}</span>`).join('');

  // Set the dataset.value property for each editableText element
  editableText.dataset.value = editableText.innerHTML;

  // Add click event listener to each span within the current editableText element
  editableText.querySelectorAll('.editable').forEach(span => {
    span.addEventListener('click', function() {
      // Get current character
      let currentChar = this.textContent;
      // Find the index of the current character in the newChar array
      let currentIndex = newChar.indexOf(currentChar);
      // Determine the next character's index
      // If the current character is not found or is the last in the array, start from the beginning
      let nextIndex = currentIndex === -1 || currentIndex === newChar.length - 1? 0 : currentIndex + 1;
      // Update the character displayed in the span
      this.textContent = newChar[nextIndex];
    });
  });
});

//Reset event
const buttonReset = document.getElementById("Reset");
const regionText = document.getElementsByClassName("editableText");
buttonReset.onclick = resetContent;
function resetContent() {
  // Loop through all elements with the class "editableText"
  for (let i = 0; i < regionText.length; i++) {
    //Return to original text
    regionText[i].innerHTML = regionText[i].dataset.value;
  }
}

// Reset changed text in editableText back to its origonal text from page load, reestablishing the click event as well
function resetText() {
  document.querySelectorAll(".editableText").forEach(element => {
    element.innerHTML = element.dataset.value;

    // Re-attach the click event listener to each span within the current editableText element
    element.querySelectorAll('.editable').forEach(span => {
      span.addEventListener('click', function() {
        // Get current character
        let currentChar = this.textContent;
        // Find the index of the current character in the newChar array
        let currentIndex = newChar.indexOf(currentChar);
        // Determine the next character's index
        // If the current character is not found or is the last in the array, start from the beginning
        let nextIndex = currentIndex === -1 || currentIndex === newChar.length - 1? 0 : currentIndex + 1;
        // Update the character displayed in the span
        this.textContent = newChar[nextIndex];
      });
    });
  });
}

// Add event listener to reset button
document.getElementById("Reset").addEventListener("click", resetText);

function scrollToContent() {
  const secondSection = document.getElementById('secondSection');
  secondSection.scrollIntoView({ behavior: 'smooth' });
}