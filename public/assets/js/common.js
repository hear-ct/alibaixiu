$('#logout').on('click', function () {
    $.ajax({
        type: 'post',
        url: '/logout',
        success: function (response) {
            location.href = 'login.html'
        }
    })
})