$(document).ready(function () {
    $('#saveBtn').click(function () {
        var fname = $('#fname').val();
        var lname = $('#lname').val();
        var email = $('#email').val();
        var psw = $('#psw').val();
        var psw2 = $('#psw2').val();
        if (fname && lname && email && psw && psw2 && (psw === psw2)) {
            $.ajax({
                url:  '/site/watchdelay',
                method: 'post',
                async: false,
                data: {
                    district: district,
                    street: street,
                    houseNumber: houseNumber,
                },
                success: function (response) {
                    obj = JSON.parse(response);
                    if (obj > 0) {
                        delaymessage(obj);
                    }
                    else {
                        $('#delaymessage').addClass('hide');
                    }
                }
            })
        }
        console.log(fname);
    })
})