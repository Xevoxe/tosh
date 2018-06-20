var driverId = 1;
var vehicleId = 1;
var recId= 1;

function addDriver(container){
    driverId++;   //Tracks added drivers
    var fieldset = document.createElement("fieldset");
    var id = "driver_" + driverId;
    var name = id + "_name";
    var dob = id + "_date_of_birth";
    var license = id + "_license";
    var html = '<legend><h2>Driver ' + '# ' + driverId + '</h2></legend>' +
                '<div class="add-container">' +
                '<div class="grid-child form-block" id="driver-info">' +
                '<label for="' + name +'" class="label label-required">Driver\'s Name:</label>'+
                '<input type="text" id ="' + name + '" class="input-text" name ="' + name + '" maxlength="30" required <?php echo fill_form(' + name + '); ?> ' +
                '</div>' +
                '<div class="grid-child form-block">' +
                '<label for="' + dob + '" class="label label-required">Date of Birth:</label>' +
                '<input type="date" id ="' + dob + '" class="input-text" name="' + dob + '" required <?php echo fill_form(' + dob + '); ?> ' +
                '</div>' +
                '<div class="grid-child form-block">' +
                '<label for="' + license + '" class="label label-required">Driver License #:</label>' +
                '<input type="text" id ="' + license + '" class="input-text" name="' + license + '" maxlength="10" required <?php echo fill_form(' + license + '); ?> ' +
                '</div>' +
                '</div>' +
                '<button type="button" class="x" class="add_button" onclick="remove('+id+')">X</button>';
    fieldset.innerHTML = html;
    fieldset.setAttribute("id",id);
    container.appendChild(fieldset);   
}

function addVehicle(container){
    vehicleId++;
    var id ="vehicle_" + vehicleId;
    var year = id + "_year";
    var make = id + "_make";
    var model = id + "_model";
    var vin = id +"_vin";
    var use = "vehicle" + id + "_use";
    var fieldset= document.createElement("fieldset");
    var html = '<legend><h2>Vehicle #' + vehicleId +'</h2></legend>' +
                '<div class="add-container">' +
                '<div class="grid-child form-block">' +
                '<label for="' + year + '" class="label label-required">Year:</label>' +
                '<input type="text" class="input-text" name="' + year + '" id="' + year + '" required placeholder="2018">' +
                '</div>' +
                '<div class="grid-child form-block">' +
                '<label for="' + make + '" class="label label-required">Make:</label>' +
                '<input type="text" class="input-text" name="' + make +'" id="' + make + '" required>' +
                '</div>' +
                '<div class="grid-child form-block">' +
                '<label for="' + model +'" class="label label-required">Model:</label>' +
                '<input type="text" class="input-text" name="' + model +'" id="' + model + '" required>' +
                '</div>' +
                '<div class="form-block grid-child">' +
                '<label for="' + vin +'" class="label">VIN:</label>' +
                '<input type="text" class="input-text" name="' + vin +'" id="' + vin + '">' +
                '</div>' +
                '<div class="form-block grid-child" id="vehicle-info">' +
                '<label for="' + use + '" class="label label-required">Vehicle Use:</label>' +
                '<label class="display-inline"><input type="radio" name="' + use + '" value="Business">Business</label>' +
                '<label class="display-inline"><input type="radio" name="' + use + '" value="Pleasure">Pleasure</label>' +
                '<label class="display-inline"><input type="radio" name="' + use + '" value="School/Work">School/Work</label>' +                             
                '</div>' +
                '</div>' +
                '<button type="button" class="x" class="add_button" onclick="remove('+id+')">X</button>';
    fieldset.innerHTML = html;
    fieldset.setAttribute("id", id);
    container.appendChild(fieldset);
}

function addMotorcycle(container){
    recId++;
    var id ="rec_" + recId;
    var year = id + "_year";
    var make = id + "_make";
    var model = id + "_model";
    var vin = id +"_vin";
    var value = id + "_value";
    var ccsize = id + "_ccsize";
    var fieldset= document.createElement("fieldset");
    var html = '<legend><h2>Vehicle #' + recId +'</h2></legend>' +
                '<div class="add-container">' +
                '<div class="grid-child form-block">' +
                '<label for="' + year +'" class="label label-required">Year:</label>' +
                '<input type="text" id="' + year +'" class="input-text" name="' + year + '" required placeholder="2018">' +
                '</div>' +
                '<div class="grid-child form-block">' +
                '<label for="' + make +'" class="label label-required">Make:</label>' +
                '<input type="text" class="input-text" name="' + make +'" id="' + make + '"required>' +
                '</div>' +
                '<div class="grid-child form-block">' +
                '<label for="' + model +'" class="label label-required">Model:</label>' +
                '<input type="text" class="input-text" name="' + model +'" id="' + model + '" required>' +
                '</div>' +
                '<div class="form-block grid-child">' +
                '<label for="' + vin +'" class="label">VIN:</label>' +
                '<input type="text" class="input-text" name="' + vin +'" id="' + vin + '">' +
                '</div>' +
                '<div class="form-block grid-child">' +
                '<label for="' + value +'" class="label label-required">Value:</label>' +
                '<input type="text" class="input-text" name="' + value +'" id="' + value + '" required>' +
                '</div>' +
                '<div class="form-block grid-child">' +
                '<label for="' + ccsize +'" class="label label-required">CC Size:</label>' +
                '<input type="text" class="input-text" name="' + year +'" id="' + ccsize + '" required>' +
                '</div>' +
                '</div>' +
                '<button type="button" class="x" class="add_button" onclick="remove('+id+')">X</button>';
    fieldset.innerHTML = html;
    fieldset.setAttribute("id", id);
    container.appendChild(fieldset);
}




function remove(element){
    element.parentNode.removeChild(element);
    var typeElement = element.id;;
    
    if(typeElement.search("vehicle") === 0){
        vehicleId--;
    }
    else driverId--;
}