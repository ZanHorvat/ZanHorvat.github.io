function controlNav() {
    var x = document.getElementById("myNav");
    if (x.className === "nav") {
        x.className += " responsive";
    } else {
        x.className = "nav";
    }
    if(document.getElementsByClassName("fa fa-arrow-up")[0]){
        document.getElementsByClassName("fa fa-arrow-up")[0].className = "fa fa-bars";
    } else {
        document.getElementsByClassName("fa fa-bars")[0].className = "fa fa-arrow-up";
    }
        
}