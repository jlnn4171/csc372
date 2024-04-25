<?php
	// Include the session script
	include 'includes/session.php';

	// Call the logout function in the 'session.php' file to terminate session
	logout();

	// Redirect to index page
	header('Location: index.php');
?>