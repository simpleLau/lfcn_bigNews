
$(function () {
    try { require('jQuery') } catch (err) { }
    $.get({
        url: BigNew.user_detail,
        // headers: { 'Authorization': localStorage.getItem('bignews_token_heima') },
        success(res) {
            // console.log(res.data);
            $('#inputEmail1').val(res.data.nickname);
            $('#inputEmail2').val(res.data.username);
            $('#inputEmail3').val(res.data.email);
            $('.user_pic').prop('src', res.data.userPic);
            $('#inputEmail4').val(res.data.password);
        },
        dataType: 'json'
    })

    $('#exampleInputFile').on('change', function () {
        const myfile = this.files[0]
        const url = URL.createObjectURL(myfile);
        $('.user_pic').prop('src', url);
    })

    // 实现个人信息的编辑
    // 4、编辑用户信息
    // 请求地址：/admin/user/edit
    // 请求方式：post
    // 请求数据：使用formData提交
    $('.btn-edit').on('click', function () {
        // $('form')
        $.post({
            url: BigNew.user_edit,
            data: new FormData($('#form')[0]),
            contentType: false,
            processData: false,
            success(res) {
                window.parent.location.href = './index.html';
            }
        })
    })



})