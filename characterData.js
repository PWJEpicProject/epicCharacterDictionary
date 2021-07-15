

$(document).ready(function() {
    
    $("#button").click(function(e){
        e.preventDefault();
       var name = $('#name').val();
       var gender = $('input:radio[name=sex]:checked').val();
       var age = $('#age').val();
  
       var content = 
           
           '<div class="col-2">' + name + '</div>' +
                     '<div class="col-2">' + gender + '</div>' +
                     '<div class="col-2">'+ age + '</div>' +
            '<div class="col-2"><button class="edit-row">Edit</button><button class="delete-row">Delete</button></div>';
          
        if ($(this).hasClass('save-edit')) {
            $('.editing').html(content);
            $("#button").removeClass('save-edit').val('Submit');
        } else {
            var rowContent = '<div class="employee-row row">' + content + '</div>';
            $('#empinfo').append(rowContent);
        }
    });
    
    $('body').on('click', '.edit-row', function (e) {
        $('.editing').removeClass('editing');
        $(this).closest('.employee-row').addClass('editing');
        $("#button").addClass('save-edit').val('Save');
    });
    
    $('body').on('click', '.delete-row', function (e) {
        $(this).closest('.employee-row').remove();
    });
  });  