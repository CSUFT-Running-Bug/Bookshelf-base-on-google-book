$(document).ready(function () {
    $("#myId").fullpage({
        sectionsColor: ['#1bbc9b', '#4BBFC3'],//添加背景颜色
    });

    $(window).resize(function () {
        autoScrolling();
    });

    //自适应大小
    function autoScrolling() {
        let $w = $(window).width();
        if ($w < 1024) {
            $.fn.fullpage.setAllowScrolling(false);
        } else {
            $.fn.fullpage.setAllowScrolling(true);
        }
    }
});



