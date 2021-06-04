$(document).ready(function() {
  $("#basic-form").validate({
    errorClass: "error fail-alert",
    validClass: "valid success-alert",
    rules: {
      fname : {
        required: true,
        minlength: 3
      },
      lname: {
        required: true,
        minlength: 3
      },
      email: {
        required: true,
        email: true
      }
    },
    messages : {
      fname: {
        required: "Please enter your First Name",
        minlength: "Name should be at least 3 characters"
      },
      lname: {
        required: "Please enter your Last Name",
        minlength: "Name should be at least 3 characters"
      },
      email: {
        email: "The email should be in the format: abc@domain.tld"
      }
    }
  });
});