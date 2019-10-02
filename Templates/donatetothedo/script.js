function showhide(){
    var div = document.getElementById("displayLetter");
    if (div.className === "") {
        div.className = "active";
    } else {
        div.className = "";
    }
}