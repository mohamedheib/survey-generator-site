var query = location.search.substring(1);
query = query.split("?");
var keyValuePairs = query[0].split(/=/);
var F = keyValuePairs[1];

    if(F == '1'){
        var sub = document.getElementById("sub");
        sub.innerText = "Invalid Username Or Password please try again";
    }

