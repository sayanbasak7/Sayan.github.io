function validateForm(){

    var title = document.forms["editMenuItem"]["title"].value;
    if(title == ""){
    
        alert("title is required");
        return false;
    }
    var titleLength=title.length;
    if(titleLength < 2 || titleLength > 65)
    {
        alert("title should have to be 2 to 65 characters");
        return false;
    }
    var price = document.forms["editMenuItem"]["price"].value;
    if (isNaN(price)){
    
        alert("Price has to be a number");
        return false;
    }
    if(price == "")
    {
        alert("Price is reqiured");
        return false;
    }
    var dateOfLaunch=document.forms["editMenuItem"]["dateOfLaunch"].value
    if(dateOfLaunch=="")
    {
        alert ("Date of launch is requird");
        return false;
    }
    if(!dateofLaunch.match(/^(0[1-9]|[12][0-9]|3[01])[\- \/.](?:(0[1-9]|1[012])[\- \/.](19|20)[0-9]{2})$/))
    {
        alert("Incorrect date formate expected format(dd/mm/yyyy)");
        return false;
    }
}