(function () {
  function registerInDatabase(currentU, currentUEmail, currentUName) {
      if (currentU && currentUEmail) {
         var data = {"currentUser": currentU,
		     "currentUserEmail": currentUEmail,
		     "currentUserName": currentUName};
	  
	  $.post("http://freezing-day-7773.herokuapp.com/register/",
		 data,
		 function(data) {
		  if (typeof data != undefined) {
		     switch (data)  {
			 case "created":
		     }
		    }
		 }
	  );
       }
  }
 })();