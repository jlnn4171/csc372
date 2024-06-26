<?php

	// Include the session script
	include 'includes/session.php';
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- css files linked -->
    <link href="css/style1.css" type="text/css" rel="stylesheet">
    <link href="css/services.css" type="text/css" rel="stylesheet">

    <title>Perfect Nails Services</title>
</head>

<body class = bgColor>

    <!-- Navigation Bar -->
    <div class = "navBar">
        <img src="images/perfectnailslogo.png" alt="Orange window pane shape with the words 'Perfect Nails' in the center. Theres an open pink nail polish bottle to the right and nail clippers on the left of it." width ="110" height ="86">

        <a href="index.php"> Homepage </a> 
        <a href="services.php"> Services </a> 
        <a href="contact.php"> Contact </a> 
        <a href="about.php"> About </a>
        <?= $logged_in ? '<a href="book.php"> Booking </a>' : '<a href="login.php">Booking</a>'; ?>
        <?= $logged_in ? '<a href="logout.php">Log Out</a>' : '<a href="login.php">Log In</a>'; ?>
    </div>
    
    <div class = "containerMT">
        <h1 class = "titles"> Services Offered at Perfect Nails </h1>
    </div>

    <br>

    <div class = "fadeIn">
        <div class = "containerG">
            <p> In the 'Response' text boxes below, type 'yes' if you would like to see the estimation of the costs altogether. Otherwise, leave it blank. </p>
        </div>
    </div>

    <form>
        <div class = "fadeIn">
            
            <div class = "containerT">
                <h3> Eyelash Extensions </h3>
                <img src="images/lashStockPic.jpg" alt = "eyelash extensions being applied by tweezers to a closed eye" width ="220" height ="172">
            </div>

            <div class = "containerG">
                <table class = "center">
                    <tr>
                        <th>Service</th>
                        <th>Cost</th>
                        <th>Response</th>
                    </tr>
                    <tr>
                        <td> Regular </td>
                        <td> $<span class="cost">45</span>+</td>
                        <td><input type="text" class="choice"></td>
                    </tr>
                    <tr>
                        <td> Regular With Added Volume </td>
                        <td> $<span class="cost">60</span>+</td>
                        <td><input type="text" class="choice"></td>
                    </tr>
                    <tr>
                        <td> Individual Lashes </td>
                        <td> $<span class="cost">130</span>+</td>
                        <td><input type="text" class="choice"></td>
                    </tr>
                    <tr>
                        <td> Individual Lashes With Added Volume </td>
                        <td> $<span class="cost">160</span>+</td>
                        <td><input type="text" class="choice"></td>
                    </tr>
                </table>
            </div>
        </div>

        <br>

        <div class = "fadeIn">

            <div class = "containerT">
                <h3> Facials </h3>
                <img src="images/facialStockPic.jpg" alt = "paintbrush applying facial on woman's face" width ="220" height ="172">
            </div>

            <div class = "containerG">
                <table class = "center">
                    <tr>
                        <th>Service</th>
                        <th>Cost</th>
                        <th>Response</th>
                    </tr>
                    <tr>
                        <td> Mini </td>
                        <td> $<span class="cost">40</span></td>
                        <td><input type="text" class="choice"></td>
                    </tr>
                    <tr>
                        <td> Full </td>
                        <td> $<span class="cost">60</span></td>
                        <td><input type="text" class="choice"></td>
                    </tr>
                    <tr>
                        <td> Face Lift </td>
                        <td> $<span class="cost">100</span></td>
                        <td><input type="text" class="choice"></td>
                    </tr>
                </table>
            </div>
        </div>

        <br>

        <div class = "fadeIn">
            
            <div class = "containerT">
                <h3> Nail Treatments </h3>
                <img src="images/frenchTipsSetStockPic.jpg" alt = "nails and toes done in french design" width ="220" height ="172">
            </div>
        </div>

        <div class = "fadeIn">
            <div class = "containerG">
                <table class = "center">
                    <tr>
                        <th>Service</th>
                        <th>Cost</th>
                        <th>Response</th>
                    </tr>
                    <tr>
                        <td> Acrylic Full Set </td>
                        <td> $<span class="cost">30</span>+</td>
                        <td><input type="text" class="choice"></td>
                    </tr>
                    <tr>
                        <td> Fill </td>
                        <td> $<span class="cost">20</span></td>
                        <td><input type="text" class="choice"></td>
                    </tr>
                    <tr>
                        <td> Regular Manicure </td>
                        <td> $<span class="cost">16</span></td>
                        <td><input type="text" class="choice"></td>
                    </tr>
                    <tr>
                        <td> Gel Manicure </td>
                        <td> $<span class="cost">30</span></td>
                        <td><input type="text" class="choice"></td>
                    </tr>
                    <tr>
                        <td> Regular Pedicure </td>
                        <td> $<span class="cost">30</span></td>
                        <td><input type="text" class="choice"></td>
                    </tr>
                    <tr>
                        <td> Deluxe Pedicure </td>
                        <td> $<span class="cost">45</span></td>
                        <td><input type="text" class="choice"></td>
                    </tr>
                    <tr>
                        <td> Dead Sea Pedicure </td>
                        <td> $<span class="cost">55</span></td>
                        <td><input type="text" class="choice"></td>
                    </tr>
                    <tr>
                        <td> Manicure & Pedicure </td>
                        <td> $<span class="cost">44</span></td>
                        <td><input type="text" class="choice"></td>
                    </tr>
                    <tr>
                        <td> Nail Repair </td>
                        <td> $<span class="cost">4</span></td>
                        <td><input type="text" class="choice"></td>
                    </tr>
                    <tr>
                        <td> Nail Take Off </td>
                        <td> $<span class="cost">12</span>+</td>
                        <td><input type="text" class="choice"></td>
                    </tr>
                    <tr>
                        <td> Nail Decor </td>
                        <td> $<span class="cost">7</span>+</td>
                        <td><input type="text" class="choice"></td>
                    </tr>
                    <tr>
                        <td> Dip </td>
                        <td> $<span class="cost">45</span></td>
                        <td><input type="text" class="choice"></td>
                    </tr>
                    <tr>
                        <td> Cut Down </td>
                        <td> $<span class="cost">4</span></td>
                        <td><input type="text" class="choice"></td>
                    </tr>
                    <tr>
                        <td> Coating </td>
                        <td> $<span class="cost">30</span></td>
                        <td><input type="text" class="choice"></td>
                    </tr>
                    <tr>
                        <td> Polish Change </td>
                        <td> $<span class="cost">10</span>+</td>
                        <td><input type="text" class="choice"></td>
                    </tr>
                    <tr>
                        <td> Pink & White </td>
                        <td> $<span class="cost">65</span></td>
                        <td><input type="text" class="choice"></td>
                    </tr>
                </table>
            </div>
        </div>
        
        <br>

        <div class = "fadeIn">
            
            <div class = "containerT">
                <h3> Permanent Makeup </h3>
                <img src="images/microbladingStockPic.jpg" alt = "tip of tattoo gun over a woman's eyebrow" width ="220" height ="172">
            </div>
            
            <div class = "containerG">
                <table class = "center">
                    <tr>
                        <th>Service</th>
                        <th>Cost</th>
                        <th>Response</th>
                    </tr>
                    <tr>
                        <td> Eyebrow </td>
                        <td> $<span class="cost">395</span></td>
                        <td><input type="text" class="choice"></td>
                    </tr>
                    <tr>
                        <td> Eyeliner </td>
                        <td> $<span class="cost">380</span></td>
                        <td><input type="text" class="choice"></td>
                    </tr>
                    <tr>
                        <td> Lip Liner </td>
                        <td> $<span class="cost">255</span></td>
                        <td><input type="text" class="choice"></td>
                    </tr>
                    <tr>
                        <td> Full Lips </td>
                        <td> $<span class="cost">350</span></td>
                        <td><input type="text" class="choice"></td>
                    </tr>
                </table>
            </div>
        </div>

        <br>

        <div class = "fadeIn">
            
            <div class = "containerT">
                <h3> Waxing </h3>
            </div>
            
            <div class = "containerG">
                <table class = "center">
                    <tr>
                        <th>Service</th>
                        <th>Cost</th>
                        <th>Response</th>
                    </tr>
                    <tr>
                        <td> Eyebrow </td>
                        <td> $<span class="cost">10</span></td>
                        <td><input type="text" class="choice"></td>
                    </tr>
                    <tr>
                        <td> Lip </td>
                        <td> $<span class="cost">6</span></td>
                        <td><input type="text" class="choice"></td>
                    </tr>
                    <tr>
                        <td> Chin </td>
                        <td> $<span class="cost">14</span>+</td>
                        <td><input type="text" class="choice"></td>
                    </tr>
                    <tr>
                        <td> Jawline </td>
                        <td> $<span class="cost">13</span></td>
                        <td><input type="text" class="choice"></td>
                    </tr>
                    <tr>
                        <td> Shoulder </td>
                        <td> $<span class="cost">30</span></td>
                        <td><input type="text" class="choice"></td>
                    </tr>
                    <tr>
                        <td> Full Face </td>
                        <td> $<span class="cost">35</span></td>
                        <td><input type="text" class="choice"></td>
                    </tr>
                    <tr>
                        <td> Back </td>
                        <td> $<span class="cost">45</span>+</td>
                        <td><input type="text" class="choice"></td>
                    </tr>
                    <tr>
                        <td> Bikini </td>
                        <td> $<span class="cost">45</span>+</td>
                        <td><input type="text" class="choice"></td>
                    </tr>
                    <tr>
                        <td> Half Legs </td>
                        <td> $<span class="cost">35</span>+</td>
                        <td><input type="text" class="choice"></td>
                    </tr>
                    <tr>
                        <td> Full Legs </td>
                        <td> $<span class="cost">60</span>+</td>
                        <td><input type="text" class="choice"></td>
                    </tr>
                    <tr>
                        <td> Armpit </td>
                        <td> $<span class="cost">25</span>+</td>
                        <td><input type="text" class="choice"></td>
                    </tr>
                </table>
            </div>
        </div>

        <br>
        
        <div class = "fadeIn">

            <div class = "containerT">
                <h3>Estimation of Costs</h3>
            </div>
            
            <div class = "containerG">
                
                <p>Total for your selected services is $<span id="totalCost">0</span><br>
                Total for your selected services with tax is $<span id="totalCost2">0</span></p>
                
                <input type="button" value="Update Total" onclick="update()">
                <input type="reset" value="Clear Form"><br>
            </div>
        </div>

    </form>    

    <div class = "fadeIn">

        <div class = "containerT">
            <h3>Duration of Service Estimation</h3>
        </div>

        <div class = "containerG">
            <form id="contactForm" action="service.html">
                <input type="text" id="service" name="service" placeholder="enter a service"><br>
                <input type="submit" id="submit" value="Submit"><br>
                <input type="reset" value="Clear Form">
            </form>

            <div id="response"></div>
        </div>
    </div>
    
    <!-- jQuery linked -->
    <script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
    <script> window.jQuery || document.write('<script src="js/jquery-3.6.3.min.js"><\/script>')</script>
    
    <!-- other js files linked -->
    <script src="js/form.js"></script>
    <script src="js/cost.js"></script>
    <script src="js/fade.js"></script>
    <script src="js/picAnimation.js"></script>

</body>
</html>