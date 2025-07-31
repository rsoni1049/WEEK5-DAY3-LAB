    const contactMethodSelect = document.getElementById("contact-method");
    const contactLabel = document.getElementById("contact-label");
    const contactInput = document.getElementById("contact-detail");

    contactMethodSelect.addEventListener("change", function () {
      if (this.value === "email") {
        contactLabel.textContent = "Enter Email";
        contactInput.type = "email";
        contactInput.placeholder = "you@example.com";
      } else {
        contactLabel.textContent = "Enter Phone Number";
        contactInput.type = "tel";
        contactInput.placeholder = "xxx-xxx-xxxx";
      }
    });

    // Initialize default state
    document.addEventListener("DOMContentLoaded", () => {
      contactMethodSelect.dispatchEvent(new Event("change"));
    });