$(document).ready(function(){

    /* Open lightbox on image click */
    $('.lightbox-toggle img').click(function(e){
        e.preventDefault();
        
        // Animate backdrop and show box
        $('.backdrop').animate({'opacity':'.80'}, 300, 'linear').css('display', 'block');
        $('.box').fadeIn();
        
        // Clear previous content
        $('.lightbox-content').empty();
        $('.lightbox-description').empty();
        
        // Clone the clicked image and its description
        var $img = $(this).clone();
        var description = $(this).data('description') || $(this).attr('alt');
        
        // Add content to lightbox
        $('.lightbox-content').append($img);
        $('.lightbox-description').text(description);
    });

    /* Click to close lightbox */
    $('.close, .backdrop').click(function(){
        $('.backdrop').animate({'opacity':'0'}, 300, 'linear', function(){
            $('.backdrop').css('display', 'none');
        });
        $('.box').fadeOut();
    });

    // Prevent lightbox close when clicking inside the box
    $('.box').click(function(e){
        e.stopPropagation();
    });

    /* Existing rollover effect code would remain here */
});