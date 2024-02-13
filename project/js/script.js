var msg = document.getElementById('response');

//user input wordbox: service

var service = document.getElementById('service');
var validService = false;

function focusService() {
    focusService.innerHTML = 'Please enter one of the services we provide';
}

//displaying the message when textbox is clicked on
service.addEventListener('focus',focusService, false);

//stores the user input into a variable
var ogServiceInput = document.getElementById('service').value;

//turns serviceInput to all lower case
var serviceInput = ogServiceInput.toLowerCase();

//list of service catagories
serviceList = ['eye lash extensions', 'facial', 'nail treatments', 'permanent makeup', 'waxing'];
serviceCheck = false;


function checkNameValue() {

    for (let i = 0; i < serviceList.length; i++) {
        if (serviceInput === serviceList[i]){
            serviceCheck = true;
        }
    }

    if (serviceCheck = false){
        msg.innerHTML = 'We do not offer the service you entered, please enter one from above.';
    } 
    else if (serviceInput === '') {
        service.style.borderColor = 'red';
        msg.innerHTML = 'You did not enter a service. Please try again.';
    }
    else if (serviceInput === 'eye lash extensions') {
        service.style.borderColor = 'green';
        msg.innerHTML = 'It can take 1 to 2 hours depending on what set you are getting..';
    }
    else if (serviceInput === 'facial') {
        service.style.borderColor = 'green';
        msg.innerHTML = 'It can take roughly 45 minutes.';
    }
    else if (serviceInput === 'nail treatments') {
        service.style.borderColor = 'green';
        msg.innerHTML = 'It can take 45 minutes to 2 hours depending on what you are getting done.';
    }
    else if (serviceInput === 'permanent makeup') {
        service.style.borderColor = 'green';
        msg.innerHTML = 'It can take 1 to 2 hours depending on what you are getting done.';
    }
    else if (serviceInput === 'waxing') {
        service.style.borderColor = 'green';
        msg.innerHTML = 'It can take 5 to 20 minutes depending on what you are getting waxed.';
    }
    else {
        service.style.borderColor = '#ccc';
        validService = true;
        msg.innerHTML = '';
    }
    
}

service.addEventListener('blur',checkNameValue, false);

function complete() {
    msg.innerHTML = "Response successfully recorded.";
}

var submit = document.getElementById('submit');
submit.addEventListener("click", complete);