    <?php include "includes/header.php"; ?>
    <body>     
        <div class="container-main container-mid clearfix">
                <div id="page-title">                
                </div>
                <div id="background-layer">
                   <h1 class="heading center-text">Contact Us</h1>
                   <div class ="<?php if(count($errors) > 0) { echo "error"; } else echo "hidden";?>">
                        <?php echo display_errors(); ?>
                   </div>
                   <? php echo $submitMsg; ?>
                </div>
                        <div class="container-mid formcontainer">
                                <form id="contact" name="contact" method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">                                    
                                        <fieldset>
                                                <legend><h2>Personal Information</h2></legend>
                                                
                                                <div class="grid-child form-block">
                                                        <label for="name" class="label label-required">Full Name:</label>
                                                        <input type="text" class="input-text" maxlength="30" name="contact" id="name" placeholder="First and Last" value ="<?php echo fill_form('contact'); ?>">
                                                </div>
                                                <div class="grid-child form-block">
                                                        <label for="email" class="label label-required">Email:</label>
                                                        <input type="email" id="email" class="input-text" name="email" placeholder = "email@insurance.com" value ="<?php echo fill_form('email'); ?>">
                                                </div>
                                                <div class="grid-child form-block">                                     
                                                        <label for="tele" class="label label-required">Phone Number:</label>
                                                        <input type ="tel" id="tele" class="input-text" name="telephone" placeholder = "xxx-xxx-xxxx" maxlength="12" pattern="\d{3}[\-]\d{3}[\-]\d{4}" value ="<?php echo fill_form('telephone'); ?>">
                                                </div>
                                        </fieldset>
                                        <fieldset>
                                                <legend><h2>Message</h2></legend>
                                                <textarea id="comments" class="input-text" name="comments" ><?php echo fill_form('comments'); ?></textarea>
                                                <input type="submit" class= "add_button" value="submit">
                                        </fieldset> 
                                </form>
                        </div>
        </div>
        <?php include "includes/footer.php";?>
</body>

</html>