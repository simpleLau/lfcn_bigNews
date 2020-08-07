$(function () {
    try { require('jQuery') } catch (err) { };
    function init() {
        $.get({
            url: BigNew.category_list,
            data: 'json',
            success(res) {
                if (res.code == 200) {
                    // console.log(res.data);
                    $('tbody').html(template('tbodyTp', res.data))
                }
            }
        });
    }

    init();

    // ajax封装
    function opt(url, data,) {
        $.post({
            url,
            data,
            success(res) {
                // console.log(res);
                alert(res.msg);
                init();
            },
            error(err) {
                if (err.status == 400) {
                    alert(err.responseJSON.msg);
                }
            }
        })
    }

    // 点击新增
    $('#xinzengfenlei').on('click', function () {
        $('.modal-title').text('新增分类');
        $('.btn-primary').text('新增');
    })

    // 点击编辑
    $('tbody').on('click', '.btn-info', function () {
        $('.modal-title').text('编辑分类');
        $('.btn-primary').text('编辑');
        $('[name=name]').val($(this).data('name'));
        $('[name=slug]').val($(this).data('slug'));
        $('[name=id]').val($(this).data('id'));

        // console.log($(this).data());
    })

    // 模态框确定点击
    $('.btn-primary').on('click', function () {
        if ($('.btn-primary').text() === '新增') {
            const form = $('form').serialize();
            opt(BigNew.category_add, form);
        } else if ($('.btn-primary').text() === '编辑') {
            const form = $('form').serialize();
            // console.log(form);
            opt(BigNew.category_edit, form);
        }
        $('#myModal').modal('hide');
    })

    // 模态框隐藏之后调用
    $('#myModal').on('hide.bs.modal', function () {
        // $('#myModal [name=name]').val('');
        // $('#myModal [name=slug]').val('');
        // $('#myModal [name=id]').val('');
        $('form')[0].reset();
    })

    $('tbody').on('click', '.btn-del', function () {
        // let id = $('.btn-del').data('id');  //如果是用这个永远选第一个
        let id = $(this).data('id');
        // console.log(id);
        if (confirm('确定删除？')) {
            opt(BigNew.category_delete, { id });
        }
    })



})