$(document).ready(function(){
   $('ul li').click(function(){

    var clicked_href = $(this).children('a').attr('href');
    $('img').hide();
    $(clicked_href).show();
});
    
    
    
   
    
    
    
    
    
    
    
    
    
});