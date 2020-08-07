$(function () {
    const login = (e) => {
        // 获取值
        const username = $('.input_txt').val();
        const password = $('.input_pass').val();
        // 当用户名和密码不为空才进行操作
        if (username && password) {
            $.post({
                url: BigNew.user_login,
                data: { username, password },
                success(res) {
                    // 设置一个开关，当点击取消的时候就不跳转页面
                    let flag = true;
                    // 模态框插件
                    $('#myModal').modal('show');
                    $('#logininfo').text(res.msg);
                    $('.btn-default').click(function () {
                        // 如果点击取消就设置关闭，则不跳转
                        flag = false;
                    })
                    $('#myModal').on('hidden.bs.modal', function () {
                        // 当code正确登录并且点击的不是取消就跳转
                        if ((res.code === 200) && flag) {
                            // 把token放在sessionStorage里面
                            localStorage.setItem('bignews_token_heima', res.token);
                            location.href = './index.html';
                        }
                    });
                    // 点击确定也要隐藏
                    $('.btn-primary').on('click', () => {
                        $('#myModal').modal('hide');
                    });
                },
                dataType: 'json'
            });
        } else {
            // 没输入内容执行以下
            $('#myModal').modal('show');
            $('#logininfo').text('请输入用户名或密码');
            $('.btn-primary').on('click', () => {
                $('#myModal').modal('hide');
            });
        }
    }
    // 登录界面的回车
    $('.input_pass').on('keyup', (e) => {
        if (e.keyCode === 13) {
            login(e);
        }
    })
    // 登录界面的登录按钮
    $('.input_sub').on('click', login);
})