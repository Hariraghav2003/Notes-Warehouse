function validate(){
    const Firstname=document.getElementById("Firstname").value;
    const Lastname=document.getElementById("Lastname").value;
    const phonenumber=document.getElementById("phonenumber").value;
    const dob=document.getElementById("dob").value;
    const address=document.getElementById("address").value;
    const username=document.getElementById("Username").value;
    const password=document.getElementById("Password").value;
    const rpassword=document.getElementById("rpassword").value;
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const day = currentDate.getDate().toString().padStart(2, '0');
    
    const formattedDate = `${year}-${month}-${day}`;
    console.log(formattedDate); // Example output: "2024-10-27"

    // console.log(Firstname+","+Lastname+","+phonenumber+","+dob+","+address+","+ username+ ","+password+","+rpassword);
    if (password===rpassword && dob!=formattedDate){
        window.alert("sucessfull!!");
        const userdetails={};
        userdetails.Firstname=Firstname;
        userdetails.Lastname=Lastname;
        userdetails.phonenumber=phonenumber;
        userdetails.dob=dob;
        userdetails.address=address;
        userdetails.username=username;
        userdetails.password=password;
        userdetails.date=new Date();
        console.log( userdetails.Firstname + "," + userdetails.Lastname +","+ userdetails.address+","+userdetails.dob+","+userdetails.username+","+userdetails.password+","+userdetails.date);
    }
    else if(dob==formattedDate){
        window.alert("DOB Invalid");
    }   
    else if(password===rpassword)
    {
        window.alert("password doesn't match..Try Again!!")
    }
}
function redirect(){
    window.location.href='Noteswarehouse.html';
    
}