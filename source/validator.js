//Constructor
function Validator(formName){
    
    //Set form object
    this.formObj = document.forms[formName];
    //List of validations

    if(!this.formObj){
        alert("Error unable to retreive form object " + formName);
        return;
    }

    //Set Functions
    this.addValidation = addValidation;
    this.validateForm = validateForm;
    this.validate = validateForm;
    this.validator = this;

}

//Add a validation to the form
function addValidation(frmName, validation, errorMsg, errorSpan)
{
    //Check that the formObj is set
    if(!this.formObj){
        alert("Error unable to retreive form object " + formName);
        return;
    }

    //Input Element
    var formElement = this.formObj[frmName];
    //Check that the form element exists
    if(!formElement){
        alert("Error unable to retreive form element:" + frmName);
    }

    //Check to see if element already has a validation set
    if(!formElement.validationList){
        formElement.validationList = new ValidationList(formElement);
    }

    

    //Add validation to the forms validation list
    formElement.validationList.add(validation, errorMsg, errorSpan)
    formElement.validatorObj = this;

    formElement.onblur = validate_On_Blur;

    
}
function validate_On_Blur(){
    console.log(this);
    this.validationList.validate();
}

//Validation List Object
function ValidationList(formItem, validation, errorMsg){
    this.list = new Array();    //Holds the different validations for the form element
    this.formItemObj = formItem;
    this.add = addValidationToElement;      // Function to add a validation to the element validation list
    this.validate = validateValidationList;
}

function addValidationToElement(validation, errorMsg,errorSpan){
    this.list[this.list.length] = new ValidationObject(this.formItemObj, validation, errorMsg, errorSpan);
}

//Validate validation list
function validateValidationList()
{;
    var bRet = true;
    //iterate through list and validate each item
    for( var index = 0; index < this.list.length; index++){
        bRet = this.list[index].validate();
        if(!bRet){
            break;  //If the element is invalid stop validating the list
        }
    }
    return bRet;
}

//Validation Object
function ValidationObject(formElement, validation, errorMsg, errorSpan){

    this.formItemObj = formElement; 
    this.errorSpan = errorSpan;         //Location to display error message   
    this.validation = validation;       //Holds the validation type to be completed
    this.error = errorMsg;              //Stores the error message related to the validation.
    this.validate = validateFormItem;   //Validates the object.
    
    
}

function validateFormItem()
{
    var vCommand = "";          //The command literal
    var commandValue = "";      //The value associated with the validation command
    var equalSign = this.validation.search("=");
    console.log(this.formItemObj.maxLength);

    if(equalSign > 0){
        vCommand = this.validation.slice(0,equalSign);
        commandValue = this.validation.slice(equalSign, this.validation.length);
        console.log("vC"+vCommand);
        console.log("cV" + commandValue);
    } 


    if(this.validation === "required"){
        return inputRequired(this.formItemObj, this.error, this.errorSpan);
    } 
    return true;

    
}

//Validate all form items
function validateForm()
{
    var bRet = true;
    var formElements = this.formObj.elements;

    for(var element = 0; element < formElements.length; element++){
        if(formElements[element].validationList)
        {
            //validate the validation list
           
           bRet = formElements[element].validationList.validate();
        }
    }

    return bRet;
}




//Validations 


//Requirement Validation
function inputRequired(formElement , errorMsg, errorSpan){
    console.log(formElement);
    if(!formElement.value.length > 0){
        document.getElementById(errorSpan).innerHTML = errorMsg;
        return false;
        } 
        else{
            document.getElementById(errorSpan).innerHTML = "";
        }
    return true;
}

//Pattern Validation


//Length Validation

//Dyanamic Character Collection