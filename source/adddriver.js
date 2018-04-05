var driverId = 1;
var vehicleId = 1;
var recId= 1;

function addDriver(container){
    driverId++;   //Tracks added drivers
    var fieldset = document.createElement("fieldset");
    var id = "driver_" + driverId;
    var html = '<legend><h2>Driver ' + '# ' + driverId + '</h2></legend>' +
                '<div class="add-container">' +
                '<div class="grid-child form-block" id="driver-info">' +
                '<label for="drivername" class="label label-required">Driver\'s Name:</label>'+
                '<input type="text" class="input-text" name="drivername" required maxlength="30">' +
                '</div>' +
                '<div class="grid-child form-block">' +
                '<label for="birthdate" class="label label-required">Date of Birth:</label>' +
                '<input type="date" class="input-text" name="dob" required>' +
                '</div>' +
                '<div class="grid-child form-block">' +
                '<label for="licensenumber" class="label label-required">Driver License #:</label>' +
                '<input type="text" class="input-text" name="license" maxlength="10">' +
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
    var fieldset= document.createElement("fieldset");
    var html = '<legend><h2>Vehicle #' + vehicleId +'</h2></legend>' +
                '<div class="add-container">' +
                '<div class="grid-child form-block">' +
                '<label for="year" class="label label-required">Year:</label>' +
                '<input type="text" class="input-text" name="year" required pattern="\d{4}" placeholder="2018">' +
                '</div>' +
                '<div class="grid-child form-block">' +
                '<label for="make" class="label label-required">Make:</label>' +
                '<input type="text" class="input-text" name="make" required>' +
                '</div>' +
                '<div class="grid-child form-block">' +
                '<label for="model" class="label label-required">Model:</label>' +
                '<input type="text" class="input-text" name="model" required>' +
                '</div>' +
                '<div class="form-block grid-child">' +
                '<label for="VIN" class="label">VIN:</label>' +
                '<input type="text" class="input-text" name="vin">' +
                '</div>' +
                '<div class="form-block grid-child" id="vehicle-info">' +
                '<label for="vehicleuse" class="label label-required">Vehicle Use:</label>' +
                '<label class="display-inline"><input type="radio" name="vehicleuse" value="Business">Business</label>' +
                '<label class="display-inline"><input type="radio" name="vehicleuse" value="Pleasure">Pleasure</label>' +
                '<label class="display-inline"><input type="radio" name="vehicleuse" value="School/Work">School/Work</label>' +                             
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
    var fieldset= document.createElement("fieldset");
    var html = '<legend><h2>Vehicle #' + recId +'</h2></legend>' +
                '<div class="add-container">' +
                '<div class="grid-child form-block">' +
                '<label for="year" class="label label-required">Year:</label>' +
                '<input type="text" class="input-text" name="year" required pattern="\d{4}" placeholder="2018">' +
                '</div>' +
                '<div class="grid-child form-block">' +
                '<label for="make" class="label label-required">Make:</label>' +
                '<input type="text" class="input-text" name="make" required>' +
                '</div>' +
                '<div class="grid-child form-block">' +
                '<label for="model" class="label label-required">Model:</label>' +
                '<input type="text" class="input-text" name="model" required>' +
                '</div>' +
                '<div class="form-block grid-child">' +
                '<label for="VIN" class="label">VIN:</label>' +
                '<input type="text" class="input-text" name="vin">' +
                '</div>' +
                '<div class="form-block grid-child">' +
                '<label for="value" class="label label-required">Value:</label>' +
                '<input type="text" id="value" class="input-text" name="value">' +
                '</div>' +
                '<div class="form-block grid-child">' +
                '<label for="ccsize" class="label label-required">CC Size:</label>' +
                '<input type="text" id="ccsize" class="input-text" name="value">' +
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
