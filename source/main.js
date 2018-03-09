function openTab(evt, tabName){
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for(i = 0 ; i < tabcontent.length ; i++){
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for( i = 0 ; i < tablinks.length; i++){
        tablinks[i].className = tablinks[i].className.replace(" active","");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

function textValidation(formName, inputName){

    var test = document.forms[formName][inputName];
    if(!document.forms[formName][inputName].value){
    document.getElementById(inputName + 'error').innerHTML="<p>Cannot be blank.</p>";
    }else document.getElementById(inputName + 'error').innerHTML="";
}
