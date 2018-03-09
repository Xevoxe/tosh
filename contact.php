<!DOCTYPE html>
<html lang = "en">
    <head>
        <title>Tosh Insruance Agency</title>
        <meta charset= "utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link type ="text/css" rel="stylesheet" href="css/splattfu.css">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link type ="text/css" rel="stylesheet" href="css/style.css">
        <link href="https://fonts.googleapis.com/css?family=Monda" rel="stylesheet">
    </head>
    <body>
        
<!-- Header -->
        <header id="header">
                <div id="headerlogo">
                        <img src ="images/logo.png" alt="Tosh Insurance Agency">
                </div>
            <h1>Tosh Insurance Agency</h1>
            <p><em>Serving East Texas since 1926.</em></p>
        </header>

<!-- Navbar -->
        <nav>
        <div id ="navbar">
            <a href="index.html">Home</a>
            <a href="#">Quotes</a>
            <a href="claims.html">Claims</a>
            <a href="payments.html">Payments</a>
            <a href="contact.html">Contact Us</a>
        </div>
        </nav>
<section>
        
        <h2>Contact Us!</h2>
        
        <div class="contact">
                <form id="contactus" method="post" action="">
                        
                       <label for="name">Name:</label>
                       <input type="text" onblur="textValidation('contactus', 'name')" name="name" id="name" required>
                       <span id="nameerror" class="error"></span><br>
                    
                        <label for="email">Email:</label>
                       <input type="email" id="email" name="email" required><br>
                       <span id="emailerror" class="error"></span>
                      
                       <label for="tele">Phone Number:</label>
                       <input type ="tel" id="tele" name="tele" required><br>
                       <span id="teleerror" class="error"></span>
                </fieldset>
                      <p>Message:</p>
                      <textarea name="message"></textarea>
                      <input type="submit" value="submit">
                </form>

        </div>
        
</section>
<!-- Footer -->
<section>
        <footer>
                <aside>
                        <h3>Rusk Office</h2>
                        <div class="content">
                                <p><i class="material-icons">phone</i> 903-683-5433</p>
                                <p>256 Main St</p>
                                <p>Rusk, TX 75785</p>
                        </div>
                </aside>
                <aside>
                       
                               <p><i class="material-icons">email</i> mailto:agency@toshinsurance.com</p>
                               <div class="smlogo">
                               <img src="images/logosm.png" alt="Tosh Insurance Agency">
                               </div>   
                        
                </aside>
                <aside>
                        <h3>Alto Office</h3>
                        <div class="content">
                                <p><i class="material-icons">phone</i> 903-683-5433</p>
                                <p>205 W. San Antonio St.</p>
                                <p>Alto, TX 75925</p>
                        </div>
                </aside>
                <div class="nav"> 
                <a href="index.html">Home</a>
                <a href="#">Quotes</a>
                <a href="claims.html">Claims</a>
                <a href="payments.html">Payments</a>
                <a href="contact.html">Contact Us</a>
                </div>
        </footer>
<section>

<script src= "source/main.js"></script>

</body>

</html>