/*
Treehouse Techdegree:
FSJS Project 3 - Interactive Form
*/

/* 
This function puts the name text field of the form in the focus state when the page first loads
*/
function loadPage() {
  const name = document.getElementById('name');
  name.focus();
}

/*
This function listens to changes to the Job Role selection and sets the Job Role text field display depending on other job role selection
*/
function setupJobRole() {
  // Hide the other job role text field so it is not displayed when the page first loads
  const otherJobRole = document.getElementById('other-job-role');
  otherJobRole.style.display = 'none';
  // Listen for user changes to the Job Role selection
  const title = document.getElementById('title');
  title.addEventListener('input', (event) => {
    // If job role selected is other, then display the other job role text field
    let jobRole = event.target.value
    if (jobRole === 'other') {
        otherJobRole.style.display = 'block';
    } else {
        otherJobRole.style.display = 'none';
    }
  }
  )
}

/*
This function will display certain color options depending on which shirt design the user picks
If the user selects "Theme - JS Puns" then the "Color" menu should only display "Cornflower Blue," "Dark Slate Grey," and "Gold."
If the user selects "Theme - I ♥ JS" then the "Color" menu should only display "Tomato," "Steel Blue," and "Dim Grey."  
*/
function setupTShirtInfo() {
  // Disable the "Color" <select> element.
  const shirtColor = document.getElementById('color');
  shirtColor.style.display = 'none';
  // Listen for user changes for the "Design" <select> element
  const shirtDesign = document.getElementById('design');
  shirtDesign.addEventListener('input', (event) => {
    // The "Color" <select> element should be enabled.
    shirtColor.style.display = 'block';
    // Grab the users shirt design preference
    let shirtDesignOption = event.target.value
    // Grab all of the shirt color options and then loop through them
    let shirtColorOptions = shirtColor.children;
    for (let i = 0; i < shirtColorOptions.length; i++) {
      // Get the shirt design that is associated with the color option
      let dataThemeAttribute = shirtColorOptions[i].getAttribute('data-theme')
      // If there is no design associated with the object then skip
      if (dataThemeAttribute === null) {
          continue
      } // If the user selects the t-shirt design that the color is associated with then show that color option
        else if (shirtDesignOption === dataThemeAttribute) {
          shirtColorOptions[i].hidden = false
      } // If the user selects the t-shirt design that the color is not associated with then don't show that color option
        else if (shirtDesignOption !== dataThemeAttribute) {
          shirtColorOptions[i].hidden = true;
      }
    }
  });
}

/* 
This function will calculate the sum of the cost of the user’s selected activities and display the total below the "Register for Activities" section
*/
function calculateActivitiesRegisteredTotal() {
  const activities = document.getElementById('activities');
  // Listen for when a user checks an activity
  activities.addEventListener('input', (event) => {
      let activityOptions = document.getElementById('activities-box').children;
      let eventCost = 0;
      // Loop through activity options
      for (let i = 0; i < activityOptions.length; i++){
        let activityInput = activityOptions[i].querySelector('input')
        // If the activity was checked by the user
        if (activityInput.checked) {
          // Get the activity price and add it to the total cost event
          let dataCostString = activityInput.getAttribute('data-cost')
          dataCostInteger = parseInt(dataCostString);
          eventCost += dataCostInteger;
      
        }
      
      }
      // Display the event cost total
      let activitiesCost = document.getElementById('activities-cost');
      activitiesCost.textContent = `Total: $${eventCost}`;
  })
}

/*
This function will select and display the credit card payment option as default as well as hide the paypal and bitcoin payment options
*/
function setupDefaultPayment() {
  // Get payment options
  const payment = document.getElementById('payment')
  const paymentOptions = payment.children;
  // Loop through payment options
  for (let i = 0; i < paymentOptions.length; i++) {
    // If payment option is credit card, then mark it as selected
    if (paymentOptions[i].getAttribute('value') === 'credit-card') {
      paymentOptions[i].selected = true;
    }
  }
  // Get each of the payment options
  const creditCardPayment = document.getElementById('credit-card');
  const paypalPayment = document.getElementById('paypal');
  const bitcoinPayment = document.getElementById('bitcoin');
  // Display the credit card payment info
  creditCardPayment.style.display = 'block';
  // Hide the paypal and bitcoin payment info
  paypalPayment.style.display = 'none';
  bitcoinPayment.style.display = 'none';
}

/*
This function will display the payment info section that the user chooses and hide the other payment sections
*/
function setupPaymentInfo() {
  // Listen for when a user picks a payment type
  payment.addEventListener('input', (event) => {
    let paymentChoice = event.target.value;
    const creditCardPayment = document.getElementById('credit-card');
    const paypalPayment = document.getElementById('paypal');
    const bitcoinPayment = document.getElementById('bitcoin');
    // If user picks credit card as a payment choice display credit card info and hide paypal and bitcoin info
    if (paymentChoice == 'credit-card') {
      creditCardPayment.style.display = 'block';
      paypalPayment.style.display = 'none';
      bitcoinPayment.style.display = 'none';
    } // If user picks paypal as a payment choice display paypal info and hide credit card and bitcoin info
      else if (paymentChoice == 'paypal') {
        paypalPayment.style.display = 'block';
        creditCardPayment.style.display = 'none';
        bitcoinPayment.style.display = 'none';
    } // If user picks bitcoin as a payment choice display bitcoin info and hide credit card and paypal info
      else if (paymentChoice == 'bitcoin') {
        creditCardPayment.style.display = 'none';
        paypalPayment.style.display = 'none';
        bitcoinPayment.style.display = 'block';
    }
  
  })
}

/*
This function will return true or false depending on if the name input is not left empty
*/
function validName() {
  return document.getElementById('name').value !== '';
}

/* 
This function will return true or false depending on if the email input meets the criteria
Email criteria is as follows:
At least one character, followed by "@", followed by at least one character and a ".com" for the domain name.
*/
function validEmail() {
  const email = document.getElementById('email').value
  const emailRegex = /\w+@[a-z]+(.com)+/ig
  return emailRegex.test(email)
}

/*
This function will return true or false depeding on if the count of activities is greater than 0
*/
function activitesRegistered() {
  const activitiesBox = document.getElementById('activities-box').children;
  count = 0
  // Loop through the activities 
  for (let i = 0; i < activitiesBox.length; i++) {
    // If an activity is selected add to count
    if (activitiesBox[i].getElementsByTagName('input')[0].checked === true) {
      count +=1;
    }   
  }
  return count > 0;
}

/*
This function will return true or false depending on if the count equals 3
There are 3 if statements in the function that test if the credit card number, zipcode and cvv are valid
If all 3 if statements are true then the count will be 3 and evaluate to true
*/
function validCreditCard() {
  // Get the values entered into the input box for the credit card number, zipcode and cvv
  const creditCardNumber = document.getElementById('cc-num').value;
  const zipcode = document.getElementById('zip').value;
  const cvv = document.getElementById('cvv').value;
  // Set the regex for the cvv, zipcode and the credit card number
  const cvvRegEx = /\d{3}/g;
  const zipcodeRegEx = /\d{5}/g;
  const creditCardRegEx = /\d{13,16}/g;
  let count = 0
  // If the cvv number is 3 numbers
  if (cvvRegEx.test(cvv)) {
    // Mark the cvv input as valid and hide the hint message
    document.getElementById('cvv').parentNode.classList.add('valid');
    document.getElementById('cvv').parentNode.classList.remove('not-valid');
    document.getElementById('cvv').parentNode.lastElementChild.style.display = '';
    count +=1;
  } else {
    // Mark the cvv input as not-valid and display the hint message
    document.getElementById('cvv').parentNode.classList.add('not-valid');
    document.getElementById('cvv').parentNode.classList.remove('valid');
    document.getElementById('cvv').parentNode.lastElementChild.style.display = 'block';
  }
  // If the zipcode is 5 numbers
  if (zipcodeRegEx.test(zipcode)) {
    // Mark the zipcode input as valid and hide the hint message
    document.getElementById('zip').parentNode.classList.add('valid');
    document.getElementById('zip').parentNode.classList.remove('not-valid');
    document.getElementById('zip').parentNode.lastElementChild.style.display = '';
    count +=1;
  } else {
    // Mark the zipcode input as not-valid and display the hint message
    document.getElementById('zip').parentNode.classList.add('not-valid');
    document.getElementById('zip').parentNode.classList.remove('valid');
    document.getElementById('zip').parentNode.lastElementChild.style.display = 'block';
  }
  // If the credit card number is between 13 and 16 numbers
  if (creditCardRegEx.test(creditCardNumber)) {
    // Mark the credit card number input as valid and hide the hint message
    document.getElementById('cc-num').parentNode.classList.add('valid');
    document.getElementById('cc-num').parentNode.classList.remove('not-valid');
    document.getElementById('cc-num').parentNode.lastElementChild.style.display = '';
    count +=1;
  } else {
    // Mark the credit card number input as not-valid and display the hint message
    document.getElementById('cc-num').parentNode.classList.add('not-valid');
    document.getElementById('cc-num').parentNode.classList.remove('valid');
    document.getElementById('cc-num').parentNode.lastElementChild.style.display = 'block';
  }
  return count === 3;
}

/* 
This function will check to see if the name, email address, activities registered, and credit card section inputs of the form are valid
*/
function validateForm() {
  const form = document.querySelector('form');
  // Listen for when the user submits the form
  form.addEventListener('submit', (event) => {
    let count = 0
    // If form does not have valid name then 
    if (!validName()) {
      // Mark the name input as not-valid and display the hint message as well as increase count
      document.getElementById('name').parentNode.classList.add('not-valid');
      document.getElementById('name').parentNode.classList.remove('valid');
      document.getElementById('name').parentNode.lastElementChild.style.display = 'block';
      count +=1;
    } else {
      // Mark the name input as valid and hide the hint message
      document.getElementById('name').parentNode.classList.add('valid');
      document.getElementById('name').parentNode.classList.remove('not-valid');
      document.getElementById('name').parentNode.lastElementChild.style.display = '';
    }
    // If email address is not valid
    if (!validEmail()) {
      // Mark the email input as not-valid and display the hint message as well as increase count
      document.getElementById('email').parentNode.classList.add('not-valid');
      document.getElementById('email').parentNode.classList.remove('valid');
      document.getElementById('email').parentNode.lastElementChild.style.display = 'block';
      count +=1;
    } else {
      // Mark the email input as valid and hide the hint message
      document.getElementById('email').parentNode.classList.add('valid'); 
      document.getElementById('email').parentNode.classList.remove('not-valid');
      document.getElementById('email').parentNode.lastElementChild.style.display = '';
    }
    // If the activities registered section is not valid
    if (!activitesRegistered()) {
      // Mark the activties registered section as as not-valid and display the hint message as well as increase count
      document.getElementById('activities').classList.add('not-valid');
      document.getElementById('activities').classList.remove('valid');
      document.getElementById('activities').lastElementChild.style.display = 'block';
      count +=1;
    } else {
      // Mark the activities registered section as valid and hide the hint message
      document.getElementById('activities').classList.add('valid');
      document.getElementById('activities').classList.remove('not-valid');
      document.getElementById('activities').lastElementChild.style.display = '';
    }
    // If the credit card is not valid
    if (!validCreditCard()) {
      // Increase count
      count +=1;
    }
    // If count is more than 0 then prevent the form from submitting
    if (count > 0) {
      event.preventDefault();
    }
  });
}

/*
This function makes the focus state of the activities section visually more obvious
*/
function addAccessibility() {
  // Make the focus states of the activities more obvious to all users
  const activitiesBoxes = document.getElementById('activities-box').children;
  // Loop through the activties options
  for (let i = 0; i < activitiesBoxes.length; i++) {
    // Get the checkbox
    const checkbox = activitiesBoxes[i].getElementsByTagName('input')[0];
    // If checkbox input is focused on
    checkbox.addEventListener('focus', (event) => {
        // Add focus class which visually enhances the focus indicator
        event.target.parentNode.classList.add('focus');
    })
    // If checkbox input loses focus
    checkbox.addEventListener('blur', (event) => {
        // Remove focus class which stops the visual enhancement
        document.getElementsByClassName('focus')[0].removeAttribute('class');
    })
  }
}

// Call functions 
loadPage();
setupJobRole();
setupTShirtInfo();
calculateActivitiesRegisteredTotal();
setupDefaultPayment();
setupPaymentInfo();
validateForm();
addAccessibility();
