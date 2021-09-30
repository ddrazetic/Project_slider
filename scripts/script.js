$( document ).ready(()=> {
    $('#button_next').on('click', ()=>{
        $('#button_next').attr("disabled", true);
        $('#button_prev').attr("disabled", true);
        $('#first_photos li').parent().prepend($('#first_photos li:last').clone());
        $('#first_photos').css("margin-left", -$('#first_photos li:last').width());
        $('#first_photos').animate({
            marginLeft: 0
        });
        $('#first_photos li:last').delay(500).queue((next)=> {
            $('#first_photos li:last').remove();
            next();
            });
        $('#second_photos li').parent().prepend($('#second_photos li:last').clone());
        $('#second_photos').css("margin-left", -$('#second_photos li:last').width());
        $('#second_photos').animate({
            marginLeft: 0
        });
        $('#second_photos li:last').delay(500).queue((next)=> {
            $('#second_photos li:last').remove();
            $('#button_next').attr("disabled", false);
            $('#button_prev').attr("disabled", false);
            next();
            });
    });
    $('#button_prev').on('click', ()=>{
        $('#button_prev').attr("disabled", true);
        $('#button_next').attr("disabled", true);
        $('#first_photos li').parent().append($('#first_photos li:first').clone());
        $('#first_photos').animate({
            marginLeft: -$('#first_photos li:first').width()
            });
        $('#first_photos li:first').delay(500).queue((next)=> {
            $('#first_photos li:first').remove();
            $('#first_photos').css("margin-left", "0");
            next();
            });
        $('#second_photos li').parent().append($('#second_photos li:first').clone());
        $('#second_photos').animate({
            marginLeft: -$('#second_photos li:first').width()
            });
        $('#second_photos li:first').delay(500).queue((next)=> {
            $('#second_photos li:first').remove();
            $('#second_photos').css("margin-left", "0");
            $('#button_prev').attr("disabled", false);
            $('#button_next').attr("disabled", false);
            next();
            });
    });
});