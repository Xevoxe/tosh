

$(document).ready(function(){
    
    //Set focus on first errored element
    var setfocus = "none";
    var form_submit = false;


    //Handle form input
    $("form").keyup(function(e){
        //Handle telephone input
        $(this).find('input[type=tel]').each(function(){
            if($(this).attr("type") == "tel"){
                var number = $(this).val();
                if(number.length == 3 || number.length == 7){
                    number = number + '-';
                    $(this).val(number);
                }       
            }
        });
    });

    $("form").submit(function(e){
         //Prevent the form from submitting
        e.preventDefault(e);

        //Tracks validation of form for submission to server
        var validated = true;
        var form = this;

    //Begin Form validation

        $(form).find(':required').each(function(){
            //Check for empty value
            if(!$.trim($(this).val())){

                //Set focus to first errored element
                if(setfocus === "none"){
                    $(this).focus();
                    setfocus = $(this).attr('id');
                }
                invalidElement($(this));
                validate = false;
            }

            //Email Pattern Validation
            if($(this).attr("type") == "email")
                validateEmail($(this));

            if($(this).attr("type") == "tel"){
                  var phone_reg = /^\d{3}-\d{3}-\d{4}$/
                  if(!phone_reg.test($.trim($(this).val()))) {
                    $(this).val("");
                    invalidElement($(this));
                  } 
                }  

            //Change styles back when element has been manipulated
        }).keyup(function (){
            $(this).removeClass("border-error");
            $("label[for='" + $(this).attr('id') + "']").removeClass("label-error");
            
            //validate email
            if($(this).attr("type") == "email")
                validateEmail($(this));   

            //Set focus back to none
            setfocus = "none";
        });

        //Procced to form submission if validated
        if(validated && !form_submit){
            form_submit = true;
            var post_url = $(this).attr("action");  //get form action url
            var request_method = $(this).attr("method") //get form GET/POST method
            var form_data = $(this).serialize(); //encode form elements fo submission
        
            $.ajax({
                type: request_method,
                dataType : 'JSON',
                data: form_data  
            })
            .done(function(response){
                    //handle the server response 
                    console.log("Done!");
                    console.log(JSON.stringify(response));
                    console.log(response.text);
                    if(response.type == 'error'){
                       var output = '<div class = "error">' + response.text + '</div>';
                    }
                    else {
                        $(form)[0].reset();
                        var output = '<div class = "success">' + response.text + '</div>';
                    }
                    $(".info-box").html(output);
            });         
        }

    });

    function validateEmail(email){
        var email_reg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            if(!email_reg.test($.trim(email.val())))
            {
                invalidElement(email);
            }
    }

    function invalidElement(element){
         //Change border color to red
         element.addClass("border-error");
         //Change label required to red
         $("label[for='" + element.attr('id') + "']").addClass("label-error");
    }


});