
const ss=localStorage.getItem("status");
      console.log(typeof ss);
      function checksignin(){
        
        if(ss==1){
          const username  = localStorage.getItem("loggedin");
          const userid = JSON.parse(localStorage.getItem(username));
          document.getElementById('usersignin').innerHTML=`
          <li class="dropdownu" onclick="userdashboard()" ondblclick="userdashboardreset()">${userid.Firstname} ${userid.Lastname} &nbsp;<i class="bi bi-patch-check fa-solid fa-lg" style="color:hotpink"></i>
                <div id="userdashboarddisp"> </div>
            </li>`;
        }
        
       };
       checksignin();
       function signinalertwd(){

        if(ss==1){
          window.location.href="./webdevelopment.html";
        }
        else{
            Swal.fire({
              title: "Sign-in!!",
              html: `
                Kindly Sign-in to continue!!
                <a href="signin.html" target="_blank" > Sign-in</a>`,
              icon: "warning",
            }).then((result) => {
            location.reload();
        });
        }
        }
       function userdashboard(){
        document.getElementById("userdashboarddisp").innerHTML= 
              `<div class="dropdowncontentu" style="width:fitcontent;">
               <i class="fa-solid fa-star" style="color:hotpink;"></i> <a onclick="statusclear()" style="color:black">Sign-out</a> <br>
               <i class="fa-solid fa-star" style="color:hotpink;"></i> <a onclick="yourdetails()" style="color:black">Your Details</a>
              </div>`;
       }
       function userdashboardreset(){
        document.getElementById("userdashboarddisp").style.display="none";
        location.reload();
       }
       function statusclear(){
        localStorage.setItem("status",0);
        location.replace("Noteswarehouse.html");
       }
       function yourdetails(){
        location.href="userdetails.html";
       }