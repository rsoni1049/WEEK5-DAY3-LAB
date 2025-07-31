document.addEventListener('DOMContentLoaded', function() {
  // Get all pet images
  const petImages = document.querySelectorAll('.pet-image');
  const modal = document.getElementById('petModal');
  const modalContent = document.querySelector('.modal-body');
  const closeBtn = document.querySelector('.modal-close');

  // Add click event to each pet image
  petImages.forEach(image => {
    image.addEventListener('click', function() {
      const petCard = this.closest('.pet-card');
      const petName = petCard.dataset.name;
      const petBreed = petCard.dataset.breed;
      const petAge = petCard.dataset.age;
      const petImage = petCard.dataset.image;
      const petDescription = petCard.dataset.description;
      const petDetails = petCard.dataset.details;

      // Create modal content
      modalContent.innerHTML = `
        <img src="${petImage}" alt="${petName}">
        <div>
          <h2>${petName}</h2>
          <p><strong>Breed:</strong> ${petBreed}</p>
          <p><strong>Age:</strong> ${petAge}</p>
          <p><strong>Description:</strong> ${petDescription}</p>
          <div class="pet-details">
            <h3>More About ${petName}</h3>
            <p>${petDetails}</p>
          </div>
          <div class="btn-container" style="margin-top: 1.5rem;">
            <a href="contact.html" class="btn">Adopt ${petName}</a>
          </div>
        </div>
      `;

      // Display the modal
      modal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    });
  });

  // Close modal when clicking the close button
  closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  });

  // Close modal when clicking outside the modal content
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });

  // Close modal with Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.style.display === 'flex') {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });
});