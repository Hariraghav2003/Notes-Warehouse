function hello(event){
    if(event.key=="Enter"){
      let search=document.getElementById("search").value;
      let searchvalue=  search.toLowerCase();
      console.log(searchvalue);
      if(searchvalue=="cse" || searchvalue=="computer science and engineering" || searchvalue=="computer science and engineering notes" || searchvalue== "computerscienceandengineering" || searchvalue== "computerscienceengineering" || searchvalue== "computerscienceandengineeringnotes"  ) {
        window.location.href= "cse.html";
      }
      else if(searchvalue=="csesem1notes" || searchvalue=="cse semester 1 notes" || searchvalue=="csesemester1notes" || searchvalue=="cse sem 1 notes"|| searchvalue=="sem1cse" || searchvalue=="semester1cse"  ) {
        window.location.href= "sem1cse.html";
      }
      else if(searchvalue=="csesem2notes" || searchvalue=="cse semester 2 notes" || searchvalue=="csesemester2notes" || searchvalue=="cse sem 2 notes" || searchvalue=="sem2cse" || searchvalue=="semester2cse"  ) {
        window.location.href= "sem2cse.html";
      }
      else if(searchvalue=="csesem3notes" || searchvalue=="cse semester 3 notes" || searchvalue=="csesemester3notes" || searchvalue=="cse sem 3 notes" || searchvalue=="sem3cse" || searchvalue=="semester3cse"  ) {
        window.location.href= "sem3cse.html";
      }
      else if(searchvalue=="csesem4notes" || searchvalue=="cse semester 4 notes" || searchvalue=="csesemester4notes" || searchvalue=="cse sem 4 notes" || searchvalue=="sem4cse" || searchvalue=="semester4cse"  ) {
        window.location.href= "sem4cse.html";
      }
      else if(searchvalue=="csesem5notes" || searchvalue=="cse semester 5 notes" || searchvalue=="csesemester5notes" || searchvalue=="cse sem 5 notes" || searchvalue=="sem5cse" || searchvalue=="semester5cse"  ) {
        window.location.href= "sem5cse.html";
      }
      else if(searchvalue=="csesem6notes" || searchvalue=="cse semester 6 notes" || searchvalue=="csesemester6notes" || searchvalue=="cse sem 6 notes" || searchvalue=="sem6cse" || searchvalue=="semester6cse"  ) {
        window.location.href= "sem6cse.html";
      }
      else if(searchvalue=="csesem7notes" || searchvalue=="cse semester 7 notes" || searchvalue=="csesemester7notes" || searchvalue=="cse sem 7 notes" || searchvalue=="sem7cse" || searchvalue=="semester7cse"  ) {
        window.location.href= "sem7cse.html";
      }
      else if(searchvalue=="csesem8notes" || searchvalue=="cse semester 8 notes" || searchvalue=="csesemester8notes" || searchvalue=="cse sem 8 notes" || searchvalue=="sem8cse" || searchvalue=="semester8cse"  ) {
        window.location.href= "sem8cse.html";
      }
      
      else{
        alert("Kindly enter a proper value!! like cse,csesem1notes,sem1cse");
      }
    }
   }