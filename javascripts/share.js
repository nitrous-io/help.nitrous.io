$(function() {
    function t() {
        var t = $(".shareBtn"), e = 0, i = function() {
            $(t[e++]).toggleClass("animate"), e < t.length && setTimeout(i, 50)
        };
        $(".social-sharing").toggleClass("open"), i()
    }
    $("#table-of-contents #toc-trigger").on("click", function() {
        $(this).parents("#table-of-contents").toggleClass("closed")
    }), $(".sbMain").on("click", function() {
        return t(), !1
    }), $(".tutorial-single").length > 0 && $.scrollUp({
        animation: "fade",
        activeOverlay: "#00FFFF"
    }), $(document).bind("click", function(e) {
        0 === $(e.target).closest(".social-sharing").length && $(".social-sharing").hasClass("open") && t()
    })
})
