$("#submit").click(function () {
    $(":input[required]").each(function () {                     
        var myForm = $('#myForm');
        if (!$myForm[0].checkValidity()) 
          {                
            $(myForm).submit();              
          }
        });
  });