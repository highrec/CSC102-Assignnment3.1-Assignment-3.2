function checkCreds()
{
    var UserName = document.getElementById("UserName").value;
    var DLnumber = document.getElementById("DLnumber").value;
    var Zipcode = document.getElementById("Zipnum").value;
        //
    var AppInfo = UserName + DLnumber;
        
        alert(AppInfo.length);
    if (AppInfo.length >20 || AppInfo.length <3)
    {
        document.getElementById("appUpdate").innerHTML = "Application Info is invalid";
    }
        
     if (Zipcode.length ==5)
    {
        alert("Application Approved");
        //location.replace("tables.html");//
    }
    else 
    {
        alert ("invalid code");
    document.getElementById("appUpdate").innerHTML = "Zipcode not approved";
    }
}
