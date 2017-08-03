function UserAction()
{
    var urlvariable;

    urlvariable = "json";

    var ItemJSON;

    ItemJSON = [{
      "displayName": "string",
      "email": "string",
      "fullName": "string"}];

    URL = "https://subhajitusa.atlassian.net/rest/servicedeskapi/customer" + urlvariable;  //Your URL

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = callbackFunction(xmlhttp);
    xmlhttp.open("POST", URL, false);
    xmlhttp.setRequestHeader("Content-Type", "application/json");
    xmlhttp.setRequestHeader('Authorization', 'Basic ' + window.btoa('id:password')); //in prod, you should encrypt user name and password and provide encrypted keys here instead
    xmlhttp.onreadystatechange = callbackFunction(xmlhttp);
    xmlhttp.send(ItemJSON);
    alert(xmlhttp.responseText);
    document.getElementById("div").innerHTML = xmlhttp.statusText + ":" + xmlhttp.status + "<BR><textarea rows='100' cols='100'>" + xmlhttp.responseText + "</textarea>";
}

function callbackFunction(xmlhttp)
{
    //alert(xmlhttp.responseXML);
}
