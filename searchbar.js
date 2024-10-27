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
      else{
        alert("Kindly enter a proper value!! like cse,csesem1notes,sem1cse");
      }
    }
   }