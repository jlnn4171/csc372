<?php
	// Include the session script
	include 'includes/session.php';
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- css files lnked -->
    <link href="css/style1.css" type="text/css" rel="stylesheet">
    <link href="css/contact.css" type="text/css" rel="stylesheet">

    <title>Perfect Nails Contacts</title>

    <!-- linking leaflet api -->
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossorigin=""/>

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
        <h1 class = "titles"> Ways You Can Reach Us </h1>
    </div>

    <br><br>

    <div class = "fadeIn">
        <div class = "containerT">    
            <h3> Business Number </h3>
        </div>

        <div class = "containerG">
            <p>Call now at 401-946-4611!</p>
        </div>
    </div>

    <br>

    <div class = "fadeIn">
        <div class = "containerT">
            <h3> Location </h3>
        </div>

        <div class = "containerG">
            <p>1466 Park Ave, Cranston, RI 02920</p>
            
            <div class = "center" id="map"></div>
            <br>
        </div>
        
    </div>
    
    <br>

    <div class = "fadeIn">

        <div class = "containerT">
            <h3> Hours of Operation </h3>
        </div>    

        <div class = "containerG">
            <table class = "center">
                <tr>
                    <th> Day </th>
                    <th> Hours </th>
                </tr>
                <tr>
                    <td> Mon </td>
                    <td> 9:30 AM - 7:00 PM </td>
                </tr>
                <tr>
                    <td> Tues </td>
                    <td> 9:30 AM - 7:00 PM </td>
                </tr>
                <tr>
                    <td> Wed </td>
                    <td> 9:30 AM - 7:00 PM </td>
                </tr>
                <tr>
                    <td> Thur </td>
                    <td> 9:30 AM - 7:00 PM </td>
                </tr>
                <tr>
                    <td> Fri </td>
                    <td> 9:30 AM - 7:00 PM </td>
                </tr>
                <tr>
                    <td> Sat </td>
                    <td> 9:30 AM - 7:00 PM </td>
                </tr>
                <tr>
                    <td> Sun </td>
                    <td> CLOSED </td>
                </tr>
            </table>
        </div>
    
    </div>

    <!-- linking jquery -->
    <script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
    
    <!-- linking other js files -->
    <script src="js/map.js"></script>
    <script src="js/fade.js"></script>

    <!-- linking script for leaflet api -->
    <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
    integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
    crossorigin=""></script>

</body>
</html>