<?php include "includes/header.php"; ?>
    <body>     
        <div class="container-main container-mid clearfix">
                <div id="page-title">                      
                </div>
                <div id="background-layer">
                        <h1 class="heading center-text">Home Insurance Quote</h1>
                        <div class="info-box">
                        <p>Due to the complex nature of quoting home insurance, we ask you to contact us so we are able to find you the best policy possible.</p>
                        </div>
                    </div>
                        <div class="container-mid formcontainer">
                                <form id="autoform" name="autoform" method="post" action="">                                    
                                        <fieldset>
                                                <legend><h2>Personal Information</h2></legend>
                                                
                                                <div class="grid-child form-block">
                                                        <label for="name" class="label label-required">Full Name:</label>
                                                        <input type="text" class="input-text" maxlength="30" name="name" id="name" required placeholder="First and Last">
                                                </div>
                                                <div class="grid-child form-block">
                                                        <label for="email" class="label label-required">Email:</label>
                                                        <input type="email" id="email" class="input-text" name="email" required placeholder = "email@insurance.com" pattern="[^@]+@[^@]+\.[a-zA-Z]{2,6}">
                                                </div>
                                                <div class="grid-child form-block">                                     
                                                        <label for="tele" class="label label-required">Phone Number:</label>
                                                        <input type ="tel" id="tele" class="input-text" name="tele" required placeholder = "xxx-xxx-xxxx" maxlength="12" pattern="\d{3}[\-]\d{3}[\-]\d{4}">
                                                </div>
                                        </fieldset>
                                        <fieldset>
                                                <legend><h2>Message</h2></legend>
                                                <textarea id="comments" class="input-text" name="comments"></textarea>
                                                <input type="submit" class= "error" value="submit">
                                        </fieldset> 
                                </form>
                        </div>
        </div>
        <?php include "includes/footer.php";?>
</body>

</html>