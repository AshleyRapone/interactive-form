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

/* 6 */
// The "Total: $" element below the "Register for Activities" section should update to reflect the sum of the cost of the user’s selected activities.
// Program the "Register for Activities" fieldset element to listen for user changes. When a change is detected:
const activities = document.getElementById('activities');
activities.addEventListener('input', (event) => {
    let activityOptions = document.getElementById('activities-box').children;
    let eventCost = 0;
    for (let i = 0; i < activityOptions.length; i++){
      let activityInput = activityOptions[i].querySelector('input')
      if (activityInput.checked) {
        // grab amount
        let dataCostString = activityInput.getAttribute('data-cost')
        dataCostInteger = parseInt(dataCostString);
        eventCost += dataCostInteger;
    
      }
    
    }
    let activitiesCost = document.getElementById('activities-cost');
    activitiesCost.textContent = `Total: $${eventCost}`;
   // If an activity is checked, the total cost should increase by the value in the data-cost attribute of the activity’s <input type="checkbox"> element.
   // If an activity is unchecked, the total cost should decrease by that amount.
   // The <p> element with the id of "activity-cost" below the activities section should update to reflect the chosen activities' total cost.
})

/* 7 */
/*
Program the "I'm going to pay with" <select> element to listen for user changes. 
When a change is detected, hide all payment sections in the form’s UI except the selected one.
*/
// The credit card payment option should be selected for the user by default.
const payment = document.getElementById('payment')
const paymentOptions = payment.children;
for (let i = 0; i < paymentOptions.length; i++) {
  if (paymentOptions[i].getAttribute('value') === 'credit-card') {
    paymentOptions[i].selected = true;
  }

}

const creditCardPayment = document.getElementById('credit-card');
const paypalPayment = document.getElementById('paypal');
const bitcoinPayment = document.getElementById('bitcoin');
creditCardPayment.style.display = 'block';
paypalPayment.style.display = 'none';
bitcoinPayment.style.display = 'none';

payment.addEventListener('input', (event) => {
  let paymentChoice = event.target.value;
  const creditCardPayment = document.getElementById('credit-card');
  const paypalPayment = document.getElementById('paypal');
  const bitcoinPayment = document.getElementById('bitcoin');
  console.log(paymentChoice);
  if (paymentChoice == 'credit-card') {
    creditCardPayment.style.display = 'block';
    paypalPayment.style.display = 'none';
    bitcoinPayment.style.display = 'none';
  } else if (paymentChoice == 'paypal') {
      paypalPayment.style.display = 'block';
      creditCardPayment.style.display = 'none';
      bitcoinPayment.style.display = 'none';
  } else if (paymentChoice == 'bitcoin') {
      creditCardPayment.style.display = 'none';
      paypalPayment.style.display = 'none';
      bitcoinPayment.style.display = 'block';
  }

})


/* 8 */
//if (email === ''
function valid_name() {
  return document.getElementById('name').value !== '';
}

function valid_email() {
  const email = document.getElementById('email').value
  const emailRegex = /\w+@[a-z]+(.com)+/ig
  return emailRegex.test(email)
}

function activites_registered() {
  const activitiesBox = document.getElementById('activities-box').children;
  count = 0
  for (let i = 0; i < activitiesBox.length; i++) {
    if (activitiesBox[i].getElementsByTagName('input')[0].checked === true) {
      count +=1;
    }   
  }
  return count > 0;
}

function valid_credit_card() {
  const creditCardNumber = document.getElementById('cc-num').value;
  const zipcode = document.getElementById('zip').value;
  const cvv = document.getElementById('cvv').value;
  const cvvRegEx = /\d{3}/g;
  const zipcodeRegEx = /\d{5}/g;
  const creditCardRegEx = /\d{13,16}/g;
  let count = 0
  if (cvvRegEx.test(cvv)) {
    count +=1;
  }
  if (zipcodeRegEx.test(zipcode)) {
    count +=1;
  }
  if (creditCardRegEx.test(creditCardNumber)) {
    count +=1;
  }
  return count === 3;
}




const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  let count = 0
  if (!valid_name()) {
    console.log('no valid name');
    count +=1;
  }
  if (!valid_email()) {
    console.log('no valid email')
    count +=1;
  }
  if (!activites_registered()) {
    console.log('no activites registered')
    count +=1;
  }
  if (!valid_credit_card()) {
    console.log('no valid card')
    count +=1;
  }
  if (count > 0) {
    event.preventDefault();
  }
});

//The "Register for Activities" section must have at least one activity selected.
