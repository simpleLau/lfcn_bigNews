$(function () {
    // console.log(BigNew);
    // 首页加载信息
    $.get({
        url: BigNew.user_info,
        success(res) {
            $('.user_info > img').prop('src', res.data.userPic);
            $('.user_info > span').html(`欢迎&nbsp;&nbsp;${res.data.nickname}`);
            $('.user_center_link > img').prop('src', res.data.userPic);
        },
        dataType: 'json'
        // complete(data) {
        //     console.log(data);
        // }
    });

    // 左侧效果
    $('.level01').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
        if ($(this).next().hasClass('level02')) {
            $(this).next('.level02').slideToggle().end().find('b').toggleClass('rotate0');
        } else {
            // console.log($('.level02'));
            $('.level02').slideUp();
            $('.level02 li').removeClass('active');
        }
    });

    $('.level02 li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
    });

    $('.logout').on('click', function () {
        localStorage.removeItem('bignews_token_heima');
        location.href = './login.html';
    });



})

