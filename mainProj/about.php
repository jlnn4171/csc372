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
    <link href="css/about.css" type="text/css" rel="stylesheet">
    <title>Perfect Nails About</title>
</head>

<body class = bgColor>

    <!-- Navigation Bar -->
    <div class = navBar>
        <img src="images/perfectnailslogo.png" alt="Orange window pane shape with the words 'Perfect Nails' in the center. Theres an open pink nail polish bottle to the right and nail clippers on the left of it." width ="110" height ="86">

        <a href="index.php"> Homepage </a> 
        <a href="services.php"> Services </a> 
        <a href="contact.php"> Contact </a> 
        <a href="about.php"> About </a>
        <?= $logged_in ? '<a href="book.php"> Booking </a>' : '<a href="login.php">Booking</a>'; ?>
        <?= $logged_in ? '<a href="logout.php">Log Out</a>' : '<a href="login.php">Log In</a>'; ?>
    </div>

    <div class = "containerMT">
        <h1 class="titles">About Perfect Nails </h1>
    </div>
    
    <div>
        
        <div class="book-layout">
            <div id="team" style="margin-left: 15%;">
                <img id="roseHead-img" src="images/roseHead.jpg" alt="Rosemary Nguyen">
                
                <img id="andyHead-img" src="images/andyHead.jpg" alt="Andy Nguyen">
                <img id="tiffHead-img" src="images/tiffHead.jpg" alt="Tiffany Huynh">
                <img id="tinaHead-img" src="images/tinaHead.jpg" alt="Tina Huynh">
                <img id="lindsHead-img" src="images/lindsHead.jpg" alt="Lindsey Truong">
            </div>
        </div>

        <div class="book-layout">
            <div id="details">
                <h3>Click on a team member from the left to learn more!</h3>
            </div>
        </div>

    </div>

    <script src="js/team-html.js"></script>
</body>
</html>