<?php
  // Include the session script
  require 'includes/session.php';

  // If already logged in
  if ($logged_in) { 

    // Redirect to profile page   
    header('Location: index.php'); 

    // Stop further code running
    exit;
  }    

  // Check if the form was submitted.
  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the username the user sent
    $username = $_POST['username'];

    // Get the password the user sent
    $password = $_POST['password'];

    // Call your authenticate function in the 'session.php' file to authenticate the user based on the provided username and password. 
    $user = authenticate($pdo, $username, $password);

    // If username and password is valid (i.e., user data returned)
    if ($user) {
      // Call the login function in the 'session.php' file to update session data
      login($username);  

      // Redirect to profile page                             
      header('Location: index.php');

      // Stop further code running 
      exit;   
    }
  }

?> 

<!DOCTYPE>
<html>

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="css/style1.css" type="text/css" rel="stylesheet">
    <link href="css/login.css" type="text/css" rel="stylesheet">
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

    <div id="content" class="animate-bottom">
      
      <h1 class="titles">Log In</h1>
      <hr />
      <br />
      
      <form method="POST" action="login.php">
        Username: <input type="username" name="username"><br>
        Password: <input type="password" name="password"><br>
        <input type="submit" value="Log In">
      </form>

    </div>

  </body>
</html>


