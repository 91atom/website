$(function() {
    $('#send').click(function(e) {
        e.preventDefault();
        $.ajax({
                url: "https://formspree.io/91atom@gmail.com",
                method: "POST",
                data: {
                    userName: $('#userName').val(),
                    userEmail: $('#userEmail').val(),
                    userMessage: $('#userMessage').val()
                },
                dataType: "json"
            })
            .done(function() {
                $('form').html('<h1>Thank you!</h1>')
            })
            .fail(function() {
                $('form').html('<h1>Error</h1>')
            });
    });
});
