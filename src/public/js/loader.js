(function ($) {
    $(function () {
        MyYoutubeRecommendation.loadVideos(my_yt_rec_ajax.url).then((value) => {
            MyYoutubeRecommendation.listsCallBacks.forEach((item) => {
                item.callback(value, item.container, item.layout, item.limit);
            })
        });
    });
})(jQuery);