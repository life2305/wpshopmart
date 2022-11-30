function validation(){
    var name=document.getElementById("name").value;
    var phone=document.getElementById("phone").value;
    var email=document.getElementById("email").value;
    var subject=document.getElementById("subject").value;
    var message=document.getElementById("message").value;
    var form_alerts=document.getElementById("form_alerts");
    var text;

    error_message.style.padding="10px";

    if(name.length <5){
        text ="Please Enter valid name";
        error_message.innerHTML = text;
        return false;
    }
    return false;

}