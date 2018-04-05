
//Show first tab
var hometab = document.getElementById("hometab")

if(hometab){
    hometab.style.display = "block";
}

function openTab(evt, tabName, tabbutton){
    var i, tabcontent, tablinks;
    tabimages = document.getElementsByClassName("block-tab");
    tabcontent = document.getElementsByClassName("tabcontent");
    for(i = 0 ; i < tabcontent.length ; i++){
        tabcontent[i].style.display = "none";
    }


    tablinks = document.getElementsByClassName("tablinks");
    for( i = 0 ; i < tablinks.length; i++){
        tablinks[i].className = tablinks[i].className.replace(" active","");
    }

    evt.currentTarget.className += " active";
    document.getElementById(tabName).style.display = "block";
}

function navShrink() {
    var x = document.getElementById("navbar-block");
    if (x.className.search("topnav") > -1) {
        if(x.className.search("responsive") < 0){
            x.className += " responsive";
        } else {
            x.className = x.className.replace(" responsive","");
        }
    }

    var dropdown = document.getElementById("dropdownNav");
    if(dropdown.className.search("responsive") < 0) {
        dropdown.className += " responsive";
    }else {
        dropdown.className = dropdown.className.replace(" responsive","");
    }
}






