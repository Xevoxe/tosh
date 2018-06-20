<?php
session_start();

$requiredElements = array( "contact" => "Name required.", "email" => "Email required." , "telephone"=>"Telephone required.",
                           "street" => "Street required.", "zipcode" => "Zipcode required.", "city" => "City required.",
                           "year" => "Vehicle Year required.", "make" => "Vehicle Make required.", "model" => "Vehicle Model required.",
                           "driver_name" => "Driver's name required.", "date_of_birth" => "Driver's DOB required.", "license" => "Driver's License required.");
$errors = array();
$formElements = array();

$validated = true;

//Generate Token
function getToken(){
    if(!isset($_SESSION['user_token'])){
        $_SESSION['user_token'] = md5(uniqid());
    }
}

//Checks session token
function checkToken($token){
    if($token != $_SESSION['user_token']){
        header('location: 404.php');
        exit;
    }
}
//Retrieves token from form
function getTokenField(){
    return '<input type="hidden" name="token" value="'.$_SESSION['user_token'].'">';

}
//Destroys Token
function destroyToken(){
    unset($_SESSION['user_token']);
}


if($_POST){

    //Check token
    checkToken($_POST['token']);

    foreach($_POST as $element => $element_Value){
        $formElements[$element] = check_input($element_Value);
        if(empty($element_Value) && isset($requiredElements[$element])){
            $validated = false;
            $errors[$element] = $requiredElements[$element];
        }
    }

    if($validated == true){
        $mail_sent = send_Mail($formElements); 
    }       
    
    if(!$mail_sent){
        $output = json_encode(array('type'=>'error', 'text' => 'Error submitting form.  Please try again.'));
        die($output);
    }
    else{
        $output = json_encode(array('type' => 'message','text' => 'Your request has been submitted and you will hear from one of our agents shortly.'));
        die($output);
    }

    destroyToken();
}

//Display errors to the page in case javascript is disabled.
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
        $msg .= ucfirst(str_replace("_", " " , $element)) . ": " . $element_Value . "\r\n\n";
    }

    return mail($to,$subject,$msg,$headers);
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