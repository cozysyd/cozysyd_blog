function validateForm() {
    let x = document.forms["newsletterForm"]["name"].value;
    if (x == "Name") {
      alert("Name must be filled out");
      return false;
    }
    let y = document.forms["newsletterForm"]["email"].value;
    if (y == "Email") {
      alert("Email must be filled out");
      return false;
    }
  }