<?php
session_start();

// include the validation functions
include 'validation_functions.php'; 

// array to store initial form data
$form_data = array(
    'name' => '',
    'phone' => '',
    'service' => '',
    'appointment_date' => ''
);

// array for error message storage
$error_messages = array(
    'name' => '',
    'phone' => '',
    'service' => '',
    'appointment_date' => ''
);

// variable to store submission status
$form_status = '';

// checking if the form has been submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // collect form data
    $form_data['name'] = htmlspecialchars($_POST['name']);
    $form_data['phone'] = htmlspecialchars($_POST['phone']);
    $form_data['service'] = $_POST['service'];
    $form_data['appointment_date'] = $_POST['appointment_date'];

    // validate form data
    $error_messages['name'] = validate_text_input($form_data['name'], 2, 50);
    $error_messages['phone'] = validate_number_input($form_data['phone'], 1000000000, 9999999999);
    $error_messages['service'] = validate_option($form_data['service'], array('manicure', 'pedicure', 'nail-art'));
    $error_messages['appointment_date'] = ''; //doesnt need validation bc it's its own field thingy

    // check for errors
    if (in_array('', $error_messages)) {
        $form_status = 'Data is valid. Your appointment is confirmed!';
        // set cookie
        setcookie('visitor_info', json_encode($form_data), time() + 3600); // Cookie expires in 1 hour
        // set session data
        $_SESSION['visitor_info'] = $form_data;
    } else {
        $form_status = 'Please correct the following errors:';
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nail Salon Form Submission</title>
</head>
<body>

<h2>Form Submission Status</h2>

<p><?php echo $form_status; ?></p>

<?php if ($form_status !== 'Data is valid. Your appointment is confirmed!'): ?>
    <ul>
        <?php foreach ($error_messages as $error): ?>
            <?php if ($error !== ''): ?>
                <li><?php echo $error; ?></li>
            <?php endif; ?>
        <?php endforeach; ?>
    </ul>
<?php endif; ?>

<h2>Details Entered:</h2>

<p>Name: <?php echo $form_data['name']; ?></p>
<p>Phone Number: <?php echo $form_data['phone']; ?></p>
<p>Service: <?php echo $form_data['service']; ?></p>
<p>Appointment Date: <?php echo $form_data['appointment_date']; ?></p>

<?php
// access cookie data
if(isset($_COOKIE['visitor_info'])) {
    $cookie_data = json_decode($_COOKIE['visitor_info'], true);
    // validate and use cookie data
}
?>

<?php
// access session data
if(isset($_SESSION['visitor_info'])) {
    $session_data = $_SESSION['visitor_info'];
}
?>

<?php
// destroy session
session_destroy();
?>

</body>
</html>
