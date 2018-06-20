<?php include "includes/submit_form.php";?>
<?php include "includes/header.php"; ?>
<?php getToken(); ?>
    <body>     
        <div class="container-main container-mid clearfix">
                <div id="page-title">                      
                </div>
                <div id="background-layer">
                        <h1 class="heading center-text">Home Insurance Quote</h1>
                        <div class="info-box center-text"></div>
                        <div class="info-box">
                        <p>Due to the complex nature of quoting home insurance, we ask you to contact us so we are able to find you the best policy possible.</p>
                        </div>
                        <div class ="<?php if(count($errors) > 0) { echo "error"; } else echo "hidden";?>">
                        <?php echo display_errors(); ?>
                   </div>
                    </div>
                        <div class="container-mid formcontainer">
                                <form id="autoform" name="autoform" method="POST" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>" novalidate>                                    
                                        <fieldset>
                                                <legend><h2>Personal Information</h2></legend>
                                                
                                                <div class="grid-child form-block">
                                                        <label for="contact" class="label label-required">Full Name:</label>
                                                        <input type="text" class="input-text" maxlength="30" name="contact" id="contact" required placeholder="First and Last" <?php echo fill_form('contact')?>>
                                                </div>
                                                <div class="grid-child form-block">
                                                        <label for="email" class="label label-required">Email:</label>
                                                        <input type="email" id="email" class="input-text" name="email" required placeholder = "email@insurance.com" <?php echo fill_form('email')?> >
                                                </div>
                                                <div class="grid-child form-block">                                     
                                                        <label for="telephone" class="label label-required">Phone Number:</label>
                                                        <input type ="tel" id="telephone" class="input-text" name="telephone" required placeholder = "xxx-xxx-xxxx" <?php echo fill_form('telephone')?>>
                                                </div>
                                        </fieldset>
                                        <fieldset>
                                                <legend><h2>Message</h2></legend>
                                                <textarea id="comments" class="input-text" name="comments"></textarea>
                                                <input type="submit" class= "add_button" value="submit">
                                        </fieldset> 
                                <?php echo getTokenField(); ?>
                                </form>
                        </div>
        </div>
        <?php include "includes/footer.php";?>
</body>

</html>