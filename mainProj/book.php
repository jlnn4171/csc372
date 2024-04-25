<?php

	// Include the session script
	include 'includes/session.php';
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="css/style1.css" type="text/css" rel="stylesheet">
    <title>Booking</title>
</head>

<body class = bgColor>
    
    <div class = navBar>
        <img src="images/perfectnailslogo.png" alt="Orange window pane shape with the words 'Perfect Nails' in the center. Theres an open pink nail polish bottle to the right and nail clippers on the left of it." width ="110" height ="86">

        <a href="index.php"> Homepage </a> 
        <a href="services.php"> Services </a> 
        <a href="contact.php"> Contact </a> 
        <a href="about.php"> About </a>
        <a href="book.php"> Booking </a>
        <?= $logged_in ? '<a href="logout.php">Log Out</a>' : '<a href="login.php">Log In</a>'; ?>
    </div>

    <h1 class = "titles"> Book an Appointment Now </h1>

    <h3>Fill in the Following:</h3>

    <form action="appointment.php" method="POST">
    
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required><br><br>
    
        <label for="phone">Phone Number:</label>
        <input type="text" id="phone" name="phone" pattern="[0-9]{10}" title="Please enter a 10-digit phone number" required><br><br>
    
        <label for="service">Select Catagory of Service:</label>
        <select id="service" name="service">
            <option value="manicure">Manicure</option>
            <option value="pedicure">Pedicure</option>
            <option value="nail-art">Waxing</option>
        </select><br><br>
    
        <label for="appointment_date">Appointment Date:</label>
        <input type="date" id="appointment_date" name="appointment_date" required><br><br>
    
        <input type="submit" value="Submit">
        
    </form> 

</body>
</html>