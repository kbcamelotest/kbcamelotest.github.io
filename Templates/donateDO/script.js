function showhide(){
    var div = document.getElementById("letterText");
    if (div.className === "") {
        div.className = "active";
    } else {
        div.className = "";
    }
}