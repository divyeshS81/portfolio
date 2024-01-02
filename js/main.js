// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })




//   document.addEventListener("DOMContentLoaded", function() {
//     document.getElementById("form").addEventListener("submit", function(event) {
//         event.preventDefault(); // Prevent the default form submission

//         // Perform actions with the submitted data (send to server, process, etc.)

//         // Clear the form after submission
//         this.reset();
//     });
// });