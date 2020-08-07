$(function () {
    $.get({
        url: BigNew.category_list,
        success(res) {
            console.log(res);
        }
    })
})