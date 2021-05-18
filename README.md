# Interactive Form
## Added JavaScript functionality to Full Stack Conference form

### Features I added:
* The loadPage function which sets ups the form when the page first loads
* The setupJobRole function which sets up the Job Role text field display 
* The setupTShirtInfo function which will display certain color options depending on which shirt design the user picks
* The calculateActivitiesRegisteredTotal function which calculates the cost of the user’s selected activities and display the total
* The setupDefaultPayment function which will display the credit card payment option as default
* The setupPaymentInfo function which will display the payment info section that the user chooses
* The validName function will check that the name input is not left empty 
* The validEmail function will check that the email input meets the criteria
* The activitesRegistered function will check that at least one activity is registered
* The validCreditCard function will check that the credit card number, zipcode and cvv numbers meet the criteria
* The validateForm function will check that the name, email address, activities registered, and credit card section inputs of the form are valid
* The addAccessibility function will make the focus state of the activities section visually more obvious


### Instructions:
* Open the index.html file in Google Chrome
* Under Basic Info:
* Fill out the Name section; must have at least one character
* Fill out the Email Address section; must be at least one character, followed by "@", followed by at least one character and a ".com"
* Select the Job Role; if Other is selected then fill in the blank with the other job role title
* Under T-Shirt Info :
* Select the size of t-shirt
* Select the t-shirt design
* Select the color of the t-shirt
* Under Register for Activities:
* Check the activity; the total price for the activity will be below the activity options
* Under Payment Info:
* Select the payment type; if using credit card select the expiration data and year as well as enter in the card number (must be 13-16 numbers), enter in the zipcode (lmust be 5 numbers) and enter in the cvv (must be 3 numbers)