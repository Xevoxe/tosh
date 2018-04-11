    <?php include "includes/header.php"; ?>
    <body>     
        <div class="container-main container-mid clearfix">
                <div id="page-title">                      
                </div>
                <div id="background-layer">
                        <h1 class="heading center-text">Motorcycle/ATV Insurance Quote</h1>
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
                                                        <label for="address" class="label label-required">Address:</label>
                                                        <input type="text" id="address" class="input-text" name="address" maxlength="30" placeholder="1234 Street" required>
                                                </div>
                                                <div class="grid-child form-block">
                                                        <label for="addressline" class="label label-required">Address Line:</label>
                                                        <input type="text" id="addressline" class="input-text" name="addressline" maxlength="30" placeholder="PO Box/Suite/Apt">
                                                </div>
                                                <div class="grid-child form-block">
                                                        <label for="zipcode" class="label label-required">Zipcode:</label>
                                                        <input type="text" id="zipcode" class="input-text" name="zipcode" pattern="^\d{5}(?:[-\s]\d{4})?$">
                                                </div>
                                                <div class="grid-child form-block">
                                                        <label for="city" class="label label-required">City:</label>
                                                        <input type="text" id="city" class="input-text" name="city" maxlength="30">
                                                </div>
                                                <div class="grid-child form-block" id="state">
                                                        <label for="stateabbr" class="label label-required">State:</label>
                                                        <select name="state" id= "stateabbr" class="selector">
                                                                <option value="AL">AL</option>
                                                                <option value="AK">AK</option>
                                                                <option value="AZ">AZ</option>
                                                                <option value="AR">AR</option>
                                                                <option value="CA">CA</option>
                                                                <option value="CO">CO</option>
                                                                <option value="CT">CT</option>
                                                                <option value="DE">DE</option>
                                                                <option value="DC">DC</option>
                                                                <option value="FL">FL</option>
                                                                <option value="GA">GA</option>
                                                                <option value="HI">HI</option>
                                                                <option value="ID">ID</option>
                                                                <option value="IL">IL</option>
                                                                <option value="IN">IN</option>
                                                                <option value="IA">IA</option>
                                                                <option value="KS">KS</option>
                                                                <option value="KY">KY</option>
                                                                <option value="LA">LA</option>
                                                                <option value="ME">ME</option>
                                                                <option value="MD">MD</option>
                                                                <option value="MA">MA</option>
                                                                <option value="MI">MI</option>
                                                                <option value="MN">MN</option>
                                                                <option value="MS">MS</option>
                                                                <option value="MO">MO</option>
                                                                <option value="MT">MT</option>
                                                                <option value="NE">NE</option>
                                                                <option value="NV">NV</option>
                                                                <option value="NH">NH</option>
                                                                <option value="NJ">NJ</option>
                                                                <option value="NM">NM</option>
                                                                <option value="NY">NY</option>
                                                                <option value="NC">NC</option>
                                                                <option value="ND">ND</option>
                                                                <option value="OH">OH</option>
                                                                <option value="OK">OK</option>
                                                                <option value="OR">OR</option>
                                                                <option value="PA">PA</option>
                                                                <option value="RI">RI</option>
                                                                <option value="SC">SC</option>
                                                                <option value="SD">SD</option>
                                                                <option value="TN">TN</option>
                                                                <option value="TX">TX</option>
                                                                <option value="UT">UT</option>
                                                                <option value="VT">VT</option>
                                                                <option value="VA">VA</option>
                                                                <option value="WA">WA</option>
                                                                <option value="WV">WV</option>
                                                                <option value="WI">WI</option>
                                                                <option value="WY">WY</option>
                                                        </select> 
                                                        
                                                </div>
                                                <div class="grid-child form-block">
                                                        <label for="email" class="label label-required">Email:</label>
                                                        <input type="email" id="email" class="input-text" name="email" required placeholder = "email@insurance.com" pattern="[^@]+@[^@]+\.[a-zA-Z]{2,6}">
                                                </div>
                                                <div class="grid-child form-block">                                     
                                                        <label for="tele" class="label label-required">Phone Number:</label>
                                                        <input type ="tel" id="tele" class="input-text" name="tele" required placeholder = "xxx-xxx-xxxx" maxlength="12" pattern="\d{3}[\-]\d{3}[\-]\d{4}">
                                                </div>
                                                <div class="grid-child form-block">                
                                                        <label for="occupation" class=" label">Occupation:</label>
                                                        <input type="text" id="occupation" class="input-text" name="occupation" maxlength="30">
                                                </div>
                                        </fieldset>
                                        <div id="vehicles" class="add">                            
                                        <fieldset>
                                                <legend><h2>Vehicle Information</h2></legend>
                                                <div class="add-container">
                                                        <div class="grid-child form-block">
                                                                <label for="year" class="label label-required">Year:</label>
                                                                <input type="text" id="year" class="input-text" name="year" required pattern="\d{4}" placeholder="2018">
                                                        </div>
                                                        <div class="grid-child form-block">
                                                                <label for="make" class="label label-required">Make:</label>
                                                                <input type="text" id= "make" class="input-text" name="make" required>
                                                        </div>
                                                        <div class="grid-child form-block">
                                                                <label for="model" class="label label-required">Model:</label>
                                                                <input type="text" id="model" class="input-text" name="model" required>
                                                        </div>
                                                <div class="form-block grid-child">
                                                        <label for="vin" class="label">VIN:</label>
                                                        <input type="text" id="vin" class="input-text" name="vin">
                                                </div>
                                                <div class="form-block grid-child">
                                                        <label for="value" class="label label-required">Value:</label>
                                                        <input type="text" id="value" class="input-text" name="value">                            
                                                </div>
                                                <div class="form-block grid-child">
                                                        <label for="ccsize" class="label label-required">CC Size:</label>
                                                        <input type="text" id="ccsize" class="input-text" name="value">                            
                                                </div>
</div>
                                        </fieldset>
                                        </div>
                                        <fieldset>
                                        <legend><button class="add_button" type="button" onclick="addMotorcycle(vehicles)">Add Vehicle</button></legend>
                                        </fieldset>
                                        <div id="drivers" class="add"><!--Drivers-->
                                                <fieldset>  
                                                       
                                                        <legend><h2>Driver Information</h2></legend>
                                                        <div class="add-container">
                                                                <div class="grid-child form-block" id="driver-info">
                                                                        <label for="drivername" class="label label-required">Driver's Name:</label>
                                                                        <input type="text" id="drivername" class="input-text" name="drivername" required maxlength="30">
                                                                </div>
                                                                <div class="grid-child form-block">
                                                                        <label for="birthdate" class="label label-required">Date of Birth:</label>
                                                                        <input type="date" id="birthdate" class="input-text" name="dob" required>
                                                                </div>
                                                                <div class="grid-child form-block">
                                                                        <label for="licensenumber" class="label label-required">Driver License #:</label>
                                                                        <input type="text" id="licensenumber" class="input-text" name="license" maxlength="10">
                                                                </div>
                                                        </div>                                                          
                                                </fieldset>
                                        </div>
                                        <fieldset>
                                        <legend><button class="add_button" type="button" onclick="addDriver(drivers)">Add Driver</button></legend>
                                        </fieldset>
                                        <!--Dyanmic Driver Content-->
                                        <fieldset>
                                                <legend><h2>Current Insurer (If applicable)</h2></legend>
                                                <div class="grid-child form-block">
                                                        <label for="company" class="label">Company:</label>
                                                        <input type="text" id="company" class="input-text" name="company" maxlength="20">
                                                </div>
                                                <div class="grid-child form-block" id="time-company">
                                                        <p class="label">Time with company:</p>
                                                        <label for="years" class="display-inline">Year(s):</label>
                                                        <input type="text" id="years" class="input-text" size="2" name="years">
                                                        <label for="months" class="display-inline">Month(s):</label>
                                                        <input type="text" id="months" class="input-text" name="months" size="2">
                                                </div>                  
                                        </fieldset>
                                        <fieldset>
                                                <legend><h2>Coverage Information</h2></legend>
                                                <div class="grid-child form-block">
                                                        <label for="liabilitylimits" class="label">Liability Limits:</label>
                                                        <input type="text" id="liabilitylimits" name="liabilitylimits" class="input-text" pattern="\d">
                                                </div>
                                                <div class="form-block" id="coverages">
                                                        <label class="label">Select Coverages:</label>
                                                        <label><input type="checkbox" name="motorist" value="motorist">Uninsured/Underinsured</label>
                                                        <label><input type="checkbox" name="collision" value="collision">Collision Deductible</label>
                                                        <label><input type="checkbox" name="comprehensive" value="comprehensive">Comprehensive Deductible</label>
                                                        <label><input type="checkbox" name="protection" value="protection">Personal Injury Protection</label>
                                                        <label><input type="checkbox" name="medical" value="medical">Medical Payments</label>
                                                        <label><input type="checkbox" name="rental" value="rental">Rental Coverage</label>
                                                        <label><input type="checkbox" name="towing" value="towing">Towing</label>
                                                </div>
                                        </fieldset>    
                                        <fieldset>
                                                <legend><h2>Additional Comments</h2></legend>
                                                <textarea id="comments" class="input-text" name="comments"></textarea>
                                                <input type="submit" class= "add_button error" value="submit">
                                        </fieldset>         
                                </form>
                        </div>
        </div>
        <?php include "includes/footer.php";?>
</body>

</html>