function getOhm(){
    var a = document.getElementById("ep").value;
    var b = document.getElementById("led").value;
    var c = document.getElementById("circuit").value;
    
    var ohm = 0.1/((a/c)/((3*b)+1));
    document.getElementById("ohm").innerHTML = ohm;
    }