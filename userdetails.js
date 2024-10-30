function userdetails(){
    const username=document.getElementById('name').value;
    const email=document.getElementById('email').value;
    console.log("Username:"+username+","+"E-mail:"+email);
  }
  function request(){
    const request=document.getElementById('userrequest').value;
    console.log("User requested:"+request);
    window.alert("Your request has been received! We’re processing it and will update shortly.");
  }