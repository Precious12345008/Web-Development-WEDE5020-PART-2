/* =========================================================
   Pre_Luxx Boutique — shared site behaviour
   Handles the mobile navigation toggle on every page, and
   basic front-end validation feedback for the enquiry and
   contact forms (progressively enhances the plain HTML form).
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {
  // ---- Mobile navigation toggle ----
  var navToggle = document.querySelector(".nav-toggle");
  var mainNav = document.querySelector(".main-nav");

  if (navToggle && mainNav) {
    navToggle.addEventListener("click", function () {
      var isOpen = mainNav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }

  // ---- Enquiry / contact form feedback ----
  // The form does not submit to a live backend yet (this is a static
  // Part 1 build), so we intercept submission, run simple validation,
  // and show a confirmation message in place of a real server response.
  var forms = document.querySelectorAll("form[data-validate]");

  forms.forEach(function (form) {
    var status = form.querySelector(".form-status");

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      var requiredFields = form.querySelectorAll("[required]");
      var allValid = true;

      requiredFields.forEach(function (field) {
        if (!field.value || field.value.trim() === "") {
          allValid = false;
          field.style.borderColor = "#9B4A3A";
        } else {
          field.style.borderColor = "";
        }
      });

      if (!status) return;

      if (allValid) {
        status.textContent = "Thanks — your message has been noted. We'll get back to you soon.";
        status.setAttribute("data-state", "success");
        form.reset();
      } else {
        status.textContent = "Please fill in all required fields before sending.";
        status.setAttribute("data-state", "error");
      }
    });
  });
});
