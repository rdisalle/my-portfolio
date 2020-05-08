$(".jumper").on("click", function(currentTarget) {
    
    currentTarget.preventDefault();

    $("body, html").animate({ 
        scrollTop: $($(this).attr('href')).offset().top 
    }, 500);
});

