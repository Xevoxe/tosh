//Validator Constructor
function Validator(form)
{

    this.form = document.forms[form];   //Points to the form that has validation

    //Check to ensure a form element was found
    if(!this.form){
        alert("Error: Unable to locate form: " + form);
        return;
    }

    this.validateBlur = true;   //Sets the validation to occur on blur

    this.addValidation = addValidation;     // Manually add a validation to a form element
    this.validateObject = validateObject;   //Validates only the Object
    this.debug = true;      //Add debug alerts
    this.validationTypeList = setUpStoredValidationTypes();   // The current validations the validator supports
    this.customValidationType = customValidationType;       //Creates a custom validation type
    this.setUpValidations = setUpValidations;
}

//Validation Object
function ValidationType(desc, value, errorMsg, testFunction)
{
    this.key = desc;                     //Description and key of the validation
    this.value = value;                  //value of the key if there is any
    this.errorMsg = errorMsg;            //Generic Error Message
    this.testFunction = testFunction;    // Function to test the validation

}

//Stored ValidationTypes
function setUpStoredValidationTypes()
{
    var list = [];

    list.push(new ValidationType("required", 0, "Required", testRequiredInput));
    list.push(new ValidationType("pattern", 0, "Invalid Input", testPattern));
    list.push(new ValidationType("maxlength", 0, "Maximum characters reached" , testMaxLength));
    return list;
}

//Add a custom validation Type
function customValidationType(desc, value, genericMsg, testFunction){
    this.validationTypeList[desc] = new ValidationType(desc, value, genericMsg, testFunction)
}

//This function sets up validations based on HTML form validations
function setUpValidations()
{
    var elements = this.form.elements;     //Get list of form elements
    //iterate through the elements to set up validations
    for( var item = 0 ; item < elements.length; item++){
        for( var val = 0 ; val < this.validationTypeList.length; val++)
        {
            var attribute = this.validationTypeList[val].key;
            var error = this.validationTypeList[val].errorMsg;
            var testFunction = this.validationTypeList[val].testFunction;

            if(elements[item].hasAttribute(attribute))
            {
                
                var value = elements[item].getAttribute(attribute);
                var newValidationType = new ValidationType(attribute,value,error,testFunction);
                //check to see  if the validation has a value
                if(value){
                    newValidationType.value = value;
                }
                this.addValidation(elements[item], newValidationType, error, elements[item].name + "error" )
            }
        }
    }
}


//Adds a validation to a form element
function addValidation(validationTarget, validationType, errorMsg, errorSpan)
{
    //check to see if a form element already has a validationList
    if(!validationTarget.validationList){
        var list = [];
        validationTarget.validationList = list;
    }

    //Create validationObject and add it to the list of validations
    var validateObject = new ValidationObject(validationTarget,validationType, errorMsg, errorSpan);
    validationTarget.validationList.push(validateObject);

    if(this.validateBlur)
    {
        validationTarget.onblur = this.validateObject;
    }

}

//Validation Object
function ValidationObject(formElement, validationType, errorMsg, errorSpan)
{
    this.formElement = formElement;
    this.validationType = validationType             //The type of validation to be checked
    this.error = errorMsg;                           //The error message 
    this.errorSpan = errorSpan;                     //Error message display location
    this.validate = validate;
    
}

//Validates an Object
function validateObject()
{
    bRet = true;        //Object starts out validated
    if(!this.validationList && validator.debug === true){
        alert("No validation set up on element:" + this.name);
        return;
    }
    for(var validation = 0 ; validation < this.validationList.length; validation++){
        
        bRet = this.validationList[validation].validate();

        //If the object fails validation stop the checks
        if(!bRet){
            return bRet;
        }
    }
    
}

function validate(){
    //Evaluate the validationType for a command and value
    return this.validationType.testFunction(this);
}


//Test to ensure element has been filled out
function testRequiredInput(validateObject){
    var formElement = validateObject.formElement;
    var errorSpan = validateObject.errorSpan;
    var error = validateObject.error;

    if(!validateObject.formElement.value.length>0)
    {
       document.getElementById(errorSpan).innerHTML = error;
       return false;
    }
    else {
        document.getElementById(errorSpan).innerHTML = "";
    }
    return true;
}

//Test for max input
function testMaxLength(validateObject){
    var formElement = validateObject.formElement;
    var maxLength = validateObject.validationType.value;
    var errorSpan = validateObject.errorSpan;
    var error = validateObject.error;
    console.log(formElement.value.length);
    console.log(maxLength);
    if(formElement.value.length > maxLength)
    {
        //Shorten Input and paste error 
        formElement.value = formElement.value.substring(0,maxLength);
        document.getElementById(errorSpan).innerHTML = error;
        console.log(formElement.value.length);
        return false;
    }
    else{
        document.getElementById(errorSpan).innerHTML = "";
    }

    return true;
}

//Test for pattern
function testPattern(validateObject){
    
    var formElement = validateObject.formElement;
    var errorSpan = validateObject.errorSpan;
    var pattern = validateObject.validationType.value;
    var error = validateObject.error;

    if(formElement.value.search(pattern) < 0){
        document.getElementById(errorSpan).innerHTML = error;
        return false;
    }
    else {
        document.getElementById(errorSpan).innerHTML = "";
    }

    return true;
}