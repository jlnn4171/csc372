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
    <title>Perfect Nails Home</title>
</head>

<body class = bgColor>

    <div class = navBar>
        <img src="images/perfectnailslogo.png" alt="Orange window pane shape with the words 'Perfect Nails' in the center. Theres an open pink nail polish bottle to the right and nail clippers on the left of it." width ="110" height ="86">

        <a href="index.php"> Homepage </a> 
        <a href="services.php"> Services </a> 
        <a href="contact.php"> Contact </a> 
        <a href="about.php"> About </a>
        <?= $logged_in ? '<a href="book.php"> Booking </a>' : '<a href="login.php">Booking</a>'; ?>
        <?= $logged_in ? '<a href="logout.php">Log Out</a>' : '<a href="login.php">Log In</a>'; ?>
    </div>

    <h1 class="titles"> Welcome to Perfect Nails </h1>

    <p>
        Rosemary offers services beyond simply nails. Every service here is not only for cosemetic purposes but also for maintaining well-being. She hopes to show more people Perfect Nails and increase business. In the future, look forward to being able to pay through the website, book an appointment, buy gift cards, and be reminded of your appointments.
    </p>

    <img src="images/handsOnTowel.jpg" alt="Two hands placed on a grey towel with another set of hands filing their nails." width ="200" height ="110">

   
    <footer> 

        <p>Questions? Contact our Web Developer: Juliana Nguyen.</p>
        <a href="mailto:Juliana_nguyen@uri.edu"> Email Juliana </a>

    </footer>

    <script src="js/picAnimation.js"></script>
</body>
</html>