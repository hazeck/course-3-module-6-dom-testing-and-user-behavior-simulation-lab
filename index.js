// Step 1: Simulate User Behavior
// - Add event listeners for button clicks and form submissions.
// - Use JavaScript to dynamically update the DOM based on user actions.

// Step 2: DOM Manipulation Functions
// - Implement functions to add, update, and remove DOM elements.
// - Ensure all elements are dynamically created with appropriate attributes and content.

// Step 3: Error Handling
// - Display error messages in the DOM for invalid inputs or missing elements.
// - Create reusable functions to handle common error cases.

// Step 4: Reusable Utilities
// - Create modular utility functions, such as createElement(tag, attributes).
// - Ensure all functions follow DRY principles for maintainability.



function addElementToDOM(containerId, content) {
    const container = document.getElementById(containerId);
    if (container) {
      const newElement = document.createElement('p');
      newElement.textContent = content;
      container.appendChild(newElement);
    }
  }


  function removeElementFromDOM(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
      element.remove();
    }
  }

  function updateTextContent(id, content) {
    const element = document.getElementById(id);
    if (element) {
      element.textContent = content;
    }
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('myButton');
    const form = document.getElementById('myForm');
    const input = document.getElementById('myInput');
    const output = document.getElementById('output');
  
    if (button) {
      button.addEventListener('click', () => {
        updateTextContent('output', 'Button was clicked!');
      });
    }
  

    if (form) {
      form.addEventListener('submit', (event) => {
        event.preventDefault();
        if (input && input.value.trim() !== '') {
          updateTextContent('output', `Form submitted with input: ${input.value}`);
          input.value = '';
        } else {
          updateTextContent('output', 'Please enter a valid input.');
        }
      });
    }
  });
  

  