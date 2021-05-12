/*
Treehouse Techdegree:
FSJS Project 3 - Interactive Form
*/

/* 3 */
// When the page first loads, the first text field should have the focus state by default to prompt the user.
// Use the .focus() method on the <input type="text"> element for the "Name" field
const name = document.getElementById('name');
name.focus();



/* 4 */
// Hide the "text field" with the id of "other-job-role" so it is not displayed when the form first loads.
const otherJobRole = document.getElementById('other-job-role');
otherJobRole.style.display = 'none';
const title = document.getElementById('title');
title.addEventListener('input', (event) => {
  let jobRole = event.target.value
  if (jobRole === 'other') {
      otherJobRole.style.display = 'block';
  }
}
)

/* 5 */
// Disable the "Color" <select> element.
const shirtColor = document.getElementById('color');
shirtColor.style.display = 'none';

// Program the "Design" <select> element to listen for user changes. When a change is detected
const shirtDesign = document.getElementById('design');
shirtDesign.addEventListener('input', (event) => {
  let shirtDesignOption = event.target.value
  // The "Color" <select> element should be enabled.
  shirtColor.style.display = 'block';
  /*
   If the user selects "Theme - JS Puns" then the "Color" menu should only display "Cornflower Blue," "Dark Slate Grey," and "Gold."
   If the user selects "Theme - I ♥ JS" then the "Color" menu should only display "Tomato," "Steel Blue," and "Dim Grey."  
  */
  let shirtColorOptions = shirtColor.children;
  for (let i = 0; i < shirtColorOptions.length; i++) {
    let dataThemeAttribute = shirtColorOptions[i].getAttribute('data-theme')
    if (dataThemeAttribute === null) {
        continue
    } else if (shirtDesignOption === dataThemeAttribute) {
        shirtColorOptions[i].hidden = false
    } else if (shirtDesignOption !== dataThemeAttribute) {
        shirtColorOptions[i].hidden = true;
    }
  }
});