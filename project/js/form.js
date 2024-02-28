$(document).ready(function() {

    //user input wordbox: service
    var service = $('#service');
    var msg = $('#response');
    var validService = false;

    function focusService() {
        msg.html('Please enter one of the services we provide');
    }

    //displaying the message when textbox is clicked on
    service.focus(focusService);

    //list of service catagories
    serviceList = ['eye lash extensions', 'facial', 'nail treatments', 'permanent makeup', 'waxing'];


    function checkNameValue() {

        //stores the user input into a variable
        var ogServiceInput = service.val();

        //turns serviceInput to all lower case
        var serviceInput = ogServiceInput.toLowerCase();

        serviceCheck = false;

        for (let i = 0; i < serviceList.length; i++) {
            if (serviceInput === serviceList[i]){
                serviceCheck = true;
                break;
            }
        }

        if (serviceCheck === false){
            $("#response").text("We do not offer the service you entered, please enter one from above.");
        } 
        else if (serviceInput === '') {
            service.css('border-color', 'red');
            msg.html('You did not enter a service. Please try again.');
        }
        else if (serviceInput === 'eye lash extensions') {
            service.css('border-color', 'green');
            msg.html('It can take 1 to 2 hours depending on what set you are getting.');
        }
        else if (serviceInput === 'facial') {
            service.css('border-color', 'green');
            msg.html('It can take roughly 45 minutes.');
        }
        else if (serviceInput === 'nail treatments') {
            service.css('border-color', 'green');
            msg.html('It can take 45 minutes to 2 hours depending on what you are getting done.');
        }
        else if (serviceInput === 'permanent makeup') {
            service.css('border-color', 'green');
            msg.html('It can take 1 to 2 hours depending on what you are getting done.');
        }
        else if (serviceInput === 'waxing') {
            service.css('border-color', 'green');
            msg.html('It can take 5 to 20 minutes depending on what you are getting waxed.');
        }
        else {
            service.css('border-color', '#ccc');
            validService = true;
            msg.html('');
        }
        
    }

    service.blur(checkNameValue);

    function complete() {
        checkNameValue();
    }

    $('#submit').click(complete);
});