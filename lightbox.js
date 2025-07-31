$(document).ready(function() {
  // Lightbox functionality
  $('.lightbox-toggle').click(function(e) {
    e.preventDefault();
    const imgSrc = $(this).attr('href');
    const caption = $(this).attr('title');
    
    $('.backdrop').fadeIn(300);
    $('.lightbox').fadeIn(300);
    $('.lightbox-image').attr('src', imgSrc);
    $('.lightbox-caption').text(caption);
  });
  
  $('.lightbox-close, .backdrop').click(function() {
    $('.lightbox, .backdrop').fadeOut(300);
  });
  
  // Prevent lightbox from closing when clicking inside
  $('.lightbox-content').click(function(e) {
    e.stopPropagation();
  });
  
  // Pet details modal
  $('.details-btn').click(function() {
    const petCard = $(this).closest('.pet-card');
    const name = petCard.data('name');
    const breed = petCard.data('breed');
    const age = petCard.data('age');
    const image = petCard.data('image');
    const details = petCard.data('details');
    
    $('#petModal .modal-title').text(`${name} - ${breed}`);
    $('#petModal .modal-image-container').html(`<img src="${image}" alt="${name}">`);
    $('#petModal .modal-details').html(`
      <p><strong>Age:</strong> ${age}</p>
      <p><strong>Details:</strong> ${details}</p>
    `);
    
    $('#petModal').fadeIn(300);
  });
  
  $('.modal-close, .modal').click(function() {
    $('#petModal').fadeOut(300);
  });
  
  // Prevent modal from closing when clicking content
  $('.modal-content').click(function(e) {
    e.stopPropagation();
  });
  
  // Filter functionality
  $('#species-filter, #age-filter').change(function() {
    const species = $('#species-filter').val();
    const age = $('#age-filter').val();
    
    $('.pet-card').each(function() {
      const cardSpecies = $(this).data('species');
      const cardAge = $(this).data('age');
      
      const speciesMatch = (species === 'all') || (cardSpecies === species);
      const ageMatch = (age === 'all') || (cardAge === age);
      
      if (speciesMatch && ageMatch) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  });
});