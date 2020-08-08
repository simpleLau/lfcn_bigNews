$(function () {
    try { require('jQuery') } catch (err) { };
    // 文章页面渲染
    function articleInit(page, perpage, type, state) {
        $.get({
            url: BigNew.article_query,
            dataType: 'json',
            data: { page, perpage, type, state },
            success(res) {
                // console.log(res.data.data);
                $('tbody').html(template('tbodyTp', res.data.data));
            }
        })
    }
    let page = 1;
    let perpage = 10;
    articleInit(page, perpage);

    $.get({
        url: BigNew.category_list,
        dataType: 'json',
        success(res) {
            $('#selCategory').html(template('selectTp', res.data))
        }
    })


    $('#btnSearch').click(function () {
        console.log($('#selCategory').val());
        let type = $('#selCategory').val();
        let state = $('#selStatus').val();
        articleInit(page, perpage, type, state);
    })


})