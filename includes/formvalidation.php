<?php

$requiredElements = array( "contact" => "Name required.", "email" => "Email required." , "telephone"=>"Telephone required.",
                           "street" => "Street required.", "zipcode" => "Zipcode required.", "city" => "City required.",
                           "year" => "Vehicle Year required.", "make" => "Vehicle Make required.", "model" => "Vehicle Model required.",
                           "driver_name" => "Driver's name required.", "date_of_birth" => "Driver's DOB required.", "license" => "Driver's License required.",
                           "vehicle_use" => "Vehicle use required." );
$errors = array();
$formElements = array();

$validated = true;


if($_SERVER["REQUEST_METHOD"] == "POST"){

    foreach($_POST as $element => $element_Value){
        $formElements[$element] = check_input($element_Value);
        if(empty($element_Value) && isset($requiredElements[$element])){
            $validated = false;
            $errors[$element] = $requiredElements[$element];
        }
    }

    //Validate special case for radio buttons
    if(!isset($_POST["vehicle_use"])){
        $validated = false;
        $errors['vehicle_use'] = $requiredElements['vehicle_use'];
    }


    if($validated == true){
        send_Mail($formElements);        
    }
}

function display_errors() {
    global $errors;
    if($_SERVER["REQUEST_METHOD"] == "POST"){
        foreach($errors as $error => $errorMsg){
            echo $errorMsg;
            echo "<br>";
        }
    }
    return;
}

function send_mail($data){

    $to = "servertesting007@gmail.com";
    $subject = "Website Contact Request";
    $headers = "From: ". $data['email'] . "\r\n";
    $msg = "";

    foreach($_POST as $element => $element_Value){
        $msg .= $element . ": " . $element_Value . "\r\n\n";
    }

    mail($to,$subject,$msg,$headers);
}

function check_input($data) {
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

function fill_form($formElement){
    global $formElements;
    if(isset($formElements[$formElement]) && !empty($formElements[$formElement])) { 
        return 'value ="' . $formElements[$formElement] . '"'; 
    }
}
?>